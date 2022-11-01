import "./Animation.css";
import React, { useState } from "react";
import { useEffect } from "react";

export function Animation() {
  const classnamearr = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"];
  const [index, setIndex] = useState(0);

useEffect (()=>{
  const interval =setInterval(() => {
      (index===3)?  setIndex(0):setIndex(index => index + 1);
        console.log(index);
    }, 2000);
    return()=> clearInterval(interval)
},[index])
  
  return (
    <div className="mainDiv">
      <div className={`Box ${classnamearr[index]}`}></div>
    </div>
  );
}


//  useEffect(()=>{
  //       if(index===3){
  //     setIndex(0)
  //       }
  //       clearInterval(timerRef)
  //       timerfun()

  //       return(()=>{
  //         clearInterval(timerRef)
  //       })
  //   },[index])


  // const timerfun =()=>{
  //  const interval =  setInterval(() => {
  //     setIndex(index + 1);
  //       }, 2000);
  //       setTimerRef(interval)
  // }