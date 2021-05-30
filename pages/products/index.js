import { useState, useEffect, useRef } from 'react'
import useFetchProducts from '../../hooks/useFetchProducts'
import useFetchFilters from '../../hooks/useFetchFilters'
import useHandleFilters from '../../hooks/useHandleFilters'

import FiltersModal from '../../components/FiltersModal'
import ProductCard from '../../components/ProductCard'

// const productsAPI = 'http://makeup-api.herokuapp.com/api/v1/products.json'
const productsAPI = 'http://localhost:3000/api/products'
const filtersAPI = 'http://localhost:3000/api/filters'

const ProductList = () => {
	const [modalOpen, setModalOpen] = useState(false)

	const { appliedFilters, handleFilterCheckbox } = useHandleFilters()

	const [currentPage, setCurrentPage] = useState(0)
	const productsPerPage = 20

	const elementRef = useRef()

	const {
		fetchProducts, products,
		loadingProducts, errorProducts
	} = useFetchProducts()
	const {
		filters,
		loadingFilters,
		errorFilters,
		fetchFilters
	} = useFetchFilters()

	useEffect(() => {
		fetchProducts(productsAPI)
		products && setCurrentPage(1)
	}, [])
	useEffect(() => {
		fetchFilters(filtersAPI)
	}, [])

	errorProducts && (
		<main>
			<h1>Oops! We didn&apos;t find what you&apos;re looking for</h1>
			<p>{errorProducts}</p>
		</main>
	)
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
		<main className="product_list">
			<h2>All products</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac laoreet urna, a suscipit lacus. Ut quis nisl ex. Nunc condimentum arcu sem, at vehicula velit fringilla a.</p>
			<FiltersModal
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				appliedFilters={appliedFilters}
				handleFilterCheckbox={handleFilterCheckbox}
				filters={filters}
			/>
			{loadingProducts && (
				<h3>Loading products...</h3>
			)}
			<div className="product_list__container">
				{products?.slice(0, productsPerPage * currentPage).map((product, index, array) => {
					return (
						<ProductCard
							key={product.id}
							id={product.id}
							name={product.name}
							brand={product.brand}
							price={`${product.price_sign} ${product.price} ${product.currency}`}
							rating={product.rating}
							imageURL={product.api_featured_image}
							colors={product.product_colors}
							elementRef={index == array.length - 1 ? elementRef : null}
						/>
					)
				})}
			</div>
		</main>
	)
}

export default ProductList