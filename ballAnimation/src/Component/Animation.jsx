import './Animation.css'
import React,{useState} from "react";
// import { useEffect } from 'react';

let index=0

export function Animation (){

    const [classnamearr,setClassNameArr]=useState(['TopLeft','TopRight','BottomRight','BottomLeft'])
    const [classname,setClassName]=useState('TopLeft')
    // const [index,setIndex]=useState(2)



    setInterval(() => {
        setClassName(classnamearr[index])
        if(index===3){
                    index=0
                }else{
                    index++
                }
    }, 2000);





    // useEffect(()=>{
    //     console.log(index)
    //     if(index===3){
    //         setIndex(0)
    //     }else{
    //         setIndex((prev) => prev + 1)
    //     }
    // },[classname])



    return(
        <div className="mainDiv">
        <div className={`Box ${classname}`}>
       
        </div>
    </div>
    )
        
    
}