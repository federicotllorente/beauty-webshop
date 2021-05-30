import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import useFetchFilters from '../hooks/useFetchFilters'

import SearchBar from './SearchBar'
import { LoaderPage } from './Loader'
import { UnexpectedError } from './ErrorMessages'

import Logo from './icons/Logo'
import ProfileIcon from './icons/ProfileIcon'
import CartIcon from './icons/CartIcon'

const filtersAPI = 'http://localhost:3000/api/filters'

const Header = () => {
	const isMobile = useIsMobile(425)
	const isTablet = useIsMobile(800)
	const router = useRouter()

	const {
		filters,
		loadingFilters,
		errorFilters,
		fetchFilters
	} = useFetchFilters()

	useEffect(() => {
		fetchFilters(filtersAPI)
	}, [])

	errorFilters && <UnexpectedError error={errorFilters} />
	loadingFilters && <LoaderPage />

	return (
		<header>
			<div className="header__main">
				<Link href="/">
					<a><Logo className="header__main__logo" /></a>
				</Link>
				{(!isTablet && router.pathname !== '/') && (
					<SearchBar isMobile={isMobile} />
				)}
				{!isMobile && (
					<div className="header__main__buttons">
						<Link href="/">
							<a>
								<ProfileIcon />
								<p>Profile</p>
							</a>
						</Link>
						<Link href="/">
							<a>
								<CartIcon />
								<p>Cart</p>
							</a>
						</Link>
					</div>
				)}
				{(isTablet && router.pathname !== '/') && (
					<SearchBar isMobile={isMobile} />
				)}
			</div>
			{!isMobile && (
				<div className="header__categories">
					{filters?.product_categories?.map(category => (
						<Link key={category.id} href="/products">
							{category.name}
						</Link>
					))}
				</div>
			)}
		</header>
	)
}

export default Header