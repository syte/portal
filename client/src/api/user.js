import Axios from "axios";

const server = "http://localhost:3000";

export const login = async credentials => {
  return Axios.post(`${server}/auth/login`, credentials);
};

export const register = async user => {
  return Axios.put(`${server}/auth/register`, user);
};
