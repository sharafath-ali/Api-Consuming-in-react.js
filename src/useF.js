import React, { useEffect, useState } from 'react'
import axios from 'axios'
function useF(url) {
  const [data,setdata]=useState(null)
  const [loading,setloading]=useState(false)
  const [error,seterror]=useState(null)
  useEffect(()=>{
  setloading(true)
  axios.get(url).then((responce)=>{
    setdata(responce.data);
  }).catch((err)=>{
    seterror(err)
  }).finally(()=>
  {
    setloading(false)
  })

  },[url]);

  function Refetch(){
    setloading(true)
    axios.get(url).then((responce)=>{
      setdata(responce.data);
    }).catch((err)=>{
      seterror(err)
    }).finally(()=>
    {
      setloading(false)
    });
  }

  return{data,loading,error,Refetch}
}

export default useF
