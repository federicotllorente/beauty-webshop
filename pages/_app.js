import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import useFetchFilters from '../hooks/useFetchFilters'

import CustomHead from '../components/CustomHead'
import BurgerMenuButton from '../components/BurgerMenuButton'
import BurgerMenu from '../components/BurgerMenu'
import Header from '../components/Header'

import '../styles/main.scss'

const filtersAPI = 'http://localhost:3000/api/filters'

const MyApp = ({ Component, pageProps }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const isMobile = useIsMobile(425) // 425px is the breakpoint
	const router = useRouter()

	const {
		filters,
		loadingFilters,
		errorFilters,
		fetchFilters
	} = useFetchFilters()

	useEffect(() => {
		fetchFilters(filtersAPI)
	}, [])

	errorFilters && (
		<main>
			<h1>Oops! Something unexpected happened</h1>
			<p>{errorFilters}</p>
		</main>
	)

	loadingFilters && (
		<main>
			<h2>Loading...</h2>
		</main>
	)

	return (
		<>
			<CustomHead>
				<title>Beauty Webshop</title>
			</CustomHead>
			{isMobile && (
				<>
					{menuIsOpen && (
						<BurgerMenu
							menuIsOpen={menuIsOpen}
							filters={filters}
							router={router}
						/>
					)}
					<BurgerMenuButton
						menuIsOpen={menuIsOpen}
						setMenuIsOpen={setMenuIsOpen}
					/>
				</>
			)}
			<Header
				filters={filters}
				isMobile={isMobile}
				router={router}
			/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp