import Link from 'next/link'

const Home = () => {
	return (
		<main className="home">
			<h1>Discover a whole new world</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac laoreet urna, a suscipit lacus. Ut quis nisl ex. Nunc condimentum arcu sem, at vehicula velit fringilla a.</p>
			<Link href="/products">See all products</Link>
		</main>
	)
}

export default Home