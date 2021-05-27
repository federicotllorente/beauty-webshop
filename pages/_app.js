import { useState, useEffect } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import useFetchCategories from '../hooks/useFetchCategories'

import CustomHead from '../components/CustomHead'
import BurgerMenuButton from '../components/BurgerMenuButton'
import BurgerMenu from '../components/BurgerMenu'
import Header from '../components/Header'

import '../styles/main.scss'

const categoriesAPI = 'http://localhost:3000/api/categories'

const MyApp = ({ Component, pageProps }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const isMobile = useIsMobile(425) // 425px is the breakpoint

	const {
		categories,
		loading,
		error,
		fetchCategories
	} = useFetchCategories()

	useEffect(() => {
		fetchCategories(categoriesAPI)
	}, [])

	error && (
		<div>{error}</div>
	)

	loading && (
		<h2>Loading...</h2>
	)

	return (
		<>
			<CustomHead>
				<title>Beauty Webshop</title>
			</CustomHead>
			{isMobile && (
				<>
					{menuIsOpen && (
						<BurgerMenu menuIsOpen={menuIsOpen} />
					)}
					<BurgerMenuButton
						menuIsOpen={menuIsOpen}
						setMenuIsOpen={setMenuIsOpen}
					/>
				</>
			)}
			<Header
				categories={categories}
				isMobile={isMobile}
			/>
			<main>
				<Component {...pageProps} />
			</main>
		</>
	)
}

export default MyApp