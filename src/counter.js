import React from "react"
import { useState } from "react"
function Counters() {

    const [Count1,setCount]=useState(0)
    const[Count2,setCount2]=useState(0)
    const[sum,setsum]=useState(0)
    const[sub,setsub]=useState(0)
    const[color,setcolor]=useState('red')
  
    function Reset(){
      setCount(0)
    }
    function Incre(){
      setCount(Count1+1)
    }
    function Decre(){
      if(Count1>0)
      {
      setCount(Count1-1)
      }
    }
  
    function Reset1(){
      setCount2(0)
    }
    function Incre1(){
      setCount2(Count2+1)
    }
    function Decre1(){
      if(Count2>0)
      {
      setCount2(Count2-1)
      }
    }
  
    function Add(){
      setsum(Count1+Count2)
    }
    function Su(){
      setsub(Count1-Count2)
    }
    return (
      <><div>
  
        <div className="App">
          <h1 className="h">{Count1}</h1>
          <button className="b" onClick={Incre}>+</button>
          <button className="b" onClick={Reset}>RESET</button>
          <button className="b" onClick={Decre}>-</button>
        </div>
  
        <div className="App">
          <h1 className="h">{Count2}</h1>
          <button className="b" onClick={Incre1}>+</button>
          <button className="b" onClick={Reset1}>RESET</button>
          <button className="b" onClick={Decre1}>-</button>
        </div>
  
      </div><div className="App">
          <h1 className="h">{sum}</h1>
          <button className="t" onClick={Add}>sum</button>
          </div>
          <div className="App">
          <h1 className="h">{sub}</h1>
          <button className="t" onClick={Su}>sub</button>
          </div>
        
        <div>
            <input className="in" style={{backgroundColor: color }} value={' color will change when you click the below button '}></input>
            <button className="bo" style={{ backgroundColor: 'rgb(10, 204, 222)' }} onClick={()=>{setcolor('rgb(10, 204, 222)')}} >Turquoise</button>
            <button className="bo" style={ {backgroundColor:'blueviolet' }} onClick={()=>{setcolor('blueviolet')}}>blueviolet</button>
        </div>
    </>
    );
  }
  
  export default Counters;
  