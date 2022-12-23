import react from "react";
import "./Weather.css";

export default function Weather() {
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
          <img src="#" />
        </div>
        <div className="col-6">
          {" "}
          <span>(Date, Time)</span>
        </div>
        <div className="col-6">
          <span>() </span> <span className="unit">°C|°F</span>
        </div>
        <div className="col-12">
          <ul>
            <li>Description:()</li>
            <li>Humidity:()%</li>
            <li> Wind:()km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
