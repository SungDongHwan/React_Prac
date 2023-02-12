const Galdata = ({ selData }) => {
    console.log("galData", selData) 


    let dTags;
    if (Object.keys(selData).length > 0) {
        let keys = [ "galWebImageUrl","galTitle", "galPhotographyMonth", "galPhotographyLocation", "galPhotographer", "galSearchKeyword"]


        dTags = keys.map((i) =>

            i.includes("Url") ? <img src={selData[i]} className='img' alt='' key={i} />
                : <li key={i}>
                    <span className="sp2">
                        {selData[i]}
                    </span>
                </li>
        );
    }



    return (
        <>
            <ul>
                {selData  && dTags}
            </ul>
        </>
    )
}
export default Galdata