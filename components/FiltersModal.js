import { useState, useEffect } from 'react'
import useFetchFilters from '../hooks/useFetchFilters'

import { UnexpectedError } from './ErrorMessages'
import { Loader } from './Loader'

const filtersAPI = 'http://localhost:3000/api/filters'

const FiltersModal = ({ appliedFilters, handleTypeFilterInput, handleBrandFilterInput, isTablet }) => {
	const [modalOpen, setModalOpen] = useState(false)

	const {
		filters,
		loadingFilters,
		errorFilters,
		fetchFilters
	} = useFetchFilters()

	useEffect(() => {
		fetchFilters(filtersAPI)
	}, [])

	errorFilters && <UnexpectedError error={errorFilters} />

	return (
		loadingFilters
			? <Loader />
			: <>
				{(!isTablet || modalOpen) && (
					<div className="filters_modal">
						<div className="filters_modal__header">
							<h2>Filters</h2>
							{isTablet && (
								<button onClick={() => setModalOpen(false)}>Close</button>
							)}
						</div>
						<div className="filters_modal__applied_filters">
							{appliedFilters?.type.name && (
								<button onClick={handleTypeFilterInput}>
									{appliedFilters?.type.name}
								</button>
							)}
							{appliedFilters?.brand.name && (
								<button onClick={handleBrandFilterInput}>
									{appliedFilters?.brand.name}
								</button>
							)}
						</div>
						<div className="filters_modal__types">
							<h3>Filter by product type</h3>
							{filters?.product_types?.map(type => (
								<button
									key={type.id}
									name={type.name}
									id={type.query_param_name}
									onClick={handleTypeFilterInput}
								>
									{type.name}
								</button>
							))}
						</div>
						<div className="filters_modal__brands">
							<h3>Filter by brand</h3>
							{filters?.product_brands?.map(brand => (
								<button
									key={brand.id}
									name={brand.name}
									id={brand.query_param_name}
									onClick={handleBrandFilterInput}
								>
									{brand.name}
								</button>
							))}
						</div>
					</div>
				)}
				{isTablet && (
					<button className="filters_modal_button" onClick={() => setModalOpen(true)}>
						Filters
					</button>
				)}
			</>
	)
}

export default FiltersModal