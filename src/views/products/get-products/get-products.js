import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingsStars from "../../../components/ratingsStars";
import { calculateTotalRating, calculateEachReview } from "./utils";

const GetProducts = ({ review }) => {
  const { productName, productId, ratings } = review;
  const [totalRating, setTotalRating] = useState(null);
  const [average, setAverage] = useState("");
  useEffect(() => {
    if (ratings.length) {
      const { widthPercentage, averageRating } = calculateTotalRating(review);
      setTotalRating(widthPercentage);
      setAverage(averageRating);
    }
  }, [review]);

  return (
    <div className="reviews">
      <div className="title">{productName}</div>
      <div className="reviews__content" id={productId}>
        <span>
          <span className="reviews__rating">{average}</span>
          <RatingsStars calculatedProgress={totalRating} />
        </span>
        <span className="reviews__button">
          <button type="submit" className="reviews__add" id="add__review">
            <Link to={{ pathname: `/addReview/${productId}/` }}>Add Review</Link>
          </button>
        </span>
      </div>
      <hr />
      <div className="review_details">
        <div className="reviews__title">Reviews</div>
        <div className="review__list" id={productId} />
        {ratings &&
          ratings.map(ratingItem => {
            const { description, rating, ratingId } = ratingItem;
            const width = calculateEachReview(ratingItem);
            return (
              <div key={ratingId} className="review__grid">
                <RatingsStars id={ratingId} calculatedProgress={width} />
                <span> {rating}, </span> <span className="review__desc"> {description}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GetProducts;
