import { useState } from 'react'

const useFetchProducts = () => {
	const [products, setProducts] = useState([])
	const [loadingProducts, setLoadingProducts] = useState(false)
	const [errorProducts, setErrorProducts] = useState(null)

	const fetchProducts = async api => {
		setLoadingProducts(true)
		const response = await fetch(api)
		const data = await response.json()
		try {
			setLoadingProducts(false)
			setProducts(data)
		} catch (err) {
			setLoadingProducts(false)
			setErrorProducts(err)
		}
	}

	return {
		products,
		loadingProducts,
		errorProducts,
		fetchProducts
	}
}

export default useFetchProducts