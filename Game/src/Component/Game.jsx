import "./Game.css";
import React, { useState } from "react";
import { useEffect } from "react";

export function Game() {
  const [count, setCount] = useState(0);
  const [top, setTop] = useState(0);
  const [left,setLeft]=useState(0)
  let interval


  const moving=()=>{
     interval= setInterval(() => {
      setTop(Math.floor((Math.random())*100))
      setLeft(Math.floor((Math.random())*100))
    }, 1000);
  }

  useEffect(()=>{
    moving()
    return ()=>{clearInterval(interval)}
  })

  return (
    <div className="main">
      <div className="box">
      <button className="btn" onClick={()=>{setCount(count +1)}} style={{top:`${top}%`,left:`${left}%`}}>{count}</button>
      </div>
    </div>
  );
}
