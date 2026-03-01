import { useEffect, useState } from "react"
import {mockData} from '../utils/MockData'
import Shimmer from "./Shimmer"
import Menu from "./Menu"
import { useParams } from "react-router"

const RestaurantMenu = () =>{

    const [resDetails, setResDetails] = useState([])
    const {resId} = useParams()
    useEffect(()=>{
        getResMenu();
    },[])

    const getResMenu = async () => {
        const resData = await fetch ("/manifest.json")
        setResDetails(mockData.data.cards)
    }
    

    const {offers} = resDetails[3]?.card?.card?.gridElements?.infoWithStyle || {}
    const {menu} = resDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(3) || {};
    return !resDetails.length  ? <Shimmer /> : (
        <div className="menuConatainer">
            <h1 className={resDetails[0]?.card?.card?.headerStyling?.textColor}>{resDetails[0]?.card?.card?.text}</h1>
            {resDetails[3]?.card?.card?.id === "offerCollectionWidget_UX4" && ( 
                <div className="offerConatiner">
                    <h2>Deals for you</h2>
                    <div className="sliderContainer">
                        <div className="row">
                            {
                                offers.map((offer)=>(
                                    <div className="offerBox" key={offer.info.offerIds[0]}>
                                        <div style={{position:"relative"}}>
                                            <div className="secondaryContainer">
                                                <div className="offerCard">
                                                    <div className="cardTextContainer">
                                                        <div className="offerImg">
                                                            <img style={{'width': '100%','borderStyle': 'none'}} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/"+offer.info.offerLogo} alt="" />
                                                        </div>
                                                        <div className="offerText">
                                                            <div className="offerHeading">{offer.info.header}</div>
                                                            <div className="offerDesc">{offer.info.couponCode}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}

            <div className="resMenuContainer">
                {/* <Menu menuDetails={menu}/> */}
            </div>
        </div>
    
    )
}

export default RestaurantMenu