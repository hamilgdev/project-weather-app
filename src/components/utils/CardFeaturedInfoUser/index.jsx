import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const CardFeaturedInfoUser = ({ name, src }) => {
  return (
    <article className="CardFeaturedInfoUser">
      <figure className="CardFeaturedInfoUser--figure">
        <img src={src} alt={name} />
      </figure>
    </article>
  );
};

// define proptypes
CardFeaturedInfoUser.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default CardFeaturedInfoUser;
