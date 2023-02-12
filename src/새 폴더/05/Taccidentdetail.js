const Taccidentdetail = ({selData}) => {
    console.log("Tdetail", selData)

    let keys = ["사고유형_대분류", "사고유형_중분류","사고건수","사수망자","중상자수","경상자수","부상신고자수"]
    let dTags = keys.map((k)=>
        <li key={k}>
            <span>{k}</span>
            <span>{selData[k]}</span>
        </li>
        );
        dTags.push(
            <li key='치명율'>
                <span>치명율</span>
                <span>{Math.round(parseInt(selData["사고건수"])/parseInt(selData["사망자수"])*100+"%",2)}</span>
            </li>)
    return(
        <div className="tDetail">
            <h2>상세내용</h2>
            <ul>
                {dTags}
            </ul>
        </div>
    )
    }
export default Taccidentdetail