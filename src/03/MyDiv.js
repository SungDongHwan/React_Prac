import MyDiv1 from "./MyDiv1";
import MyDiv2 from "./MyDiv2";
import './Mydiv.css';
const Mydiv =()=>{
    const rname = 'React';

    return(
    <div className="content">
       <div className="header">
        <h1>컴포넌트 예제 {rname}</h1>
       </div>
       <div className="main">
         <MyDiv1 user={rname}/> 
         <MyDiv2 user={rname}/>
      </div>
    </div>
      

    );
}
// 리액트에서 만드는 컴퍼넌트는 반드시 대문자로(html함수와 구분을 위해서)

export default Mydiv;