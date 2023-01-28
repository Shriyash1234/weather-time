import React from 'react'

function FirstDiv(props){
    return <div>
        <div className="FirstDiv">
            <div className='tempCity'>
                <div className='temp'>{(parseInt(props.temperature)-273).toString()}°</div>
                <div className='city-time'>
                    <div className='city'>{props.city}</div>
                    <div className='time'>{props.time}</div>
                </div>
                <div className='emoji-desc'>
                    <img class="weather-icon" src={require('./Images/rain-emoji2.png')}/>
                    <p className="weather-desc">{props.description}</p>
                </div>
            </div>
        </div> 
    </div>
    ;
}

export default FirstDiv;