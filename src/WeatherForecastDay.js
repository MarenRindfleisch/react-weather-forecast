import React from "react";

export default function WeatherForecastDay(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function showMinTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function showMaxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function formatDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div>{formatDay()}</div>
      <div>
        <img src={iconUrl} alt={props.data.weather[0].description} />
      </div>
      <span>
        {showMinTemp()} | {showMaxTemp()}
      </span>
    </div>
  );
}
