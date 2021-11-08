import React from "react";
import "./loader.css";

const Loader = () => (
  <div className="wrap" data-testid="loading">
    <div className="loading">
      <div className="bounceball" />
      <div className="text">NOW LOADING</div>
    </div>
  </div>
);

export default Loader;
