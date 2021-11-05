import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getAllReviews = async () => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const addReview = async (reviewData, id) => {
  try {
    const response = await axios.post(`${baseURL}/products/rating/${id}`, reviewData);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
