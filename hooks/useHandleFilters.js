import { useState } from 'react'

const useHandleFilters = () => {
	const [appliedFilters, setAppliedFilters] = useState({
		type: {},
		brand: {}
	})

	const handleTypeFilterInput = e => {
		if (appliedFilters?.type.query_param_name === e.target.id) {
			setAppliedFilters({
				type: '',
				brand: appliedFilters.brand
			})
		} else {
			setAppliedFilters({
				type: {
					name: e.target.name,
					query_param_name: e.target.id
				},
				brand: appliedFilters.brand
			})
		}
	}

	const handleBrandFilterInput = e => {
		if (appliedFilters?.brand.query_param_name === e.target.id) {
			setAppliedFilters({
				type: appliedFilters.type,
				brand: ''
			})
		} else {
			setAppliedFilters({
				type: appliedFilters.type,
				brand: {
					name: e.target.name,
					query_param_name: e.target.id
				}
			})
		}
	}

	return { appliedFilters, handleTypeFilterInput, handleBrandFilterInput }
}

export default useHandleFilters