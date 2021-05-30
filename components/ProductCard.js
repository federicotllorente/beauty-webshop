import Link from 'next/link'

const ProductCard = ({ product, elementRef }) => {
	const maxColorsToShow = 3
	const remainingColorsToShow = product.product_colors.length - maxColorsToShow

	const handleImageOnError = e => {
		e.target.onError = null
		e.target.src = 'not_found.gif'
	}

	const ratingStars = rating => {
		if (rating <= 1.9) return '⭐️'
		if (rating <= 2.9) return '⭐️⭐️'
		if (rating <= 3.9) return '⭐️⭐️⭐️'
		if (rating <= 4.9) return '⭐️⭐️⭐️⭐️'
		return '⭐️⭐️⭐️⭐️⭐️'
	}

	const generateRandomRating = () => {
		const randomRating = Math.random() * 5
		const decimalRound = Math.round(randomRating * 10) / 10
		return decimalRound
	}

	const finalRating = product.rating || generateRandomRating()

	return (
		<Link href={`/products/${product.id}`}>
			<a>
				<div className="product_card" ref={elementRef}>
					<img
						src={product.api_featured_image}
						alt={`Product #${product.id} Thumbnail`}
						onError={handleImageOnError}
					/>
					<div className="product_card__content">
						<h3>{product.name}</h3>
						<p>By <strong>{product.brand}</strong></p>
						<div className="product_card__content__colors">
							{product?.product_colors?.slice(0, maxColorsToShow).map((color, index) => (
								<span
									key={index}
									style={{ backgroundColor: color.hex_value }}
								></span>
							))}
							{remainingColorsToShow > 0 && (
								<p>+ {remainingColorsToShow} more</p>
							)}
						</div>
						<p className="product_card__content__price">{product.price_sign} {product.price} {product.currency}</p>
						<p className="rating">
							{finalRating}
							<span>{ratingStars(finalRating)}</span>
						</p>
					</div>
				</div>
			</a>
		</Link>
	)
}

export default ProductCard