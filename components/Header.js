import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import useFetchFilters from '../hooks/useFetchFilters'

import SearchBar from './SearchBar'

import Logo from './icons/Logo'
import ProfileIcon from './icons/ProfileIcon'
import CartIcon from './icons/CartIcon'

const filtersAPI = 'http://localhost:3000/api/filters'

const Header = () => {
	const isMobile = useIsMobile(425)
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

	errorFilters && (
		<main>
			<h1>Oops! Something unexpected happened</h1>
			<p>{errorFilters}</p>
		</main>
	)

	loadingFilters && (
		<main>
			<h2>Loading...</h2>
		</main>
	)

	return (
		<header>
			<div className="header__main">
				<Link href="/">
					<a><Logo className="header__main__logo" /></a>
				</Link>
				{router.pathname !== '/' && (
					<SearchBar isMobile={isMobile} />
				)}
				{!isMobile && (
					<>
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
					</>
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