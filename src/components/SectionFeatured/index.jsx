import React from "react";
import PropTypes from "prop-types";

import { Loader } from "../utils/Loader";
import CardBannerVisit from "../utils/CardBannerVisit";
import GridCardFeaturedInfoUser from "../utils/GridCardFeaturedInfoUser";

import { FaAsterisk } from "react-icons/fa";

import user01 from "../../assets/img/user01.jpg";
import user02 from "../../assets/img/user02.jpg";
import user03 from "../../assets/img/user03.jpg";

import banner02 from "../../assets/img/banner_02.jpg";
import banner03 from "../../assets/img/banner_03.jpg";

import "./index.scss";

const usersReviews = [
  {
    id: 1,
    name: "Guy Hawkins",
    src: user01,
  },
  {
    id: 2,
    name: "Jacob Jones",
    src: user02,
  },
  {
    id: 3,
    name: "Jane Cooper",
    src: user03,
  },
];

const SlideBanner = [
  {
    id: 1,
    title: "Las Cascadas",
    location: "Tutunendo",
    src: banner02,
  },
  {
    id: 2,
    title: "Atardecer",
    location: "Malecón",
    src: banner03,
  },
];

const SectionFeatured = ({ loading }) => {
  return (
    <section className="SectionFeatured">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="SectionFeatured--top">
            <div className="SectionFeatured--top__title">
              <FaAsterisk />
              <h2>Top Reviews</h2>
            </div>
            <div className="SectionFeatured--top__users">
              {/* Component <GridCardFeaturedInfoUser /> */}
              <GridCardFeaturedInfoUser usersReviews={usersReviews} />
              {/* END Component <GridCardFeaturedInfoUser /> */}
            </div>
          </div>

          <div className="SectionFeatured--banners">
            <CardBannerVisit
              title={SlideBanner[0].title}
              src={SlideBanner[0].src}
              location={SlideBanner[0].location}
            />
            <CardBannerVisit
              title={SlideBanner[1].title}
              src={SlideBanner[1].src}
              location={SlideBanner[1].location}
            />
          </div>
        </>
      )}
    </section>
  );
};

// define proptypes
SectionFeatured.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default SectionFeatured;
