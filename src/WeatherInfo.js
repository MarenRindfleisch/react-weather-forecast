import react from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
        </div>
        <div className="col-6">
          {" "}
          <span>
            <FormattedDate date={props.data.date} />
          </span>
        </div>
        <div className="col-6">
          <span>{props.data.temperature} </span>{" "}
          <span className="unit">°C|°F</span>
        </div>
        <div className="col-12">
          <ul>
            <li className="text-capitalized">
              Description: {props.data.description}
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li> Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
