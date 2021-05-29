import { useState } from 'react'

const useFetchFilters = () => {
	const [filters, setFilters] = useState([])
	const [loadingFilters, setLoadingFilters] = useState(true)
	const [errorFilters, setErrorFilters] = useState(null)

	const fetchFilters = async api => {
		!loadingFilters && setLoadingFilters(true)
		const response = await fetch(api)
		const data = await response.json()
		try {
			setLoadingFilters(false)
			setFilters(data)
		} catch (err) {
			setLoadingFilters(false)
			setErrorFilters(err)
		}
	}

	return {
		filters,
		loadingFilters,
		errorFilters,
		fetchFilters
	}
}

export default useFetchFilters