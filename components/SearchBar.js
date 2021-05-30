import SearchIcon from './icons/SearchIcon'

const SearchBar = ({ setSearchQuery, isMobile }) => {
	const handleSearchForm = e => {
		e.preventDefault()
		setSearchQuery(e.target[0].value)
	}

	const inputPlaceHolder = isMobile
		? 'Search something...'
		: 'Search a product, a brand...'

	return (
		<form className="search_bar" onSubmit={handleSearchForm}>
			<input
				type="text"
				name="search"
				placeholder={inputPlaceHolder}
			/>
			<button onSubmit={handleSearchForm}>
				<SearchIcon />
			</button>
		</form>
	)
}

export default SearchBar