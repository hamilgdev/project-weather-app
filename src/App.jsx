import React from "react";
import { useFetch } from "./hooks/useFetch";

import FloatMenu from "./components/FloatMenu";
import Header from "./components/Header";
import SectionDays from "./components/SectionDays";
import SectionVisit from "./components/SectionVisit";
import SectionFeatured from "./components/SectionFeatured";

import "./App.scss";

const App = () => {
  const request = "Quibdo";
  // forecast, weather
  const { data, loading } = useFetch(request, "forecast");
  const gurrentWeather = useFetch(request, "weather");

  return (
    <main className="Main">
      <FloatMenu gurrentWeather={gurrentWeather} />
      <Header data={data} loading={loading} />
      <SectionDays data={data} loading={loading} />
      <SectionVisit loading={loading} />
      <SectionFeatured loading={loading} />

      <section className="SectionAside">SectionAside</section>
    </main>
  );
};

export default App;
