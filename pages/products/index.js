import { useState, useEffect, useRef } from 'react'
import useHandleFilters from '../../hooks/useHandleFilters'
import useIsMobile from '../../hooks/useIsMobile'

import FiltersModal from '../../components/FiltersModal'
import ProductCard from '../../components/ProductCard'

const productsAPI = 'http://makeup-api.herokuapp.com/api/v1/products.json'
// const productsAPI = 'http://localhost:3000/api/products'

const ProductList = ({ products }) => {
	const isTablet = useIsMobile(800)
	const elementRef = useRef()

	const {
		appliedFilters,
		handleTypeFilterInput,
		handleBrandFilterInput
	} = useHandleFilters()

	const [filteredProducts, setFilteredProducts] = useState([])

	const filterByType = () => {
		const newFilteredProductsArray = products.filter(product => (
			product.product_type === appliedFilters.type.query_param_name)
		)
		setFilteredProducts(newFilteredProductsArray)
	}

	const filterByBrand = () => {
		const newFilteredProductsArray = products.filter(product => (
			product.brand === appliedFilters.brand.name
		))
		setFilteredProducts(newFilteredProductsArray)
	}

	const filterByTypeAndBrand = () => {
		const newFilteredProductsArray = products.filter(product => (
			product.product_type === appliedFilters.type.query_param_name &&
			product.brand === appliedFilters.brand.name
		))
		setFilteredProducts(newFilteredProductsArray)
	}

	let typeFilterSelected = appliedFilters.type.query_param_name
	let brandFilterSelected = appliedFilters.brand.query_param_name
	let filterSelected = typeFilterSelected || brandFilterSelected

	useEffect(() => {
		if (products) {
			if (!typeFilterSelected && !brandFilterSelected) setFilteredProducts([])
			if (typeFilterSelected && !brandFilterSelected) filterByType()
			if (!typeFilterSelected && brandFilterSelected) filterByBrand()
			if (typeFilterSelected && brandFilterSelected) filterByTypeAndBrand()
		}
	}, [appliedFilters])

	return (
		<main className="product_list">
			<h2>All products</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac laoreet urna, a suscipit lacus. Ut quis nisl ex. Nunc condimentum arcu sem, at vehicula velit fringilla a.</p>
			<FiltersModal
				appliedFilters={appliedFilters}
				handleTypeFilterInput={handleTypeFilterInput}
				handleBrandFilterInput={handleBrandFilterInput}
				isTablet={isTablet}
			/>
			<div className="product_list__container">
				{!filterSelected && products?.map((product, index, array) => (
					<ProductCard
						key={product.id}
						product={product}
						elementRef={index == array.length - 1 ? elementRef : null}
					/>
				))}
				{filterSelected && filteredProducts?.map((product, index, array) => (
					<ProductCard
						key={product.id}
						product={product}
						elementRef={index == array.length - 1 ? elementRef : null}
					/>
				))}
			</div>
			{(filterSelected && filteredProducts.length == 0) && (
				<div className="product_list__no_products">
					<hr />
					<h2>There&apos;s no products to show</h2>
					<p>Please try with other filters</p>
				</div>
			)}
		</main>
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