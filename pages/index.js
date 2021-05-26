import CustomHead from '../components/CustomHead'
import BurgerMenuButton from '../components/BurgerMenuButton'
import Header from '../components/Header'

const Home = () => {
	return (
		<>
			<CustomHead>
				<title>Beauty Webshop</title>
			</CustomHead>
			<BurgerMenuButton />
			<Header />
			<h1>Starting the project</h1>
		</>
	)
}

export default Home