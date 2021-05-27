import { useState, useEffect } from 'react'
import useFetchCategories from '../hooks/useFetchCategories'
import useHandleFilters from '../hooks/useHandleFilters'

const categoriesAPI = 'http://localhost:3000/api/categories'

const FiltersModal = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const { appliedFilters, handleFilterCheckbox } = useHandleFilters()

	const {
		categories,
		loading,
		error,
		fetchCategories
	} = useFetchCategories()

	useEffect(() => {
		fetchCategories(categoriesAPI)
	}, [])

	error && (
		<div>{error}</div>
	)

	loading && (
		<h2>Loading...</h2>
	)

	return (
		<>
			{modalOpen && (
				<div className="filters_modal">
					<div>
						<h3>Filters</h3>
						<button onClick={() => setModalOpen(false)}>Close</button>
					</div>
					{categories?.map(category => (
						<label key={category.id}>
							<input
								type="checkbox"
								name={category.name}
								onClick={handleFilterCheckbox}
							/>
							{category.name}
						</label>
					))}
					{appliedFilters?.map(filter => <p key={filter}>{filter}</p>)}
				</div>
			)}
			<button className="filters_modal_button" onClick={() => setModalOpen(true)}>
				Filters
			</button>
		</>
	)
}

export default FiltersModal