import axios from "axios";
import { products, review, reviewData, productId } from "../../__fixtures__/products";
import { getAllProducts, addReview } from "../../../api/api";

jest.mock("axios");
const mockedAxios = axios;

describe("Products Api", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("requests and gets products", async () => {
    mockedAxios.get.mockImplementation(() => Promise.resolve({ data: products }));

    const entity = await getAllProducts();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(entity).toEqual(products);
  });

  it("adds a  review to a product", async () => {
    mockedAxios.post.mockImplementation(() => Promise.resolve({ data: review }));

    const response = await addReview(reviewData, productId);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(response).toEqual(review);
  });
});
