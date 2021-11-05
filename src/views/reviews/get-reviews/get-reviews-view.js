import React, { useEffect, useState } from "react";
import { getAllReviews } from "../../../api/api";
import GetReviews from "./get-reviews";
import "./get-reviews.css";

const GetReviewsView = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const reviews = await getAllReviews();
      setAllReviews(reviews);
    })();
  }, []);

  return (
    <div>
      {allReviews.length ? (
        allReviews.map(review => (
          <div className="all__reviews" key={review.productId}>
            <GetReviews review={review} />
          </div>
        ))
      ) : (
        <div className="alt_text">Please add a product</div>
      )}
    </div>
  );
};
export default GetReviewsView;
