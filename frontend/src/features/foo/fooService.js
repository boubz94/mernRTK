import axios from "axios";

const API_URL = "/api/foo/";

const createFoo = async (fooData) => {
  const response = await axios.post(API_URL, fooData);
  return response.data;
};

const getFoo = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
const deleteFoo = async (fooId) => {
  const response = await axios.delete(API_URL + fooId);
  return response.data;
};
const fooService = {
  createFoo,
  getFoo,
  deleteFoo,
};

export default fooService;
