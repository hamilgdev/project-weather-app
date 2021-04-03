import React from "react";
import PropTypes from "prop-types";

import "./index.scss";
import DataInfoBanner from "../DataInfoBanner";

const CardBannerVisit = ({ title, src, location }) => {
  return (
    <figure
      className="CardBanner"
      style={{
        flex: "1",
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="CardBanner--data">
        {/* Component <DataInfoBanner /> */}
        <DataInfoBanner title={title} location={location} />
        {/* END Component <DataInfoBanner /> */}
      </div>
    </figure>
  );
};

// define proptypes
CardBannerVisit.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default CardBannerVisit;
