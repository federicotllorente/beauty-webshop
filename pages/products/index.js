import { useState, useEffect, useRef } from 'react'
import useFetchProducts from '../../hooks/useFetchProducts'
import useFetchCategories from '../../hooks/useFetchCategories'
import useHandleFilters from '../../hooks/useHandleFilters'

import FiltersModal from '../../components/FiltersModal'
import ProductCard from '../../components/ProductCard'

const productsAPI = 'http://makeup-api.herokuapp.com/api/v1/products.json'
const categoriesAPI = 'http://localhost:3000/api/categories'

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
		fetchCategories, categories,
		loading, error
	} = useFetchCategories()

	useEffect(() => {
		fetchProducts(productsAPI)
		products && setCurrentPage(1)
	}, [])
	useEffect(() => {
		fetchCategories(categoriesAPI)
	}, [])

	errorProducts || error && (
		<div>{errorProducts || error}</div>
	)

	loadingProducts || loading && (
		<h2>Loading...</h2>
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
				categories={categories}
			/>
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
							imageURL={product.image_link}
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