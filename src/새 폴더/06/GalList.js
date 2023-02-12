const GalList = ({c1, selC1, setSelC1}) =>{

    

    const handleSelect = (item) => {
        setSelC1(item);
    }
    //대분류 화면 표시 태그
     const c1Tag = c1.map((item) =>
         <div className={item === selC1 ? "tcardSel" : "tcard"}
             key={item}
             onClick={() => handleSelect(item)}>
             {item}
         </div>
     );
   

    

 return (
    <div className="List1">
        <h2> List </h2>
        {c1Tag}
    </div>
 )   
}
export default GalList