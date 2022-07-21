import Spinner from "./Spinner";

const RestaurantGallery = ({ props }) => {
    const {updated, restaurant} = props;
    const restaurantImages = restaurant.images;

  return (
    <div className="restaurant-gallery-outer">
      <h4 className="restaurant-gallery-header">Photo Gallery</h4>
      <div className="restaurant-gallery-background">
        {updated ? (
          <div className="rest-image-container">{
            restaurantImages.length ?
            restaurantImages.map((image, index) => {
                let imgClass = "rest-image-gallery"
                if (index === 0) imgClass = "rest-image-gallery first"
                return <img key={image} src={image} alt="restaurant gallery" className={imgClass} crossOrigin=""/>}) :
            <div className="rest-image-empty">This restaurant has not uploaded any images yet.</div>
          }</div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default RestaurantGallery;
