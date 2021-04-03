import React from "react";
import CardBannerVisit from "../utils/CardBannerVisit";
import PropTypes from "prop-types";

import banner01 from "../../assets/img/banner_01.jpg";

import "./index.scss";

const SlideBanner = {
  id: 1,
  title: "Río Atrato",
  location: "Quibdó",
  src: banner01,
};

const SectionVisit = ({ loading }) => {
  return (
    <section className="SectionVisit">
      <h2 className="SectionVisit--title">
        <strong>Place to</strong> Visit
      </h2>
      <div className="SectionVisit--banners">
        {loading ? (
          <small>loading...</small>
        ) : (
          <CardBannerVisit
            title={SlideBanner.title}
            location={SlideBanner.location}
            src={SlideBanner.src}
          />
        )}
      </div>
    </section>
  );
};

// define proptypes
SectionVisit.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default SectionVisit;
