import React from "react";
import PropTypes from "prop-types";

import CardFeaturedInfoUser from "../CardFeaturedInfoUser";

import "./index.scss";

const GridCardFeaturedInfoUser = ({ usersReviews }) => {
  return (
    <div className="GridCardFeaturedInfoUser">
      {/* Component <CardFeaturedInfoUser /> */}
      {usersReviews.map(({ id, name, src }) => (
        <CardFeaturedInfoUser key={id} name={name} src={src} />
      ))}
      {/* END Component <CardFeaturedInfoUser /> */}
    </div>
  );
};

// define proptypes
GridCardFeaturedInfoUser.propTypes = {
  usersReviews: PropTypes.array.isRequired,
};

export default GridCardFeaturedInfoUser;
