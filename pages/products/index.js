import { useState, useRef } from 'react'
import useHandleFilters from '../../hooks/useHandleFilters'
import useIsMobile from '../../hooks/useIsMobile'
import useFilterProducts from '../../hooks/useFilterProducts'
import useSearchProducts from '../../hooks/useSearchProducts'

import Header from '../../components/Header'
import FiltersModal from '../../components/FiltersModal'
import ProductCard from '../../components/ProductCard'

const productsAPI = 'http://makeup-api.herokuapp.com/api/v1/products.json'

const ProductList = ({ products }) => {
	const [searchQuery, setSearchQuery] = useState('')
	const isMobile = useIsMobile(425)
	const isTablet = useIsMobile(800)
	const elementRef = useRef()

	const {
		appliedFilters,
		handleTypeFilterInput,
		handleBrandFilterInput
	} = useHandleFilters()

	const {
		filteredProducts,
		filterSelected
	} = useFilterProducts(appliedFilters, products)

	const { searchResult } = useSearchProducts(
		filteredProducts,
		filterSelected,
		products,
		searchQuery
	)

	const printProducts = productsArray => (
		productsArray?.map((product, index, array) => (
			<ProductCard
				key={product.id}
				product={product}
				elementRef={index == array.length - 1 ? elementRef : null}
			/>
		))
	)

	return (
		<>
			<Header
				setSearchQuery={setSearchQuery}
				isMobile={isMobile}
				isTablet={isTablet}
			/>
			<main className="product_list">
				{searchQuery
					? <h2>All results with &apos;{searchQuery}&apos;</h2>
					: <>
						<h2>All products</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac laoreet urna, a suscipit lacus. Ut quis nisl ex. Nunc condimentum arcu sem, at vehicula velit fringilla a.</p>
					</>
				}
				<FiltersModal
					appliedFilters={appliedFilters}
					handleTypeFilterInput={handleTypeFilterInput}
					handleBrandFilterInput={handleBrandFilterInput}
					isTablet={isTablet}
				/>
				<div className="product_list__container">
					{!filterSelected && !searchQuery
						? printProducts(products)
						: printProducts(filteredProducts)
					}
					{(searchQuery && searchResult) && printProducts(searchResult)}
				</div>
				{(filterSelected && filteredProducts.length == 0) && (
					<div className="product_list__no_products">
						<hr />
						<h2>There&apos;s no products to show</h2>
						<p>Please try with other filters</p>
					</div>
				)}
				{(searchQuery && !searchResult) && (
					<div className="product_list__no_products">
						<hr />
						<h2>There&apos;s no products to show</h2>
						<p>Please try with other keywords</p>
					</div>
				)}
			</main>
		</>
	)
}

export const getServerSideProps = async context => {
	const response = await fetch(productsAPI)
	if (response.ok) {
		const products = await response.json()
		return { props: { products } }
	}
	if (context.res) {
		// This will show a 404 error
		context.res.writeHead(404).end()
	}
}

export default ProductList