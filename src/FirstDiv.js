import React,{ useState, useEffect } from 'react'
import background from "./Images/clear.jpg";
function FirstDiv(props){
    const changeBackground =()=>{
        const id = parseInt(props.id)
        // console.log(id)
        if(id>=200 && id<300){  //Thunderstorm
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1583459094467-e0db130c0dea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)';
        }
        else if(id>=300 && id<400){ // Drizzle
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1556485689-33e55ab56127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
        }
        else if(id>=500 && id<600){ //Rain
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1503429134808-fdf0cd4e1bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80)'
        }
        else if(id>=600 && id<700){ //Snow
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1521752305290-b691aa1938e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80)'
        }
        else if(id===701){ // Mist
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1590415000895-04ab80fcd2da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)'
        } 
        else if(id===711){ // Smoke
            document.body.style.backgroundImage = 'url(https://im.rediff.com/news/2023/jan/04smoggy3.jpg?w=670&h=900)'
        }  
        else if(id===741){ // Fog
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80)'
        } 
        else if(id===781){ // Tornado Hope it comes
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80)'
        }
        else if(id===751){ // Sand
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1615880308187-6040d89a0cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)'
        }
        else if(id ===800){ // Clear
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1606050716461-78add0ad1785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)'
        } 
        else if(id===801){ //Few clouds
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1615162166453-847da1fc9846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1901&q=80)'
        }
        else if(id===802){//Scattered
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1642447733831-2cdd9f5efae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80)'
        }
        else if(id == 803){//broken
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1429734956993-8a9b0555e122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1808&q=80)'
        }
        else if(id == 804){//overcast
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1471673191832-eec29aa4b233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1781&q=80)'
        }
        else{
            console.log('red')
        }
    }
    
    useEffect(() => {
        changeBackground();
      },[props.id])
    return <div>
        <div className="FirstDiv">
            <div className='tempCity'>
                <div className='temp'>{(parseInt(props.temperature)-273).toString()}°</div>
                <div className='city-time'>
                    <div className='city'>{props.city}</div>
                    <div className='time'>{props.time}</div>
                </div>
                <div className='emoji-desc'>
                    <img class="weather-icon" src={'http://openweathermap.org/img/wn/'+props.icon+'@2x.png'}/>
                    <p className="weather-desc">{props.description}</p>
                </div>
            </div>
        </div> 
    </div>
    ;
}

export default FirstDiv;