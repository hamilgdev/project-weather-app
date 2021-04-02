import React from "react";

import "./App.scss";
import Header from "./components/Header";
import SectionDays from "./components/SectionDays";

const App = () => {
  return (
    <main className="Main">
      <Header />
      <SectionDays />
      <section className="SectionVisit">SectionVisit</section>
      <section className="SectionTop">SectionTop</section>
      <section className="SectionAside">SectionAside</section>
    </main>
  );
};

export default App;
