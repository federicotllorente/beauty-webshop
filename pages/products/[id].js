import Link from 'next/link'
import ProductGallery from '../../components/ProductGallery'
import ProductInformation from '../../components/ProductInformation'

const ProductDetails = (props) => {
	const generateImagesArray = (image, maxQuantity) => {
		// This function creates an images array from a single one
		const imageQuantity = Math.floor(Math.random * maxQuantity)
		const imagesArray = []
		for (let index = 0; index < imageQuantity; index++) {
			imagesArray.push(image)
		}
		return imagesArray
	}
	const imagesArray = generateImagesArray(props.api_featured_image, 10)

	// errorProduct && (
	// 	<main>
	// 		<h1>Oops! Something unexpected happened</h1>
	// 		<p>{errorProduct}</p>
	// 	</main>
	// )

	return (
		<main className="product_details">
			<Link href="/products">Back to products</Link>
			<div className="product_details__main">
				<ProductGallery
					imagesArray={imagesArray}
					productID={props.id}
					thumbnailURL={props.api_featured_image}
				/>
				<ProductInformation
					name={props.name}
					brand={props.brand}
					rating={props.rating}
					colorsArray={props.product_colors}
					description={props.description}
					price={props.price}
				/>
			</div>
			<div className="product_details__more_information">
				<h2>Description</h2>
				<p>{props.description}</p>
				<h2>Additional information</h2>
				<p>{props.description}</p>
			</div>
		</main>
	)
}

export const getServerSideProps = async context => {
	const { id } = context.params
	const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
	const props = await response.json()
	try {
		return { props }
	} catch (err) {
		return { props: err }
	}
}

export default ProductDetails