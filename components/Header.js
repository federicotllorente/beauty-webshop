import Link from 'next/link'
import { useRouter } from 'next/router'

import SearchBar from './SearchBar'

import Logo from './icons/Logo'
import ProfileIcon from './icons/ProfileIcon'
import CartIcon from './icons/CartIcon'

const Header = ({ setSearchQuery, isMobile, isTablet }) => {
	const router = useRouter()

	return (
		<header>
			<div className="header__main">
				<Link href="/">
					<a><Logo className="header__main__logo" /></a>
				</Link>
				{(!isTablet && router.pathname === '/products') && (
					<SearchBar
						setSearchQuery={setSearchQuery}
						isMobile={isMobile}
					/>
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
				{(isTablet && router.pathname === '/products') && (
					<SearchBar
						setSearchQuery={setSearchQuery}
						isMobile={isMobile}
					/>
				)}
			</div>
		</header>
	)
}

export default Header