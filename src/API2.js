// const fetch = require("node-fetch");
// const bodyParser = require("body-parser");

// const timeString = "https://api.ipgeolocation.io/timezone?apiKey=c7719cfa65c047c58a62e06b8e544019&tz&location="
// const weatherStringIntial  = "https://api.openweathermap.org/data/2.5/weather?q="
// const weatherStringFinal = "&appid=d4316daf02386ff456d22c31deb79439"

// // const city = req.body.city
// const timeAPI = timeString + ''
// const weatherAPI = weatherStringIntial + '' + weatherStringFinal
// Promise.all([fetch(timeAPI).then((response) => response.json()),fetch(weatherAPI).then((response) => response.json())])
//     .then((value) => {
//         time = value[0].time_24
//         weather = value[1].weather[0].description
//         temperature = value[1].main.temp
//         console.log(weather)  
//         })
//         .catch((err) => {
//             console.log(err);
//         });



import React, { useEffect, useState } from "react";

function API() { 
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=satara&appid=d4316daf02386ff456d22c31deb79439");
      const data = await response.json();
      return setUser(data.weather[0]);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
    <h1>{user.description}</h1>
    </div> 
  );
}
export default API;
      
