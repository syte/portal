import Axios from "axios";
import {server} from "./config";

export const login = async credentials => {
  return Axios.post(`${server}/auth/login`, credentials);
};

export const register = async user => {
  return Axios.put(`${server}/auth/register`, user);
};
