import React,{useEffect, useState} from 'react'

const WeatherCard = ( {tempInfo}) => {
    const [weatherState,setWeatherState]= useState("");
  const { temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset
   }= tempInfo;
   useEffect(()=>{
 if(weathermood){
    switch(weathermood){
        case "cloud": 
        setWeatherState("bi-cloud-sun");
            break;
            case "Haze": 
            setWeatherState("bi-cloud-fog");
            break;
            case "Clear":
                 setWeatherState("bi-cloud-sunny");
            break;
            default:
                setWeatherState("bi-cloud-sunny");
                break;
    }
 }
   },[weathermood])
//    converting the seconds into time
let sec = sunset;
let date =new Date(sec*1000);
let timeStr =`${date.getHours()}:${date.getMinutes()}`
  return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
  
        <i class={"bi " + weatherState}></i>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>{weathermood}</div>
                <div className='place'><span>{name},{country}</span></div>
             
            </div>
       
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>
        {/* {our four column section} */}
        <div className='extra-temp'>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p> <i class="bi bi-sunset"></i></p>
                    <p className='extra-info-leftside'>
                        {timeStr} PM <br/>
                        Sunset
                    </p>
                </div>
              
                <div className='two-sided-section'>
                    <p><i class="bi bi-moisture"></i></p>
                    <p className='extra-info-leftside'>
                       {humidity} <br/>
                        humidity
                    </p>
                </div>
            </div>
            <div  className='weather-extra-info'>
            <div className='two-sided-section'>
                    <p> <i class="bi bi-cloud-lightning-rain"></i></p>
                    <p className='extra-info-leftside'>
                        {pressure}<br/>
                        Pressure
                    </p>
                </div> 
                <div className='two-sided-section'>
                    <p><i class="bi bi-wind"></i></p>
                    <p className='extra-info-leftside'>
                        {speed} <br/>
                        Wind Speed
                    </p>
                </div> 
            </div>
        </div>
    </article> 
    </>
  )
}

export default WeatherCard
