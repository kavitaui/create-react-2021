import React,{useEffect, useState} from 'react'
import "./style.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import WeatherCard from './WeatherCard';
const Temp = () => {
    const [searchValue,setSearchValue] = useState("lucknow");
    const [tempInfo,setTempInfo]= useState({})
    const getWeatherInfo = async()=>{
      try{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue} &units=metric&appid=3e5fb7c2dec94f4ef703e7e54534b6d2`;
      const res = await fetch(url);
      const data=  await res.json(); 
    //   data destructuring
      const {temp,humidity,pressure}=data.main;
      const {main:weathermood } = data.weather[0];
      const{name}= data;
      const {speed} = data.wind;
      const { country,sunset}= data.sys;
    //   to create my own object when i pass the data.
    const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
       };
        setTempInfo(myNewWeatherInfo)
      console.log(temp);
      console.log (data); 
    }catch(error){
        console.log(error);
      }
    };
    useEffect(()=>{
getWeatherInfo()
    },[])    
  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type ="search"
            placeholder="search..."
            autoFocus id="search" className='searchTearm'
            value={searchValue}
            onChange={(e)=>{setSearchValue(e.target.value)}}/>
            <button className='searchbutton' type ="button" onClick={getWeatherInfo}>search</button>
        </div>
        
      
    </div>
 <WeatherCard tempInfo ={tempInfo}/>
   
  
    </>
  )
}

export default Temp
