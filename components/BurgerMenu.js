import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useFetchFilters from '../hooks/useFetchFilters'

import ProfileIcon from './icons/ProfileIcon'
import CartIcon from './icons/CartIcon'

const filtersAPI = 'http://localhost:3000/api/filters'

const BurgerMenu = () => {
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

	const menuClassNames = router.pathname === '/'
		? 'burger_menu burger_menu--home'
		: 'burger_menu'

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
		<div className={menuClassNames}>
			<div className="burger_menu__main">
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
			<div className="burger_menu__categories">
				{filters?.product_categories?.map(category => (
					<Link key={category.id} href="/products">
						{category.name}
					</Link>
				))}
			</div>
		</div>
	)
}

export default BurgerMenu