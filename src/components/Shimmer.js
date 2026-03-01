const Shimmer = () => {
    return (
        <div className="shimmerConatiner">
            <div className="shimmerHeader"></div>
            {
                Array(9).fill("").map((_, i)=>{
                    return <div className="shimmerCard" key={i}></div>
                })
            }
        </div>
    )
}

export default Shimmer