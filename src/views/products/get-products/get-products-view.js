import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { baseURL } from "../../../config/baseUrl";
import { getAllReviews } from "../../../api/api";
import GetProducts from "./get-products";
import Loader from "../../../components/loader/loader";
import "./get-products.css";

let socket;

const GetProductsView = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {allReviews.length ? (
            allReviews.map(review => (
              <div className="all__reviews" key={review.productId}>
                <GetProducts review={review} />
              </div>
            ))
          ) : (
            <div className="alt_text">Please add a product</div>
          )}
        </>
      )}
    </>
  );
};
export default GetProductsView;
