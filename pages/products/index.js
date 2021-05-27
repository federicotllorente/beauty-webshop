// import Link from 'next/link'

import FiltersModal from '../../components/FiltersModal'

const ProductList = () => {
	return (
		<main className="product_list">
			<h2>All products</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac laoreet urna, a suscipit lacus. Ut quis nisl ex. Nunc condimentum arcu sem, at vehicula velit fringilla a.</p>
			<FiltersModal />
		</main>
	)
}

export default ProductList