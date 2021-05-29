import Link from 'next/link'

import ProfileIcon from './icons/ProfileIcon'
import CartIcon from './icons/CartIcon'

const BurgerMenu = ({ filters, router }) => {
	const menuClassNames = router.pathname === '/'
		? 'burger_menu burger_menu--home'
		: 'burger_menu'

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
				{filters?.product_categories.map(category => (
					<Link key={category.id} href="/products">
						{category.name}
					</Link>
				))}
			</div>
		</div>
	)
}

export default BurgerMenu