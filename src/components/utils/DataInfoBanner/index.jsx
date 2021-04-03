import React from "react";
import PropTypes from "prop-types";

import { FaMapMarkerAlt } from "react-icons/fa";

import "./index.scss";

const DataInfoBanner = ({ title, location }) => {
  return (
    <div className="DataInfoBanner">
      <FaMapMarkerAlt />

      <div className="DataInfoBanner--info">
        <span>{title}</span>
        <small>{location}</small>
      </div>
    </div>
  );
};

// define proptypes
DataInfoBanner.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default DataInfoBanner;
