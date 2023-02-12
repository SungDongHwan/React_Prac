
const MyDiv2=()=> {
  const myName = "성동환";
  const Git = "https://github.com/SungDongHwan";
  console.log(myName)
  return (
    <div>
        <p>{myName}입니다.</p>
        <p>gitHub :<a href={Git}> {Git}</a></p>
    </div>
   
  );
}

export default MyDiv2;
