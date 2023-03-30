import React, { useState } from "react";
import './App.css'
import Counters from "./counter";
import useF from "./useF";
var C=Counters
function App() {

  const [joker,setjoker]=useState('')//fech()
  //using axios start
  const{data,load,error,Ref}=useF("https://v2.jokeapi.dev/joke/Any")
  if(load) return <h1> ........ Loading .......</h1>
  if(error) console.log(error)
  //using  axios end
  // using fech()
  const Getjoke=()=>{
  fetch('https://official-joke-api.appspot.com/random_joke').then((res)=>res.json()).then((data)=>{setjoker(data.setup+'='+data.punchline)} )
  //end

  }
  return (
    <div>
      <h1 className="joketype">joke type = {data?.category}</h1>
      <h1 className="joke" >{data?.setup} : {data?.delivery}</h1>
      <button className="buna" onClick={Ref}>refresh joke</button>
      {/* feach*/}
      <h1 className="joke" >{joker}</h1>
      <button className="buna" onClick={Getjoke}>refresh joke by feach method</button>
      <C/>
   </div>
  );
}

export default App;
