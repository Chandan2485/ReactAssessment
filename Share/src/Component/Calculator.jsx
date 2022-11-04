import './Calculator.css'
import React, { useState } from "react";

export function Calculator() {
const [showBox,setShowBox]=useState(false)
const [showBottomBox,setShowBottomBox]=useState(false)
const [showSearchBox,setShowSearchBox]=useState(false)



return(
  <div>
      <div><button onClick={()=>{setShowBox(!showBox);setShowBottomBox(false);setShowSearchBox(false)}}>Share</button></div>
       <div className={showBox? 'box' : 'box hide'}>
         <div><input type="text" name="" id="" placeholder='Add emails or people'/> <button onClick={()=>{setShowSearchBox(!showSearchBox);setShowBottomBox(false)}}>{showSearchBox ? 'Cancel':'invite' }</button>
        
        
         <div className={showSearchBox? '':'hide'} >
         <textarea name="" id="" cols="30" rows="5"></textarea>
         <button>Invite</button>
         </div>
         
         </div >

         <div className={showSearchBox? 'hide':''}>
          <span>hgsfghsjsdj</span>
           <button onClick={()=>{setShowBottomBox(!showBottomBox)}}>{showBottomBox ? 'Hide':'Show'}</button>
           </div>
       </div>
    <div className={showBottomBox? 'box' : 'box hide'}>
      <h2>fscxsgmcgsjjsd</h2>
      <h2>gjksdkm,gsvsd</h2>
      <h2>syfgsdh,jsd,gsdkdgs</h2>
      <h2>fymsdj,dsjgdsd</h2>
    </div>
     
  </div>
);
}
// className={showBox? 'box' : 'box hide'}