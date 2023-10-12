import React from 'react';
import Menu from "./MenuApi";
import {useState} from "react";
import MenuCard from "./MenuCard"

import "./Style.css"
const Resturant = () => {
    const [apiData,setApiData]=useState(Menu);
return(
    <>
  
    <MenuCard apiData={apiData}/>
    </>
)
      
       
    
}

export default Resturant
