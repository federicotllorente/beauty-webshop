import Link from 'next/link'
import { useRouter } from 'next/router'

import ProfileIcon from './icons/ProfileIcon'
import CartIcon from './icons/CartIcon'

const BurgerMenu = () => {
	const router = useRouter()

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
				<Link href="/">Homepage</Link>
				<Link href="/products">Products</Link>
				<Link href="/products/1048">Product details (Lippie Pencil)</Link>
			</div>
		</div>
	)
}

export default BurgerMenu