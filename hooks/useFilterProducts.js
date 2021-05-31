import { useState, useEffect } from 'react'

const useFilterProducts = (appliedFilters, products) => {
	const [filteredProducts, setFilteredProducts] = useState([])

	let typeFilterSelected = appliedFilters.type.query_param_name
	let brandFilterSelected = appliedFilters.brand.name

	let minPriceFilterRequested = appliedFilters.price.min
	let maxPriceFilterRequested = appliedFilters.price.max
	let priceFilterRequested = minPriceFilterRequested || maxPriceFilterRequested

	let filterSelected = typeFilterSelected || brandFilterSelected || priceFilterRequested

	const filtersSelected = {
		all: typeFilterSelected && brandFilterSelected && priceFilterRequested,
		onlyType: typeFilterSelected && !brandFilterSelected && !priceFilterRequested,
		onlyBrand: !typeFilterSelected && brandFilterSelected && !priceFilterRequested,
		onlyPrice: !typeFilterSelected && !brandFilterSelected && priceFilterRequested,
		onlyTypeAndBrand: typeFilterSelected && brandFilterSelected && !priceFilterRequested,
		onlyTypeAndPrice: typeFilterSelected && !brandFilterSelected && priceFilterRequested,
		onlyBrandAndPrice: !typeFilterSelected && brandFilterSelected && priceFilterRequested,
		onlyMinPriceFilter: minPriceFilterRequested && !maxPriceFilterRequested,
		onlyMaxPriceFilter: !minPriceFilterRequested && maxPriceFilterRequested,
		noPriceFilter: !minPriceFilterRequested && !maxPriceFilterRequested,
		bothPriceFilters: minPriceFilterRequested && maxPriceFilterRequested
	}

	const clearFilters = () => {
		setFilteredProducts([])
	}

	const filterProducts = {
		all: () => {
			// FILTER BY THE TYPE, BRAND AND PRICE
			if (filtersSelected.bothPriceFilters) {
				setFilteredProducts(products.filter(product => (
					product.product_type === typeFilterSelected &&
					product.brand === brandFilterSelected &&
					product.price >= minPriceFilterRequested &&
					product.price <= maxPriceFilterRequested
				)))
			} else if (filtersSelected.onlyMinPriceFilter) {
				setFilteredProducts(products.filter(product => (
					product.product_type === typeFilterSelected &&
					product.brand === brandFilterSelected &&
					product.price >= minPriceFilterRequested
				)))
			} else if (filtersSelected.onlyMaxPriceFilter) {
				setFilteredProducts(products.filter(product => (
					product.product_type === typeFilterSelected &&
					product.brand === brandFilterSelected &&
					product.price <= maxPriceFilterRequested
				)))
			}
		},
		byType: () => {
			// ONLY FILTER BY THE PRODUCT TYPE
			setFilteredProducts(products.filter(product => (
				product.product_type === typeFilterSelected
			)))
		},
		byBrand: () => {
			// ONLY FILTER BY THE BRAND
			setFilteredProducts(products.filter(product => (
				product.brand === brandFilterSelected
			)))
		},
		byPrice: () => {
			// ONLY FILTER BY THE PRICE
			if (filtersSelected.bothPriceFilters) {
				setFilteredProducts(products.filter(product => (
					product.price >= minPriceFilterRequested &&
					product.price <= maxPriceFilterRequested
				)))
			} else if (filtersSelected.onlyMinPriceFilter) {
				setFilteredProducts(products.filter(product => (
					product.price >= minPriceFilterRequested
				)))
			} else if (filtersSelected.onlyMaxPriceFilter) {
				setFilteredProducts(products.filter(product => (
					product.price <= maxPriceFilterRequested
				)))
			}
		},
		byTypeAndBrand: () => {
			// ONLY FILTER BY THE TYPE AND THE BRAND
			setFilteredProducts(products.filter(product => (
				product.product_type === typeFilterSelected &&
				product.brand === brandFilterSelected
			)))
		},
		byTypeAndPrice: () => {
			// ONLY FILTER BY THE TYPE AND THE PRICE
			if (filtersSelected.bothPriceFilters) {
				setFilteredProducts(products.filter(product => (
					product.product_type === typeFilterSelected &&
					product.price >= minPriceFilterRequested &&
					product.price <= maxPriceFilterRequested
				)))
			} else if (filtersSelected.onlyMinPriceFilter) {
				setFilteredProducts(products.filter(product => (
					product.product_type === typeFilterSelected &&
					product.price >= minPriceFilterRequested
				)))
			} else if (filtersSelected.onlyMaxPriceFilter) {
				setFilteredProducts(products.filter(product => (
					product.product_type === typeFilterSelected &&
					product.price <= maxPriceFilterRequested
				)))
			}
		},
		byBrandAndPrice: () => {
			// ONLY FILTER BY THE BRAND AND THE PRICE
			if (filtersSelected.bothPriceFilters) {
				setFilteredProducts(products.filter(product => (
					product.brand === brandFilterSelected &&
					product.price >= minPriceFilterRequested &&
					product.price <= maxPriceFilterRequested
				)))
			} else if (filtersSelected.onlyMinPriceFilter) {
				setFilteredProducts(products.filter(product => (
					product.brand === brandFilterSelected &&
					product.price >= minPriceFilterRequested
				)))
			} else if (filtersSelected.onlyMaxPriceFilter) {
				setFilteredProducts(products.filter(product => (
					product.brand === brandFilterSelected &&
					product.price <= maxPriceFilterRequested
				)))
			}
		}
	}

	useEffect(() => {
		if (products) {
			if (!filterSelected) {
				clearFilters()
			} else {
				filtersSelected.all && filterProducts.all()
				filtersSelected.onlyType && filterProducts.byType()
				filtersSelected.onlyBrand && filterProducts.byBrand()
				filtersSelected.onlyPrice && filterProducts.byPrice()
				filtersSelected.onlyTypeAndBrand && filterProducts.byTypeAndBrand()
				filtersSelected.onlyTypeAndPrice && filterProducts.byTypeAndPrice()
				filtersSelected.onlyBrandAndPrice && filterProducts.byBrandAndPrice()
			}
		}
	}, [appliedFilters])

	return {
		filteredProducts,
		filterSelected
	}
}

export default useFilterProducts