const FrcDt=({Dt,setDt})=>{

    let dtdiv1Tag = [...Dt];

    const show =(v)=>{
        console.log("show",v);
        setDt(v);
    }
    dtdiv1Tag = dtdiv1Tag.map((v)=>
        <div className="dtdiv1" key={v} onClick={()=>show(v)}>{v}</div>
    );
    console.log("frcDt",dtdiv1Tag)

    return(
        <div className="mainbox2">
            {dtdiv1Tag}
        </div>  
    )
    }
    export default FrcDt;
    