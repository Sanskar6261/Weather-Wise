import React from "react";
import { useState } from "react";
import "../componets/style.css"

const Weatherbox=()=>{
    const [city, setcity] = useState("London");
    const [temp, settemp] = useState(0);
    const [maxtemp, setmaxtemp] = useState(0);
    const [mintemp, setmintemp] = useState(0);
    
    console.log(city);
     const searchweather=async()=>{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01aac9800d2bfd7afb3421ea00979083`);
      const resJson= await response.json(); 
      console.log(resJson);
      settemp(resJson.main?.temp);
      setmaxtemp(resJson.main?.temp_max);
      setmintemp(resJson.main?.temp_min); 
    }
      return (
        <div  className="box">
           <div className="inputdata">
            <input type="search" onChange={(e)=>{setcity(e.target.value)}} id="inputfield"/>
            <button id="Search" onClick={searchweather}>Search</button>
           </div>
           <div className="info">
              <h1 id="temp">{temp}'C</h1>
              <label>max-temp</label>
              <p id="max_temp">{maxtemp}'c</p>
              <label>Min-temp</label>
              <p  id="min_temp">{mintemp}'c</p>                
           </div>
        </div>
      )
}
export default Weatherbox;