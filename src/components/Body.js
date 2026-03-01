import RestrauntCard from "./RestaurantCard"
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    console.log("Body rendered")
const [rescard, setrescard] = useState([]);
const [filteredResCard, setFilteredResCard] = useState([]);
const [searchText, setSearchText] = useState("")

useEffect(()=>{
    fetchData()
}, [])

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.0123303&lng=77.7437775&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    setrescard(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResCard(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

  return !rescard.length ? <Shimmer></Shimmer> : (
    <div className="body"> 
      <div className="filter">
        <div className="searchContainer">
            <input type="text" className="searchBox" value={searchText} onChange={(event)=>{setSearchText(event.target.value)}}/>
            <button className="searchBtn" onClick={()=>{console.log(searchText)
                const filteredRes = rescard.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                console.log("filteredRes")
                setFilteredResCard(filteredRes)
            }}>Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
            const filteredRes = rescard.filter(res => res.info.avgRating >= 4);
            setFilteredResCard(filteredRes)
        }}>Top Rated Restaurant</button>
      </div>
      <div className="res-conatiner">
        {
          filteredResCard.map(res =><Link to={"/resmenu/1"}><RestrauntCard resDetails={res.info} key={res.info.id}/></Link>)
        }
        <div className="dummyCard"></div>
        <div className="dummyCard"></div>
        <div className="dummyCard"></div>
      </div>
    </div>
  )
}

export default Body