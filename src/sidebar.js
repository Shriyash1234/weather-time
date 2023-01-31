import React,{ useEffect, useState }  from 'react'
import FirstDiv from './FirstDiv'
import SideDiv from './SideDiv'
class Sidebar extends React.Component{
  state = {
    name:"",
    }
  handleCallback = (childData) =>{
    this.setState({name: childData},function(){console.log()})
    this.props.outputCity(childData)
  }
  render(){
    return <div>
        <div className='container1'>
            <FirstDiv
                city = {this.props.weather.name}
                time = {this.props.time.date_time_txt}
                weatherMain = {this.props.weather.weather[0].main}
                description = {this.props.weather.weather[0].description}
                visibility = {this.props.weather.visibility}
                wind = {this.props.weather.wind.speed}
                humidity = {this.props.weather.main.humidity}
                temperature =  {this.props.weather.main.temp}
                clouds = {this.props.weather.clouds.all}
            />
            <SideDiv
                city = {this.props.time.geo.city}
                time = {this.props.time.date_time_txt}
                weatherMain = {this.props.weather.weather[0].main}
                description = {this.props.weather.weather[0].description}
                visibility = {this.props.weather.visibility}
                wind = {this.props.weather.wind.speed}
                humidity = {this.props.weather.main.humidity}
                temperature =  {this.props.weather.main.temp}
                clouds = {this.props.weather.clouds.all}
                parentCallback = {this.handleCallback}
            />
        </div>
        
    </div>
    ;
}
}

export default Sidebar;