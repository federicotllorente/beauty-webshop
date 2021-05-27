import SearchIcon from './icons/SearchIcon'

const SearchBar = () => {
	const handleSearchBar = () => { }

	return (
		<form className="search_bar">
			<input
				type="text"
				name="search"
				placeholder="Search a product, a brand..."
				onChange={handleSearchBar}
			/>
			<button>
				<SearchIcon />
			</button>
		</form>
	)
}

export default SearchBar