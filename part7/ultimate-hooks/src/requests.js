import axios from "axios";

export const getAll = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const createObject = async (url, newObject) => {
  const response = await axios.post(url, newObject);
  return response.data;
};
