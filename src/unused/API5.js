
import './App.css';
import Sidebar from './sidebar'
import Sidebar2 from '../sidebar'
import React, { useEffect, useState } from "react";
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
  const [value, setValue] = useState(data);
  const [place,setPlace] = useState('satara');
  const user = {
    name: "John Doe",
    city: "satara",
    outCity: outCity
  };

  const timeString = "https://api.ipgeolocation.io/timezone?apiKey=c7719cfa65c047c58a62e06b8e544019&tz&location="
  const weatherStringIntial  = "https://api.openweathermap.org/data/2.5/weather?q="
  const weatherStringFinal = "&appid=d4316daf02386ff456d22c31deb79439"
  

  function outCity(message) {
    this.city = message;
    setTimeout(()=>{setPlace(message);},5000)
    console.log(place)
  }
  // useEffect(() => {
  //   outputCity();
  // },[])

 
  const outputCity = (message) => {
    setPlace(message);
    user.outCity(message)

    // console.log(user.city)
  };
  
  const timeAPI = timeString + place
  const weatherAPI = weatherStringIntial + place + weatherStringFinal
  const fetchData = async () => {await Promise.all([fetch(timeAPI).then((response) => response.json()),fetch(weatherAPI).then((response) => response.json())])

      .then((value) => {
          // console.log(value[0].time_12)
          setValue(value)
          // console.log(city)
          })
          .catch((err) => {
              console.log(err);
          });
    } 

    
    useEffect(() => {
      fetchData();
    },[])

  //   if (city) {
  //     fetchData();
  //   }
  // };

    return (
      <div>
      <Sidebar2
          time = {value[0]}
          weather = {value[1]}
          outputCity = {outputCity}
      />
      </div>
      
    );
  }
export default API;
      
