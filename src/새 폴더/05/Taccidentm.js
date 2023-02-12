import { useState, useEffect } from "react"
import Taccidentc1 from "./Taccidentc1"
import Taccidentc2 from "./Taccidentc2"
import Taccidentdetail from "./Taccidentdetail"
import Theader from "./Theader"
import "./Taccident.css" 
const Taccidentm =({c1,c2,data})=>{
    console.log("data" ,data);

let [selC1, setSelC1]= useState() ;
let [selC2A, setSelC2A]= useState([]) ;
let [selC2, setSelC2] = useState();
let [selData, setSelData] = useState({});

useEffect(() =>{
    console.log('한번만 실행')
},[])

//해당하는 state 변수가 바뀔떄마다 
useEffect(() => {
    console.log("selC1" , selC1) ;
    setSelC2A(c2.filter((i) => i[0] === selC1));
}, [selC1]) ;

useEffect(() => {
    console.log("selC2A", selC2A) ;
}, [selC2A]);

useEffect(() => {
    console.log("selC2" , selC2) ; 
    if (selC1 && selC2) {
        setSelData(data.filter((i)=> 
                i.사고유형_대분류 === selC1 && 
                i.사고유형_중분류 === selC2
                )
                [0])}
}, [selC2]);

useEffect(() => {
    console.log("selData" , selData);
}, [selData]) ;
// 랜더링 일어날떄마다 
useEffect(() => {
    console.log('랜더링');
})


return(
    <>
        <div className="content">
            <div className="header">
                <Theader/>
            </div>
            <div className="main">
                <Taccidentc1 c1 = {c1} selC1 ={selC1} setSelC1={setSelC1}/>
                {selC2A && <Taccidentc2 selC2A= {selC2A} selC2={selC2}  setSelC2={setSelC2} />}
                {selData && <Taccidentdetail selData={selData}/>}
            </div>
        </div>
    </>
);
}
export default Taccidentm;