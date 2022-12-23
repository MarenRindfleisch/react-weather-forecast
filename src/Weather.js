import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: "Monday, 5pm",
      description: response.data.weather[0].main,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <form className="form-control">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city"
                autoFocus="on
            "
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="w-100" />
            </div>
          </div>
        </form>

        <div className="row mt-3">
          <div className="col-6">
            <h1>(City)</h1>
          </div>
          <div className="col-6">
            <img src={weather.iconUrl} alt={weather.description} />
          </div>
          <div className="col-6">
            {" "}
            <span>{weather.date}</span>
          </div>
          <div className="col-6">
            <span>{weather.temperature} </span>{" "}
            <span className="unit">°C|°F</span>
          </div>
          <div className="col-12">
            <ul>
              <li className="text-capitalized">
                Description: {weather.description}
              </li>
              <li>Humidity: {weather.humidity}%</li>
              <li> Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "19a7287a43046ce253c65a1908dfe8b1";
    let city = "Berlin";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
