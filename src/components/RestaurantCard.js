const RestrauntCard = ({resDetails}) => {
  const {name,cuisines,avgRatingString,costForTwo,cloudinaryImageId} = resDetails
  return (
    <div className="res-card">
      <div className="rescarddiv">

      <div className="res-logoConatiner">
        {/* <div className="logoBox"> */}
          {/* <div className="imagediv"> */}
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660//"+cloudinaryImageId} alt="" className="res-logo" />
        {/* </div> */}
        {/* </div> */}
      </div>
      <div className="res-detailsContainer">
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      </div>
      </div>
    </div>
  )
}

export default RestrauntCard