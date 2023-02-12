import MyDiv21 from "./Mydiv21";

const MyDiv2 = (probs) => {
    const user = probs.user
    return(
        <div className="mydiv2">
            <h2 className="div2">MyDiv2 {user} </h2>
            <MyDiv21 user={user}/>
        </div>
    );
}

export default MyDiv2;