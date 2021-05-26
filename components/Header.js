import Link from 'next/link'

import Logo from './icons/Logo'
import SearchIcon from './icons/SearchIcon'
import ProfileIcon from './icons/ProfileIcon'
import CartIcon from './icons/CartIcon'

const Header = ({ categories, handleSearchBar, isMobile }) => {
	return (
		<header>
			<div className="header__main">
				<Logo />
				<form>
					<input
						type="text"
						name="search"
						placeholder="Search a product, a brand..."
						onChange={handleSearchBar}
					/>
					<button>
						<SearchIcon />
					</button>
				</form>
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
					{categories?.map(category => (
						<Link key={category.id} href={category.path}>
							{category.name}
						</Link>
					))}
				</div>
			)}
		</header>
	)
}

export default Header