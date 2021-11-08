import React from "react";
import axios from "axios";
import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import GetProductsView from "../../../views/products/get-products/get-products-view";
import { RenderWithRouterMatch } from "../../test.utils";
import { products } from "../../__fixtures__/products";

describe("Get Products", () => {
  beforeEach(() => {
    axios.get = jest.fn(() => Promise.resolve({ data: products }));
  });
  afterEach(cleanup);
  test("It should run the loader on page load", async () => {
    const { getByTestId, queryByText } = render(
      <RenderWithRouterMatch>
        <GetProductsView />
      </RenderWithRouterMatch>
    );
    expect(getByTestId("loading")).toHaveTextContent("NOW LOADING");

    await waitFor(() => getByTestId("productData"));

    expect(queryByText(/Kate/i)).toBeInTheDocument();
  });
});
