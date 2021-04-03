import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Loader } from "../utils/Loader";
import "./index.scss";

const FloatMenu = ({ gurrentWeather }) => {
  const [weather, setWeather] = useState({});
  const { data, loading } = gurrentWeather;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather?.icon}@2x.png`;

  /*
   *  Create a new array with the destructuring
   */
  useEffect(() => {
    data?.weather.map(({ icon, main, description }) =>
      // The status is updated with the new array obtained
      setWeather({
        icon,
        main,
        description,
      })
    );
  }, [data?.weather]);

  return (
    <aside className="FloatMenu">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="FloatMenu--IconWeather">
            <img
              className="FloatMenu--IconWeather__img"
              src={weatherIcon}
              alt={weather.description}
            />
            <small className="FloatMenu--IconWeather__info">
              {weather.main}
            </small>
          </div>
          <div className="FloatMenu--StateWeather">
            <span className="FloatMenu--StateWeather__temp">
              {Math.floor(data?.main.temp)}
              <small>ºC</small>
            </span>
          </div>
        </>
      )}
    </aside>
  );
};

// define proptypes
FloatMenu.propTypes = {
  gurrentWeather: PropTypes.object,
};

export default FloatMenu;
