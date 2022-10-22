import './Calculator.css'
import React, { useState } from "react";

export function Calculator() {
  const [value,setValue]=useState('')

 
function calculate(e){
        setValue(`${value}${e.target.innerText}`)
}

function equal(){
    setValue(eval(value))
}

function clear(){
    setValue('')
}


  return (
    <div className="cal">
      <div className='val'>
       {value}
      </div>

      <div>
        <div onClick={clear}>C</div>
        <div></div>
        <div onClick={(e)=>calculate(e)}>%</div>
        <div onClick={(e)=>calculate(e)}>+</div>
      </div>

      <div>
        <div onClick={(e)=>calculate(e)}>7</div>
        <div onClick={(e)=>calculate(e)}>8</div>
        <div onClick={(e)=>calculate(e)}>9</div>
        <div onClick={(e)=>calculate(e)}>-</div>
      </div>
      <div>
        <div onClick={(e)=>calculate(e)}>4</div>
        <div onClick={(e)=>calculate(e)}>5</div>
        <div onClick={(e)=>calculate(e)}>6</div>
        <div onClick={(e)=>calculate(e)}>*</div>
      </div>
      <div>
        <div onClick={(e)=>calculate(e)}>1</div>
        <div onClick={(e)=>calculate(e)}>2</div>
        <div onClick={(e)=>calculate(e)}>3</div>
        <div onClick={(e)=>calculate(e)}>/</div>
      </div>

      <div>
        <div onClick={(e)=>calculate(e)}>0</div>
        <div onClick={(e)=>calculate(e)}>.</div>
        <div onClick={equal}>=</div>
      </div>
    </div>
  );
}
