import { useState, useEffect, useRef } from 'react'
import useFetchProducts from '../../hooks/useFetchProducts'
import useFetchFilters from '../../hooks/useFetchFilters'
import useHandleFilters from '../../hooks/useHandleFilters'
import useIsMobile from '../../hooks/useIsMobile'

import FiltersModal from '../../components/FiltersModal'
import ProductCard from '../../components/ProductCard'
import { SearchError, UnexpectedError } from '../../components/ErrorMessages'
import { Loader, LoaderPage } from '../../components/Loader'

// const productsAPI = 'http://makeup-api.herokuapp.com/api/v1/products.json'
const productsAPI = 'http://localhost:3000/api/products'
const filtersAPI = 'http://localhost:3000/api/filters'

const ProductList = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const [currentPage, setCurrentPage] = useState(0)
	const productsPerPage = 20

	const { appliedFilters, handleFilterCheckbox } = useHandleFilters()
	const elementRef = useRef()
	const isTablet = useIsMobile(800)

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

	errorProducts && <SearchError error={errorProducts} />
	errorFilters && <UnexpectedError error={errorFilters} />
	loadingFilters && <LoaderPage />

	return (
		<main className="product_list">
			<h2>All products</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac laoreet urna, a suscipit lacus. Ut quis nisl ex. Nunc condimentum arcu sem, at vehicula velit fringilla a.</p>
			{loadingProducts && <Loader />}
			{!loadingProducts && (
				<>
					<FiltersModal
						modalOpen={modalOpen}
						setModalOpen={setModalOpen}
						appliedFilters={appliedFilters}
						handleFilterCheckbox={handleFilterCheckbox}
						filters={filters}
						isTablet={isTablet}
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
									imageURL={product.api_featured_image}
									colors={product.product_colors}
									elementRef={index == array.length - 1 ? elementRef : null}
								/>
							)
						})}
					</div>
				</>
			)}
		</main>
	)
}

export default ProductList