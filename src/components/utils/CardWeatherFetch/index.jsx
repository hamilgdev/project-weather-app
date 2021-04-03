import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Loader } from "../Loader";
import "./index.scss";

const CardWeatherFetch = ({ request }) => {
  const [weather, setWeather] = useState({});
  const { data, loading } = request;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

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
  }, [data]);

  return (
    <article className="CardWeatherFetch">
      {loading ? (
        <Loader />
      ) : (
        <>
          <header className="CardWeatherFetch--head">
            <figure className="CardWeatherFetch--head__icon">
              <img src={weatherIcon} alt={weather.description} />
            </figure>
            <div className="CardWeatherFetch--head__data">
              <div className="CardWeatherFetch--head__data--temp">
                <span>{Math.floor(data?.main.temp)}</span>
                <small>ºC</small>
              </div>
              <div className="CardWeatherFetch--head__data--location">
                <span>{data?.name}</span>
                <span>{data?.sys.country}</span>
              </div>
            </div>
          </header>
          <footer className="CardWeatherFetch--footer">
            <small>Humidity {Math.floor(data?.main.humidity)}%</small>
            <small>{weather.main}</small>
            <small>{data?.wind.speed}km/h</small>
          </footer>
        </>
      )}
    </article>
  );
};

// define proptypes
CardWeatherFetch.propTypes = {
  request: PropTypes.object,
};

export default CardWeatherFetch;
