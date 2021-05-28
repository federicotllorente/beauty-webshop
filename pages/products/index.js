import { useEffect } from 'react'
import useFetchProducts from '../../hooks/useFetchProducts'

import FiltersModal from '../../components/FiltersModal'
import ProductCard from '../../components/ProductCard'

const productsAPI = 'http://makeup-api.herokuapp.com/api/v1/products.json'

const ProductList = () => {
	const {
		products,
		loadingProducts,
		errorProducts,
		fetchProducts
	} = useFetchProducts()

	useEffect(() => {
		fetchProducts(productsAPI)
	}, [])

	errorProducts && (
		<div>{errorProducts}</div>
	)

	loadingProducts && (
		<h2>Loading...</h2>
	)

	const pageMax = 20

	return (
		<main className="product_list">
			<h2>All products</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac laoreet urna, a suscipit lacus. Ut quis nisl ex. Nunc condimentum arcu sem, at vehicula velit fringilla a.</p>
			<FiltersModal />
			<div className="product_list__container">
				{products?.slice(0, pageMax).map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						brand={product.brand}
						price={`${product.price_sign} ${product.price} ${product.currency}`}
						rating={product.rating}
						imageURL={product.image_link}
						colors={product.product_colors}
					/>
				))}
			</div>
		</main>
	)
}

export default ProductList