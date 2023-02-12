const Galdata = ({ selData }) => {
    console.log("galData", selData) 

    let dTags;
    if (Object.keys(selData).length > 0) {
        let keys = [ "galWebImageUrl","galTitle", "galPhotographyMonth", "galPhotographyLocation", "galPhotographer", "galSearchKeyword"]
        let keyR = [ " 이미지", "제목" ,"촬영일시", "촬영장소", "촬영자","키워드"]
        
        dTags = keys.map((i,index) =>                    
                i.includes("Url") ? <img src={selData[i]} className='img' alt='' key={i} />
                : <li key={i}>
                    <span className="sp2">
                      {keyR[index]} :  {selData[i]}
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