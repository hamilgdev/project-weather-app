import React from "react";

import { useFetch } from "../../hooks/useFetch";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./index.scss";

const Header = () => {
  const { data, loading } = useFetch("Bogota");

  return (
    <section className="Header">
      <div className="ContentNameWeatcher">
        {loading ? (
          <small>loading...</small>
        ) : (
          <div className="NameWeatcher">
            <FaMapMarkerAlt />
            <h1>{data.city.name}</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
