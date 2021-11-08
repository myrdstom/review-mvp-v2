import React from "react";
import { Router, Switch } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

export const RenderWithRouterMatch = ({ children }) => (
  <div>
    <Router history={history}>
      <Switch>{children}</Switch>
    </Router>
    <ToastContainer
      position="bottom-center"
      theme="colored"
      autoClose={3000}
      hideProgressBar
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      transition={Slide}
      draggable={false}
      pauseOnHover
      limit={1}
    />
  </div>
);
