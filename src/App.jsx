import React from "react";

import "./App.scss";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="Main">
      <Header />
      <section className="SectionDays">SectionDays</section>
      <section className="SectionVisit">SectionVisit</section>
      <section className="SectionTop">SectionTop</section>
      <section className="SectionAside">SectionAside</section>
    </main>
  );
};

export default App;
