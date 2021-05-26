import { useState } from 'react'

const useFetchCategories = () => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchCategories = async api => {
		setLoading(true)
		const response = await fetch(api)
		const data = await response.json()
		try {
			setLoading(false)
			setCategories(data)
		} catch (err) {
			setLoading(false)
			setError(err)
		}
	}

	return {
		categories,
		loading,
		error,
		fetchCategories
	}
}

export default useFetchCategories