import SearchIcon from './icons/SearchIcon'

const SearchBar = ({ isMobile }) => {
	const handleSearchBar = () => { }

	const inputPlaceHolder = isMobile
		? 'Search something...'
		: 'Search a product, a brand...'

	return (
		<form className="search_bar">
			<input
				type="text"
				name="search"
				placeholder={inputPlaceHolder}
				onChange={handleSearchBar}
			/>
			<button>
				<SearchIcon />
			</button>
		</form>
	)
}

export default SearchBar