import React from "react";
import PropTypes from "prop-types";

import { useFetch } from "../../hooks/useFetch";

import CardWeatherFetch from "../utils/CardWeatherFetch";

import "./index.scss";

const SectionFetchWeather = ({ loading }) => {
  const req = useFetch("name", "Pereira", "weather");
  const req2 = useFetch("id", "3674962", "weather");
  const req3 = useFetch("id", "3688685", "weather");

  return (
    <section className="SectionFetchWeather">
      {loading ? (
        <small>loading...</small>
      ) : (
        <>
          <CardWeatherFetch request={req} />
          <CardWeatherFetch request={req2} />
          <CardWeatherFetch request={req3} />
        </>
      )}
    </section>
  );
};

// define proptypes
SectionFetchWeather.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default SectionFetchWeather;
