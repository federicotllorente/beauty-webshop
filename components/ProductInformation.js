import { useState } from 'react'

const ProductInformation = ({ name, brand, rating, colorsArray, description, price }) => {
	const [chosenColor, setChosenColor] = useState(null)

	const handleChosenColor = color => {
		if (chosenColor === color) {
			setChosenColor(null)
		} else {
			setChosenColor(color)
		}
	}

	const colorSpanClassNames = color => {
		if (chosenColor === color) return 'current_color'
		return null
	}

	const ratingStars = rating => {
		if (rating <= 1.9) return '⭐️'
		if (rating <= 2.9) return '⭐️⭐️'
		if (rating <= 3.9) return '⭐️⭐️⭐️'
		if (rating <= 4.9) return '⭐️⭐️⭐️⭐️'
		return '⭐️⭐️⭐️⭐️⭐️'
	}

	return (
		<div className="product_information">
			<div className="product_information__overall_details">
				<h3>{name}</h3>
				<p>By <strong>{brand}</strong></p>
				{rating && (
					<p className="rating">
						Rating: <strong>{rating}</strong>
						<span>{ratingStars(rating)}</span>
					</p>
				)}
				<p>{description}</p>{/* THIS IS ONLY A SHORT DESCRIPTION */}
			</div>
			<hr />
			<div className="product_information__colors">
				{colorsArray?.map((color, index) => {
					// if (index == 0) handleChosenColor(color.colour_name)
					return (
						<span
							key={index}
							className={colorSpanClassNames(color.colour_name)}
							style={{ backgroundColor: color.hex_value }}
							onClick={() => handleChosenColor(color.colour_name)}
						></span>
					)
				})}
				<p>{chosenColor || <i>Choose a color</i>}</p>
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