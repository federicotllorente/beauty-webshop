import { useState, useEffect } from 'react'

const useFilterProducts = (appliedFilters, products) => {
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

	return {
		filteredProducts,
		filterSelected
	}
}

export default useFilterProducts