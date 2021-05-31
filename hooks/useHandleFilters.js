import { useState } from 'react'

const useHandleFilters = () => {
	const [appliedFilters, setAppliedFilters] = useState({
		type: {
			name: '',
			query_param_name: ''
		},
		brand: {
			name: '',
			query_param_name: ''
		},
		price: {
			min: null,
			max: null
		}
	})

	const handleTypeFilterInput = e => {
		if (appliedFilters?.type.query_param_name === e.target.id) {
			setAppliedFilters({
				type: '',
				brand: appliedFilters.brand,
				price: appliedFilters.price
			})
		} else {
			setAppliedFilters({
				type: {
					name: e.target.name,
					query_param_name: e.target.id
				},
				brand: appliedFilters.brand,
				price: appliedFilters.price
			})
		}
	}

	const handleBrandFilterInput = e => {
		if (appliedFilters?.brand.query_param_name === e.target.id) {
			setAppliedFilters({
				type: appliedFilters.type,
				brand: '',
				price: appliedFilters.price
			})
		} else {
			setAppliedFilters({
				type: appliedFilters.type,
				brand: {
					name: e.target.name,
					query_param_name: e.target.id
				},
				price: appliedFilters.price
			})
		}
	}

	const handlePriceFilterForm = e => {
		e.preventDefault()

		const minInput = e.target[0].value ? e.target[0].value : null
		const maxInput = e.target[1].value ? e.target[1].value : null

		setAppliedFilters({
			type: appliedFilters.type,
			brand: appliedFilters.brand,
			price: {
				min: minInput,
				max: maxInput
			}
		})
	}

	const clearPriceFilters = e => {
		e.preventDefault()

		setAppliedFilters({
			type: appliedFilters.type,
			brand: appliedFilters.brand,
			price: {
				min: null,
				max: null
			}
		})
	}

	return {
		appliedFilters,
		handleTypeFilterInput,
		handleBrandFilterInput,
		handlePriceFilterForm,
		clearPriceFilters
	}
}

export default useHandleFilters