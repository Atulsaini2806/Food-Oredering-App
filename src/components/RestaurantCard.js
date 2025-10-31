import { CDN_URL } from "../utils/constant";


const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo,sla, cloudinaryImageId } = resData.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt={name}
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;