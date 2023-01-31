import React,{ useEffect, useState }  from 'react'
import FirstDiv from '../FirstDiv'
import SideDiv from '../SideDiv'
function Sidebar(props){
  const [city,setCity] = useState('satara');

  const state = {name:""}
  const handleCallback = (childData) =>{
    // console.log(childData);
    setCity(childData);
    console.log(city);
    this.setState({name: childData})
    console.log(state);
    // console.log(city)
    // alert(city)
  }
    return <div>
        <div className='container1'>
            <FirstDiv
                city = {props.weather.name}
                time = {props.time.date_time_txt}
                weatherMain = {props.weather.weather[0].main}
                description = {props.weather.weather[0].description}
                visibility = {props.weather.visibility}
                wind = {props.weather.wind.speed}
                humidity = {props.weather.main.humidity}
                temperature =  {props.weather.main.temp}
                clouds = {props.weather.clouds.all}
            />
            <SideDiv
                city = {props.time.geo.city}
                time = {props.time.date_time_txt}
                weatherMain = {props.weather.weather[0].main}
                description = {props.weather.weather[0].description}
                visibility = {props.weather.visibility}
                wind = {props.weather.wind.speed}
                humidity = {props.weather.main.humidity}
                temperature =  {props.weather.main.temp}
                clouds = {props.weather.clouds.all}
                parentCallback = {handleCallback}
            />
        </div>
        
    </div>
    ;
}

export default Sidebar;