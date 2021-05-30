// import { useState } from 'react'

import SearchIcon from './icons/SearchIcon'

const SearchBar = ({ isMobile }) => {
	// const [searchQuery, setSearchQuery] = useState('')

	// const handleSearchBar = e => {
	// 	setSearchQuery(e.target.value)
	// }

	const inputPlaceHolder = isMobile
		? 'Search something...'
		: 'Search a product, a brand...'

	return (
		<form className="search_bar">
			<input
				type="text"
				name="search"
				placeholder={inputPlaceHolder}
			// onChange={handleSearchBar}
			/>
			<button>
				<SearchIcon />
			</button>
		</form>
	)
}

export default SearchBar