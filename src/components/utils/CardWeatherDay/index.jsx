import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import "./index.scss";

// Array defined with days
const getNameDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const CardWeatherDay = ({ dt_txt, weather, wtMain }) => {
  const [weatherDay, setWeatherDay] = useState("");

  const { icon, description, main } = weather[0];
  const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  /*
   *  Determine the name to which the 3-day forecast corresponds
   */
  useEffect(() => {
    // Separate date from time, raw format example ("01-01-2001 00:00:00")
    const getData = dt_txt.split(" ")[0];
    const wtDate = new Date(getData).getDay();
    // The status is updated with the new array obtained
    setWeatherDay(getNameDay[wtDate]);
  }, [dt_txt]);

  return (
    <article className="CardWeatcher">
      <div className="CardWeatcher--icon">
        <img src={weatherIcon} alt={description} />
      </div>
      <div className="CardWeatcher--data">
        <div className="CardWeatcher--data__day">{weatherDay}</div>
        <div className="CardWeatcher--data__state">{main}</div>
      </div>
      <div
        className={clsx(
          "CardWeatcher--temp",
          weatherDay === getNameDay[new Date().getDay()] && "currentDay"
        )}
      >
        <span className="CardWeatcher--temp__info">
          {Math.floor(wtMain.temp_max)}º / {Math.floor(wtMain.temp_min)}º
        </span>
      </div>
    </article>
  );
};

// define proptypes
CardWeatherDay.propTypes = {
  dt_txt: PropTypes.string.isRequired,
  weather: PropTypes.array.isRequired,
  wtMain: PropTypes.object.isRequired,
};

export default CardWeatherDay;
