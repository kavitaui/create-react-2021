import React from 'react'
import { useState } from "react";
import "./Style.css";
const MyUseState = () => {
  var intialValue = 10;
  const [myData, setMyData] = useState(intialValue)
  return (
    <>
      <div className="center_div">
        <p>My Data:{myData}</p>
        <div className='button2' onClick={() => { setMyData(myData + 1) }} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          increment </div>
        <div className='button2' onClick ={()=> (myData>0?setMyData(myData-1):setMyData(0))}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        decrement</div>
      </div>
    </>
  )
}

export default MyUseState