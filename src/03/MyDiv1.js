import MyDiv11 from "./Mydiv11";
import { useState } from "react";

const MyDiv1 = (probs) => {
    const user = probs.user
    let [cnt, setCnt]= useState(0);
    const addCnt = () =>{
        setCnt(++cnt);
        console.log(cnt);
    }
    return(
        <div className="mydiv1">
            <h2 className="div1">MyDiv1 {user}</h2>
            <MyDiv11 user = {user} divname={'사용자정의'+cnt}/ >
            <div className="divbt">
                <button onClick={addCnt}>
                    ❤
                </button>
                <span>{cnt}</span>
            </div>
        </div>
    );
}

export default MyDiv1;