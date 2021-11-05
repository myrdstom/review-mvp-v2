import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/header";
import GetReviewsView from "./views/reviews/get-reviews";
import AddReview from "./views/reviews/add-review";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/addReview/:id" component={AddReview} />
          <Route path="/" component={GetReviewsView} />
        </Switch>
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
}

export default App;
