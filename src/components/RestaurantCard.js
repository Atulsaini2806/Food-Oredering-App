import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {

  const {loggedInUser} = useContext(UserContext);

  const { name, cuisines, avgRating, costForTwo,sla, cloudinaryImageId } = resData.info;

  
  return (
    <div className="m-3 p-3 w-[200px] h-[320px] rounded-lg bg-gray-200 hover:bg-gray-300 flex flex-col">
      
      {/* IMAGE */}
      <img
        className="rounded-lg h-[140px] w-full object-cover"
        alt={name}
        src={`${CDN_URL}${cloudinaryImageId}`}
      />

      {/* CONTENT */}
      <div className="flex flex-col justify-between grow">
        <div>
          <h4 className="font-bold pt-2 text-sm line-clamp-2">{name}</h4>
          <h4 className="text-xs text-gray-600 line-clamp-2">
            {cuisines.join(", ")}
          </h4>
        </div>
        <div className="text-sm mt-2">
          <h4>{avgRating} ⭐</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.deliveryTime} mins</h4>
          <h4 className="text-xs">User : {loggedInUser}</h4>
        </div>
      </div>
    </div>
  );
  
};

//higher order function
// inout - RestaurantCard =>> RestaurantCardWithpure veg

export const withPureVeg = (RestaurantCard) => {
  return (props) => {
    return(
      <div className="relative">
      <label className="bg-green-500 rounded-lg p-1 absolute top-0 left-0 z-10  text-white ">Pure Veg</label>
      <RestaurantCard {...props} />
      </div>
    )
  };
};


export default RestaurantCard;