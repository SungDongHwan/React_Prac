import"./Myform.css"
import { useRef, useState } from "react";
const Myform =()=> {
    //폼 연결
   
    const txt1R = useRef();
    const txt2R = useRef();
    const sel1R = useRef();
    const [MsgTag, setMsgTag] = useState();

    const formcheck =()=>{
        if (txt1R.current.value === ""){
            alert("아이디를 입력해 주세요"  );
                txt1R.current.focus();
                return;
            }
        if (txt2R.current.value === ""){
            alert("비밀번호를 입력해 주세요"  );
                txt2R.current.focus();
                return;
            }        
        setMsgTag(
        <p>아이디 <span>{txt1R.current.value}</span>님의 선택과목은 
        <span>{sel1R.current.value}</span>입니다.</p>)
                 
        }
    //화면 표시 태그 
    
                 

    

    return(
     <>
        <form name="myform">
            <p>
                <label htmlFor="txt1" >아이디 :</label><br/>
                <input ref={txt1R}type="text" name ="txt1" id ="txt1" placeholder="아이디 입력"/>
                
            </p>

            <p>
                <label htmlFor="txt2" >비밀번호 :</label><br/>
                <input ref={txt2R}type="password" name ="txt2" id ="txt2" placeholder="비밀번호 입력"/>

            </p>
            <p>
                <label htmlFor="txt3" >선택과목 :</label><br/>
                <select ref={sel1R}name ="sel1" defaultValue="자바스크립트">
                <option value="자바">자바</option>
                <option value="HTML">HTML</option>
                <option value="자바스크립트">자바스크립트</option>
                <option value="리액트">리액트</option>
                </select>
            </p>
            <p>
                <input className="button" type="button" value="확인" onClick={formcheck}/>
                <input className="button" type="reset" value="취소" onClick={formcheck}/>
            </p>
            <div id="msg">{MsgTag}</div>
        </form>
  </>
    );
}
export default Myform;
