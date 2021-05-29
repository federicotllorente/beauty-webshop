import { useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'

import CustomHead from '../components/CustomHead'
import BurgerMenuButton from '../components/BurgerMenuButton'
import BurgerMenu from '../components/BurgerMenu'
import Header from '../components/Header'

import '../styles/main.scss'

const MyApp = ({ Component, pageProps }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const isMobile = useIsMobile(425) // 425px is the breakpoint

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
			<Header />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp