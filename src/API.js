
import './App.css';
import Sidebar2 from './sidebar'
import React, { useState, useEffect } from "react";
const time = {
    "geo": {
      "country": "United States",
      "state": "Idaho",
      "city": "",
      "latitude": 46.7323875,
      "longitude": -117.0001651
    },
    "timezone": "America/Los_Angeles",
    "timezone_offset": -8,
    "timezone_offset_with_dst": -8,
    "date": "2023-01-08",
    "date_time": "2023-01-08 06:24:05",
    "date_time_txt": "Sunday, January 08, 2023 06:24:05",
    "date_time_wti": "Sun, 08 Jan 2023 06:24:05 -0800",
    "date_time_ymd": "2023-01-08T06:24:05-0800",
    "date_time_unix": 1673187845.408,
    "time_24": "06:24:05",
    "time_12": "06:24:05 AM",
    "week": 1,
    "month": 1,
    "year": 2023,
    "year_abbr": "23",
    "is_dst": false,
    "dst_savings": 0
  }
const weather = 
{
    "coord": {
      "lon": 151.2073,
      "lat": -33.8679
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 289.73,
      "feels_like": 289.61,
      "temp_min": 287.9,
      "temp_max": 291.14,
      "pressure": 1014,
      "humidity": 83
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.45,
      "deg": 283,
      "gust": 0.45
    },
    "clouds": {
      "all": 0
    },
    "dt": 1673185200,
    "sys": {
      "type": 2,
      "id": 2002865,
      "country": "AU",
      "sunrise": 1673204018,
      "sunset": 1673255390
    },
    "timezone": 39600,
    "id": 2147714,
    "name": "Sydney",
    "cod": 200
  }
const data = [time,weather]    
function API() { 

  // set the state variables
  const [value, setValue] = useState(data);   //for storing the dat
  const [place,setPlace] = useState('satara');  //for storing the place will chnage depending on the input from user

  //APIs intials for calculating weather and time
  const timeString = "https://api.ipgeolocation.io/timezone?apiKey=c7719cfa65c047c58a62e06b8e544019&tz&location="
  const weatherStringIntial  = "https://api.openweathermap.org/data/2.5/weather?q="
  const weatherStringFinal = "&appid=d4316daf02386ff456d22c31deb79439"

  //will be pass as prop to the sidebar by which we will set the place to the message we got from user
  const outputCity= (message)=>{
    setPlace(message)
  };

  //API for the specific place
  const timeAPI = timeString + place
  const weatherAPI = weatherStringIntial + place + weatherStringFinal

  //For fetching the data from the APIs. By using promise.all we can ensure that it will calculate the value only after all promise have been ensured.
  const fetchData = async () => {await Promise.all([fetch(timeAPI).then((response) => response.json()),fetch(weatherAPI).then((response) => response.json())])
  .then((value) => {
      setValue(value) // setting the value
      })
      .catch((err) => {
          console.log(err);
      });
  } 

  //It will check if the place variable have been changed at every render
  useEffect(() => {
    fetchData();
  },[place])

  return (
    <div>
    <Sidebar2
        time = {value[0]}  //passing time data
        weather = {value[1]} //passing weather data
        outputCity = {outputCity} //passing afunction as prop
    />
    </div>
  );
  }
export default API;

//Problem-The place was not getting updated.Sometimes getting upated but to its previous value
//Mistakes- Was using useeffect two times and also the second usEffect was not checking any variable.
//Ans- Added the second parameter to useEffect(place). Kept only one useEffect. 
