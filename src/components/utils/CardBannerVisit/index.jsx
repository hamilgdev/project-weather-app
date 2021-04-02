import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./index.scss";

const CardBannerVisit = ({ slides }) => {
  const { src, title, location } = slides[0];

  return (
    <figure
      className="CardBanner"
      style={{
        flex: 1,
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <img src={src} alt={`${title} ${location}`} /> */}
      <div className="CardBanner--data">
        <FaMapMarkerAlt />
        <div className="CardBanner--data__info">
          <span>{title}</span>
          <small>{location}</small>
        </div>
      </div>
    </figure>
  );
};

export default CardBannerVisit;
