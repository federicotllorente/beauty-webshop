import Link from 'next/link'
import useIsMobile from '../hooks/useIsMobile'

import Header from '../components/Header'

const Home = () => {
	const isMobile = useIsMobile(425)
	const isTablet = useIsMobile(800)

	return (
		<>
			<Header
				isMobile={isMobile}
				isTablet={isTablet}
			/>
			<main className="home">
				<h1>Discover a whole new world</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac laoreet urna, a suscipit lacus. Ut quis nisl ex. Nunc condimentum arcu sem, at vehicula velit fringilla a.</p>
				<Link href="/products">See all products</Link>
			</main>
		</>
	)
}

export default Home