import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddReviewView from "../../../views/products/add-review/add-review-view";
import AddReview from "../../../views/products/add-review/add-review";
import { RenderWithRouterMatch } from "../../test.utils";

describe("Get Products", () => {
  const handleSubmit = jest.fn();
  afterEach(cleanup);
  test("It should add a review", () => {
    const { getByTestId } = render(
      <RenderWithRouterMatch>
        <AddReviewView match={{ params: { id: "test" } }}>
          <AddReview onSubmit={handleSubmit} />
        </AddReviewView>
      </RenderWithRouterMatch>
    );

    screen.debug();

    const reviewId = getByTestId("input-review-id");

    expect(getByTestId("review")).toHaveTextContent("Rating");

    fireEvent.click(getByTestId("stars"));
    fireEvent.change(reviewId, { target: { value: "test" } });
    expect(reviewId.value).toBe("test");

    fireEvent.submit(getByTestId("form"));
    // expect(handleSubmit).toHaveBeenCalled();
  });
});
