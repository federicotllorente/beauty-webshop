import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import useIsMobile from '../../hooks/useIsMobile'

import Header from '../../components/Header'
import ProductGallery from '../../components/ProductGallery'
import ProductInformation from '../../components/ProductInformation'
import { LoaderPage } from '../../components/Loader'

const ProductDetails = ({ product }) => {
	const router = useRouter()
	const isMobile = useIsMobile(425)
	const isTablet = useIsMobile(800)

	const [imagesArray, setImagesArray] = useState([])

	const generateImagesArray = (image, maxQuantity) => {
		// This function creates an images array from a single one
		const imageQuantity = Math.floor(Math.random() * maxQuantity)
		const imagesArray = []
		for (let index = 0; index < imageQuantity; index++) {
			imagesArray.push(image)
		}
		return imagesArray
	}

	useEffect(() => {
		const newImagesArray = generateImagesArray(product?.api_featured_image, 10)
		setImagesArray(newImagesArray)
	}, [])

	const generateRandomRating = () => {
		const randomRating = Math.random() * 5
		const decimalRound = Math.round(randomRating * 10) / 10
		return decimalRound
	}

	const finalRating = product?.rating || generateRandomRating()

	return (
		router.isFallback
			? <LoaderPage />
			: <>
				<Header
					isMobile={isMobile}
					isTablet={isTablet}
				/>
				{product && (
					<main className="product_details">
						<Link href="/products">
							<a>
								<span>⬅️</span>Back to products
							</a>
						</Link>
						<div className="product_details__main">
							<ProductGallery
								imagesArray={imagesArray}
								productID={product.id}
								thumbnailURL={product.api_featured_image}
							/>
							<ProductInformation
								name={product.name}
								brand={product.brand}
								rating={finalRating}
								colorsArray={product.product_colors}
								description={product.description}
								price={`${product.price_sign} ${product.price} ${product.currency}`}
							/>
						</div>
						<div className="product_details__more_information">
							<h2>Description</h2>
							<p>{product.description}</p>
							<h2>Additional information</h2>
							<p>{product.description}</p>
						</div>
					</main>
				)}
			</>
	)
}

export const getStaticPaths = async () => {
	const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
	const products = await response.json()

	const paths = products.map(product => ({
		params: {
			id: product.id.toString()
		}
	}))

	return { paths, fallback: true }
}

export const getStaticProps = async context => {
	const { id } = context.params
	const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
	if (response.ok) {
		const product = await response.json()
		return { props: { product } }
	}
}

export default ProductDetails