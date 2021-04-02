import React from "react";
import PropTypes from "prop-types";

import { FaMapMarkerAlt } from "react-icons/fa";

import "./index.scss";

const Header = ({ data, loading }) => {
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

// define proptypes
Header.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

export default Header;
