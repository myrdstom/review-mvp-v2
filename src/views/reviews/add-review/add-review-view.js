import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import AddReview from "./add-review";
import { addReview } from "../../../api/api";

const AddReviewView = props => {
  const history = useHistory();
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [width, setWidth] = useState("0%");
  const ratingsRef = useRef();
  const {
    match: {
      params: { id }
    }
  } = props;

  const handleClick = e => {
    const element = ratingsRef.current;
    const clickedPosition = e.pageX - element.offsetLeft + 10;
    const clickedRating = Math.round((Math.round((clickedPosition / 100) * 5 * 100) / 100) * 2) / 2;
    const goldenStars = `${(clickedRating / 5) * 100}%`;
    setRating(clickedRating);
    setWidth(goldenStars);
  };
  const handleChange = e => setDescription(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      description,
      rating
    };
    await addReview(data, id);
    history.push("/");
  };

  return (
    <div>
      <AddReview
        handleChange={handleChange}
        reviewId={id}
        onClick={handleClick}
        description={description}
        handleSubmit={handleSubmit}
        ratingWidth={width}
        ratingsRef={ratingsRef}
      />
    </div>
  );
};

export default AddReviewView;
