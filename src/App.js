import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
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
    </div>
  );
}

export default App;
