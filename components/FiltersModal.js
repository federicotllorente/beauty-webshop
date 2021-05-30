import { useState, useEffect } from 'react'
import useFetchFilters from '../hooks/useFetchFilters'

import { UnexpectedError } from './ErrorMessages'
import { Loader } from './Loader'

const filtersAPI = 'http://localhost:3000/api/filters'

const FiltersModal = ({ appliedFilters, handleFilterCheckbox, isTablet }) => {
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
						<div>
							<h3>Filters</h3>
							{isTablet && (
								<button onClick={() => setModalOpen(false)}>Close</button>
							)}
						</div>
						{filters?.product_categories?.map(category => (
							<label key={category.id}>
								<input
									type="checkbox"
									name={category.name}
									id={category.query_param_name}
									onClick={handleFilterCheckbox}
								/>
								{category.name}
							</label>
						))}
						{appliedFilters?.map((filter, index) => (
							<p key={index}>{filter.name}</p>)
						)}
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