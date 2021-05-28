const FiltersModal = ({ modalOpen, setModalOpen, appliedFilters, handleFilterCheckbox, categories }) => {
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