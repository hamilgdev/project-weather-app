import React from "react";
import { useFetch } from "./hooks/useFetch";

import Header from "./components/Header";
import SectionDays from "./components/SectionDays";

import "./App.scss";

const App = () => {
  const { data, loading } = useFetch("Bogota");

  return (
    <main className="Main">
      <Header data={data} loading={loading} />
      <SectionDays data={data} loading={loading} />

      <section className="SectionVisit">SectionVisit</section>
      <section className="SectionTop">SectionTop</section>
      <section className="SectionAside">SectionAside</section>
    </main>
  );
};

export default App;
