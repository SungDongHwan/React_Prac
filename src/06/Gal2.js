//한국관광공사_관광사진 정보_GW
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=서비스키&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%eb%b6%80%ec%82%b0+%ec%b6%95%ec%a0%9c&_type=json
// galContentId	string  콘텐츠 아이디
// galContentTypeId	string 콘텐츠 타입 아이디
// galTitle	string 제목
// galWebImageUrl	string 웹용 이미지 경로
// galCreatedtime	string 등록일
// galModifiedtime	string 수정일
// galPhotographyMonth	string 촬영월
// galPhotographyLocation	string 촬영장소
// galPhotographer	string 촬영자
// galSearchKeyword	string 검색 키워드
import "./Gal.css";
import Galdata from "./Galdata";
import Galheader from "./Galheader";
import GalList from "./GalList";
import {useState, useEffect, useRef} from "react"
import data from "../DB/data.json"
const Gal = () => {      
                  
      let rdata = data.response.body.items.item
      let c1
      c1 = rdata.map((i)=> i.galTitle)
      const setc1 = new Set (c1);
      const newc1 = [...setc1]
      c1= newc1

      let [Rkey,setRkey] =useState(''); 
      let [selC1, setSelC1] = useState();
      let [selData, setSelData] = useState({});
      const txtR = useRef();
      useEffect(() => {
        console.log("selC1" , selC1) ;
        setSelData(rdata.filter((i) => 
          i.galTitle === selC1)
          [0])},[selC1]) ;

      useEffect(() => {
        console.log("selData" , selData);
        }, 
        [selData]) ;
      useEffect(()=>{
        txtR.current.focus();
      })

const showC1 =()=>{
    setRkey(txtR.current.value)
}

    return (
        <>
         <div className="header">
              <Galheader/>
         </div>
         <div className="main">
              <div className="List">
                <div className="conleftdiv">
                  <form>
                    <input ref={txtR} type="text" name="txt1" onChange={showC1}/>
                    <button type="reset">취소</button>
                  </form>
                </div>
              <GalList c1 = {c1} selC1 = {selC1} setSelC1={setSelC1} Rkey= {Rkey}/>  
              </div>
              <div className="data">
              {selData && <Galdata selData={selData}/>}
              </div>
         </div>

        </>
    ); 
   }


export default Gal ;