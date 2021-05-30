import Link from 'next/link'
import { useRouter } from 'next/router'
import useIsMobile from '../hooks/useIsMobile'

import SearchBar from './SearchBar'

import Logo from './icons/Logo'
import ProfileIcon from './icons/ProfileIcon'
import CartIcon from './icons/CartIcon'

const Header = () => {
	const isMobile = useIsMobile(425)
	const isTablet = useIsMobile(800)
	const router = useRouter()

	return (
		<header>
			<div className="header__main">
				<Link href="/">
					<a><Logo className="header__main__logo" /></a>
				</Link>
				{(!isTablet && router.pathname === '/products') && (
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
				{(isTablet && router.pathname === '/products') && (
					<SearchBar isMobile={isMobile} />
				)}
			</div>
		</header>
	)
}

export default Header