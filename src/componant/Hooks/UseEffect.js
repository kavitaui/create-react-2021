import React from "react"
import {useState,useEffect} from 'react'

const UseEffect = () => {
    const [myData,setMyData] = useState(0)
     useEffect(()=>{
       document.title =`Chats(${myData})`
    })
    // here in useEffect works when the page is render
    //  but if i add dependency then it works only first time whwn page is render
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
        {/* <div className='button2' onClick ={()=> (myData>0?setMyData(myData-1):setMyData(0))}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        decrement</div> */}
      </div>
    </>

  )
}

export default UseEffect
