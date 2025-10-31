import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resList from "../utils/mockData";


const Body = () => {
  //local state variable - super powerful variable   
  const [listOfRestaurants, setListOfRestaurants] = useState(
              resList.card.card.gridElements.infoWithStyle.restaurants
  );
 
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        onClick ={() => {
          //Filter Logic Here  
          const filteredList = resList.card.card.gridElements.infoWithStyle.restaurants.filter(
            (res) => res.info.avgRating > 4.3
          );
          setListOfRestaurants(filteredList);
        }}
        >
          Top Rated Restaurants</button>
        </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;