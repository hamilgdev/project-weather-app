import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

import CardWeatherDay from "../utils/CardWeatherDay";

import "./index.scss";

const SectionDays = () => {
  const [dayForecast, setDayForecast] = useState([]);
  const { data, loading } = useFetch("Bogota");

  /*
   * 3 day forecast filtering
   */
  useEffect(() => {
    // Empty array where the filter of the data referring to 3 days will be temporarily sent
    const copyList = [];
    /**
     * Filtering that is performed on the data received once the list is given:
     * 1 - determines by index, values less than 24
     * 2 - in turn, separate the elements multiples of 8
     **/
    data?.list.filter(
      (item, index) => index < 24 && index % 8 === 0 && copyList.push(item)
    );
    // The status is updated with the new array obtained
    setDayForecast(copyList);
  }, [data]);

  return (
    <section className="SectionDays">
      <h2>
        <strong>3 Days</strong> Forecast
      </h2>
      <div className="SectionDays--cards">
        {loading ? (
          <small>loading...</small>
        ) : (
          dayForecast.map(({ dt_txt, weather, main }, index) => (
            <CardWeatherDay
              key={index}
              dt_txt={dt_txt}
              weather={weather}
              wtMain={main}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default SectionDays;
