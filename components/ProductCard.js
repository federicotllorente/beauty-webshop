import Link from 'next/link'

const ProductCard = ({ product, elementRef }) => {
	const maxColorsToShow = 3
	const remainingColorsToShow = product.product_colors.length - maxColorsToShow

	const handleImageOnError = e => {
		e.target.onError = null
		e.target.src = 'not_found.gif'
	}

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
						{product.rating && (
							<p>
								{product.rating}
								<span></span>
							</p>
						)}
					</div>
				</div>
			</a>
		</Link>
	)
}

export default ProductCard