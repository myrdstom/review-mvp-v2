import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { baseURL } from "../../../config/baseUrl";
import { getAllProducts } from "../../../api/api";
import GetProducts from "./get-products";
import Loader from "../../../components/loader/loader";
import "./get-products.css";

let socket;

const GetProductsView = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  socket = io(baseURL);

  useEffect(() => {
    socket.on("rating-added", updatedProducts => {
      setAllProducts(updatedProducts);
    });

    return () => {
      socket.off();
    };
  }, []);

  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      setAllProducts(products);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {allProducts && allProducts.length ? (
            allProducts.map(product => (
              <div className="all__products" data-testid="productData" key={product.productId}>
                <GetProducts product={product} />
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
