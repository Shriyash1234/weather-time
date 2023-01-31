import React from 'react'
function SideDiv(props){
    const onTrigger = (event) => {
        event.preventDefault();
        props.parentCallback(event.target.city.value);
    }
    return <div>
        <div className="sideDiv">
            <div className='searchbar'>
                <form action="/"  method="post" onSubmit = {onTrigger}>
                    <input type="text" name="city" id="searchbox" placeholder="Another location" autoComplete='off'></input>
                    <button class="search-icon"></button>
                    {/* <img  src={require('./Images/search.png')}/> */}
                </form>
            </div>
            <div className='locations'>

            </div>
            <div className='weather-details'>
                <p class="weather-info">Weather Details</p>
                    <div className='ul-li'>
                        <ul>
                            <li>
                                Cloudy
                            </li>
                            <li>
                                Humidity
                            </li>
                            <li>
                                Wind
                            </li>
                            <li>
                                Visibilty
                            </li>
                        </ul>
                        <ul className='details'>
                            <li>
                                {props.clouds}%
                            </li>
                            <li>
                                {props.humidity}%
                            </li>
                            <li>
                                {props.wind}Km/h
                            </li>
                            <li>
                                {props.visibility}m
                            </li>
                        </ul>
                    </div>
            </div>      
        </div> 
    </div>
    ;
}

export default SideDiv;