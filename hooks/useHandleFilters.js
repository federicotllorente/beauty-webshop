import { useState } from 'react'

const useHandleFilters = () => {
	const [appliedFilters, setAppliedFilters] = useState([])

	const addFilter = filterToAdd => {
		const newAppliedFiltersList = [appliedFilters, filterToAdd].flat()
		setAppliedFilters(newAppliedFiltersList)
	}

	const removeFilter = filterToRemove => {
		const newAppliedFiltersList = appliedFilters.filter(filter => filter.query_param_name !== filterToRemove)
		setAppliedFilters(newAppliedFiltersList)
	}

	const handleFilterCheckbox = e => {
		const appliedAlready = appliedFilters?.some(filter => filter.query_param_name === e.target.id)
		if (!appliedAlready) {
			addFilter({
				name: e.target.name,
				query_param_name: e.target.id
			})
		} else {
			removeFilter(e.target.id)
		}
	}

	return { appliedFilters, handleFilterCheckbox }
}

export default useHandleFilters