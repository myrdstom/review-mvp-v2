import React from "react";
import RatingsStars from "../../../components/ratingsStars";

const AddReview = ({ onClick, onSubmit, description, handleChange, ratingWidth, ratingsRef }) => (
  <div id="add-review">
    <div className="all__reviews">
      <div className="reviews">
        <div className="title">What&apos;s your rating?</div>
        <form id="myForm" onSubmit={onSubmit} data-testid="form">
          <div className="review_details">
            <div className="reviews__title">Rating</div>
            <div className="review__list">
              <div>
                <RatingsStars onClick={onClick} calculatedProgress={ratingWidth} ratingsRef={ratingsRef} />{" "}
              </div>
              <div>Review</div>
              <input
                type="text"
                className="review__input"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Start Typing..."
                data-testId="input-review-id"
              />
            </div>
            <button type="submit" className="reviews__add" id="submit__review">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
export default AddReview;
