import { useState, useEffect } from 'react'
import Link from 'next/link'

import Logo from './icons/Logo'
import SearchIcon from './icons/SearchIcon'
import ProfileIcon from './icons/ProfileIcon'
import CartIcon from './icons/CartIcon'

const categoriesAPI = 'http://localhost:3000/api/categories'

const Header = () => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchCategories = async api => {
		setLoading(true)
		const response = await fetch(api)
		const data = await response.json()
		try {
			setLoading(false)
			setCategories(data)
		} catch (err) {
			setLoading(false)
			setError(err)
		}
	}

	useEffect(() => {
		fetchCategories(categoriesAPI)
	}, [])

	const handleSearchBar = () => { }

	error && (
		<div>{error}</div>
	)

	loading && (
		<h2>Loading...</h2>
	)

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
				<Link href="/">
					<a><ProfileIcon /></a>
				</Link>
				<Link href="/">
					<a><CartIcon /></a>
				</Link>
			</div>
			<div className="header__categories">
				{categories?.map(category => (
					<Link key={category.id} href={category.path}>
						{category.name}
					</Link>
				))}
			</div>
		</header>
	)
}

export default Header