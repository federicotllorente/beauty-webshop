const ProductGallery = ({ imagesArray, productID, thumbnailURL }) => {
	const handleImageOnError = e => {
		e.target.onError = null
		e.target.src = 'not_found.gif'
	}
	return (
		<div className="product_gallery">
			<div className="product_gallery__current_photo">
				<img
					src={thumbnailURL}
					alt={`Product #${productID} Thumbnail`}
					onError={handleImageOnError}
				/>
			</div>
			<div className="product_gallery__all_photos">
				{imagesArray?.map((image, index) => (
					<img
						key={index}
						src={image.imageURL}
						alt={`Product #${productID}, photo #${index}`}
						onError={handleImageOnError}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductGallery