import { BASE_URL, OPTIONS } from "../constants/TheConstants";

export const getCollection = async () => {
  const response = await this.axios.get(`${BASE_URL}/allcollection`);
  return response.data;
};

export const createUser = async (data) => {
  const response = await this.axios.post(`${BASE_URL}/api/register`, { data });
  return response.data;
};

export const loginUser = async (data) => {
  console.log(data);
  const response = await this.axios.post(
    `${BASE_URL}/login`,
    data,
    OPTIONS
  );
  return response.data;
};
