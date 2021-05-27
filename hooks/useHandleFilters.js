import { useState } from 'react'

const useHandleFilters = () => {
	const [appliedFilters, setAppliedFilters] = useState([])

	const addFilter = filterToAdd => {
		const newAppliedFiltersList = [appliedFilters, filterToAdd].flat()
		setAppliedFilters(newAppliedFiltersList)
	}

	const removeFilter = filterToRemove => {
		const newAppliedFiltersList = appliedFilters.filter(filter => filter !== filterToRemove)
		setAppliedFilters(newAppliedFiltersList)
	}

	const handleFilterCheckbox = e => {
		const appliedAlready = appliedFilters?.some(filter => filter === e.target.name)
		if (!appliedAlready) {
			addFilter(e.target.name)
		} else {
			removeFilter(e.target.name)
		}
	}

	return { appliedFilters, handleFilterCheckbox }
}

export default useHandleFilters