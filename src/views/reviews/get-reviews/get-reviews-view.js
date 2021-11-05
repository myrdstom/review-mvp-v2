import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { baseURL } from "../../../config/baseUrl";
import { getAllReviews } from "../../../api/api";
import GetReviews from "./get-reviews";
import "./get-reviews.css";

let socket;

const GetReviewsView = () => {
  const [allReviews, setAllReviews] = useState([]);
  socket = io(baseURL);

  useEffect(() => {
    socket.on("rating-added", updatedProducts => {
      setAllReviews(updatedProducts);
    });

    return () => {
      socket.off();
    };
  }, []);

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
