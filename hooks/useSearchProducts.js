import { useState, useEffect } from 'react'

const useSearchProducts = (filteredProducts, filterSelected, products, searchQuery) => {
	const [searchResult, setSearchResult] = useState([])

	const searchProducts = (productsArray, searchQuery) => {
		const newSearchResult = productsArray?.filter(product => (
			product.name?.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
			product.brand?.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
		))
		setSearchResult(newSearchResult)
	}

	useEffect(() => {
		if (filterSelected && filteredProducts) {
			searchProducts(filteredProducts, searchQuery)
		} else {
			searchProducts(products, searchQuery)
		}
	}, [searchQuery])

	return { searchResult }
}

export default useSearchProducts