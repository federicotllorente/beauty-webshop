const ProductInformation = ({ name, brand, rating, colorsArray, description, price }) => {
	return (
		<div className="product_information">
			<div className="product_information__overall_details">
				<h3>{name}</h3>
				<p>By <strong>{brand}</strong></p>
				{rating && (
					<p>
						{rating}
						<span></span>
					</p>
				)}
				<p>{description}</p>{/* THIS IS ONLY A SHORT DESCRIPTION */}
			</div>
			<hr />
			<div className="product_information__colors">
				{colorsArray?.map((color, index) => (
					<span
						key={index}
						style={{ backgroundColor: color.hex_value }}
					></span>
				))}
			</div>
			<hr />
			<div className="product_information__price_section">
				<p>{price}</p>
				<button>ADD TO CART</button>
			</div>
		</div>
	)
}

export default ProductInformation