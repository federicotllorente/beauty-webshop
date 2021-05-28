import Link from 'next/link'

const ProductCard = ({ id, name, brand, price, rating, imageURL, colors }) => {
	const maxColorsToShow = 3
	const remainingColorsToShow = colors.length - maxColorsToShow

	return (
		<Link href={`/${id}`}>
			<a>
				<div className="product_card">
					<img src={imageURL} alt={`Product #${id} Thumbnail`} />
					<h3>{name}</h3>
					<p>By <strong>{brand}</strong></p>
					<div className="product_card__colors">
						{colors?.slice(0, maxColorsToShow).map((color, index) => (
							<span
								key={index}
								style={{ backgroundColor: color.hex_value }}
							></span>
						))}
						{remainingColorsToShow > 0 && (
							<p>+ {remainingColorsToShow} more</p>
						)}
					</div>
					<p className="product_card__price">{price}</p>
					{rating && (
						<p>
							{rating}
							<span></span>
						</p>
					)}
				</div>
			</a>
		</Link>
	)
}

export default ProductCard