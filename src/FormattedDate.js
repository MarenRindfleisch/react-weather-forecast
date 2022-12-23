import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Saptember",
    "October",
    "November",
    "December",
  ];
  let year = props.date.getFullYear();
  let month = months[props.date.getMonth()];
  let weekDay = days[props.date.getDay()];
  let day = props.date.getDay();
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="FormattedDate">
      {weekDay},{hours}:{minutes} {"\n"}
      {month} {day}, {year}
    </div>
  );
}
