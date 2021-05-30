import { useState, useEffect, useRef } from 'react'
import useFetchProducts from '../../hooks/useFetchProducts'
import useHandleFilters from '../../hooks/useHandleFilters'
import useIsMobile from '../../hooks/useIsMobile'

import FiltersModal from '../../components/FiltersModal'
import ProductCard from '../../components/ProductCard'
import { SearchError } from '../../components/ErrorMessages'
import { LoaderPage } from '../../components/Loader'

const productsAPI = 'http://makeup-api.herokuapp.com/api/v1/products.json'
// const productsAPI = 'http://localhost:3000/api/products'

const ProductList = () => {
	const [currentPage, setCurrentPage] = useState(0)
	const productsPerPage = 30
	const isTablet = useIsMobile(800)
	const elementRef = useRef()

	const {
		appliedFilters,
		handleTypeFilterInput,
		handleBrandFilterInput
	} = useHandleFilters()

	const {
		fetchProducts, products,
		loadingProducts, errorProducts
	} = useFetchProducts()

	useEffect(() => {
		fetchProducts(productsAPI)
		products && setCurrentPage(1)
	}, [])

	errorProducts && <SearchError error={errorProducts} />

	return (
		loadingProducts
			? <LoaderPage />
			: <main className="product_list">
				<h2>All products</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac laoreet urna, a suscipit lacus. Ut quis nisl ex. Nunc condimentum arcu sem, at vehicula velit fringilla a.</p>
				<FiltersModal
					appliedFilters={appliedFilters}
					handleTypeFilterInput={handleTypeFilterInput}
					handleBrandFilterInput={handleBrandFilterInput}
					isTablet={isTablet}
				/>
				<div className="product_list__container">
					{products?.slice(0, productsPerPage * currentPage).map((product, index, array) => {
						return (
							<ProductCard
								key={product.id}
								product={product}
								elementRef={index == array.length - 1 ? elementRef : null}
							/>
						)
					})}
				</div>
			</main>
	)
}

export const getServerSideProps = async context => {
	const response = await fetch(productsAPI)
	if (response.ok) {
		const props = await response.json()
		return { props: { props } }
	}
	if (context.res) {
		// This will show a 404 error
		context.res.writeHead(404).end()
	}
}

export default ProductList