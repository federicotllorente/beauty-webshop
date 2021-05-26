import Link from 'next/link'

import ProfileIcon from './icons/ProfileIcon'
import CartIcon from './icons/CartIcon'

const BurgerMenu = ({ categories }) => {
	return (
		<div className="burger_menu">
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
				{categories?.map(category => (
					<Link key={category.id} href={category.path}>
						{category.name}
					</Link>
				))}
			</div>
		</div>
	)
}

export default BurgerMenu