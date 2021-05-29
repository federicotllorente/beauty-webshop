import Link from 'next/link'

import SearchBar from './SearchBar'

import Logo from './icons/Logo'
import ProfileIcon from './icons/ProfileIcon'
import CartIcon from './icons/CartIcon'

const Header = ({ filters, isMobile, router }) => {
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
					{filters?.product_categories.map(category => (
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