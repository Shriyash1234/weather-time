import React from 'react'
import FirstDiv from './FirstDiv'
import SideDiv from './SideDiv'
function sidebar(props){
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
            />
        </div>
        
    </div>
    ;
}

export default sidebar;