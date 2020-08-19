import axios from "axios";

const request = () => {
  return axios.create({ baseURL: "https://rickandmortyapi.com/api/" });
};
export default request;
