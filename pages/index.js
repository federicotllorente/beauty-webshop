import { useState, useEffect } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import useFetchCategories from '../hooks/useFetchCategories'

import CustomHead from '../components/CustomHead'
import BurgerMenuButton from '../components/BurgerMenuButton'
import BurgerMenu from '../components/BurgerMenu'
import Header from '../components/Header'

const categoriesAPI = 'http://localhost:3000/api/categories'

const Home = () => {
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
			<h1>Starting the project</h1>
		</>
	)
}

export default Home