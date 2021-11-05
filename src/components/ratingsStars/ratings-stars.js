import React from "react";
import "./ratingStars.css";

const RatingsStars = ({ id = null, calculatedProgress = null, onClick, ratingsRef = null }) => (
  <>
    <span ref={ratingsRef} className="reviews__stars" id={id}>
      <div className="stars-outer" onClick={onClick}>
        <div className="stars-inner" style={{ width: `${calculatedProgress}` }} />
      </div>
    </span>
  </>
);

export default RatingsStars;
