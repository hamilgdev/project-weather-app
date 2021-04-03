import React from "react";
import PropTypes from "prop-types";

import { FaMapMarkerAlt } from "react-icons/fa";

import "./index.scss";

const Header = ({ data, loading }) => {
  return (
    <section className="Header">
      <div className="Header--ContentNameWeatcher">
        {loading ? (
          <small>loading...</small>
        ) : (
          <div className="Header--ContentNameWeatcher__NameWeatcher">
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
