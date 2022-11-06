import "./Stopwatch.css";
import React, { useState } from "react";
import { useEffect } from "react";

export function Stopwatch() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [runing,setRuning]=useState(false)
  const [btnchang,setBtnChange]=useState(true)

  let clear;
  const StartClock = () => {
 clear= setInterval(() => {
      // (sec === 0) ? setSec(60) : setSec((sec) => sec - 1);

      if(sec === 60){
        setSec(0)
        setMin((min) => min + 1)
      }else{
        setSec((sec) => sec + 1)
      }


    }, 100);
  };

useEffect(()=>{
if(runing){
  StartClock()
}
  return ()=>{clearInterval(clear)}
})

  const resetClock = () => {
    setSec(0)
    setMin(0)
    setRuning(false)
    return ()=>{clearInterval(clear)}
  };

  return (
    <div className="main">
      <div className="time">
        {min}:{sec > 9 ? sec : `0${sec}`}
      </div>
      <div className="btn">
       {btnchang? <button className="btnstart" onClick={()=>{setRuning(!runing);setBtnChange(!btnchang)}}> Start</button>:<button className="btnstart" onClick={()=>{setRuning(!runing);setBtnChange(!btnchang)}}> Stop</button>}
        <button className="btnreset" onClick={resetClock}>
          Reset
        </button>
      </div>
    </div>
  );
}
