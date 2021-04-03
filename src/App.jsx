import React from "react";
import { useFetch } from "./hooks/useFetch";

import FloatMenu from "./components/FloatMenu";
import Header from "./components/Header";
import SectionDays from "./components/SectionDays";
import SectionVisit from "./components/SectionVisit";
import SectionFeatured from "./components/SectionFeatured";

import "./App.scss";
import SectionFetchWeather from "./components/SectionFetchWeather";

const App = () => {
  const request = "Quibdo";
  // forecast, weather
  const { data, loading } = useFetch("name", request, "forecast");
  const gurrentWeather = useFetch("name", request, "weather");

  return (
    <main className="Main">
      <FloatMenu gurrentWeather={gurrentWeather} />
      <Header data={data} loading={loading} />
      <SectionDays data={data} loading={loading} />
      <SectionVisit loading={loading} />
      <SectionFeatured loading={loading} />
      <SectionFetchWeather loading={loading} />
    </main>
  );
};

export default App;
