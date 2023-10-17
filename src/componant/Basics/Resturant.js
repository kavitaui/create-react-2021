import React from 'react';
import Menu from "./MenuApi";
import {useState} from "react";
import MenuCard from "./MenuCard"
import Navbar from "./Navbar";
import "./Style.css"
const uniqueList = [...new Set(Menu.map((curElem)=>{
    return curElem.category;
        })
        ),"All"
    ];
        console.log(uniqueList)
const Resturant = () => {
    const [apiData,setApiData]=useState(Menu);
    const [menuList,setMenuList]= useState(uniqueList);
    const  filterItem =(category)=>{
        if (category === "All"){
            setApiData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category;
        })
        setApiData(updatedList);

    }
    // here new set is use to prevnt the repition of code (like - breakfast ,evening,dinner, lunch ,)these are only one Time.
//     const uniqueList = [...new Set(Menu.map((curElem)=>{
// return curElem.category;
//     }))];
//     console.log(uniqueList)
    
return(
    <>
<Navbar filterItem={filterItem} menuList= {menuList}/>
    <MenuCard apiData={apiData}/>
    </>
)
      
       
    
}

export default Resturant
