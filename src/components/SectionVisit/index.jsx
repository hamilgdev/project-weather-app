import React from "react";
import CardBannerVisit from "../utils/CardBannerVisit";
import banner01 from "../../assets/img/banne01.jpg";

import "./index.scss";

const SlideBanners = [
  {
    id: 1,
    title: "Arab Street ",
    location: "Singapore",
    src: banner01,
  },
];

const SectionVisit = () => {
  return (
    <section className="SectionVisit">
      <h2 className="SectionVisit--title">
        <strong>Place to</strong> Visit
      </h2>
      <div className="SectionVisit--banners">
        <CardBannerVisit slides={SlideBanners} />
      </div>
    </section>
  );
};

export default SectionVisit;
