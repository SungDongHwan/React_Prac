const FrcCn=({cn})=>{
    console.log("cn",cn);
    let infoarray = cn.split(',');
    infoarray = infoarray.map((v) =>
            <li >
                <span>{v.split(':')[0]+':'}</span>
                    {v.includes("높음")? 
                    <span className='lired'>{v.split(':')[1]}</span>:
                    <span>{v.split(':')[1]}</span>}
            </li>
        );

    return(
        <div className="mainbox1">
            <div className='detail'>
                        <ul>
                        {infoarray};
                        </ul>
                           
                        
                        </div>
        </div>  
    )
    }
    export default FrcCn;
    