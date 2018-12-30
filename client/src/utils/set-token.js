import axios from "axios";

const setToken = token => {
  if (token) {
    axios.defaults.headers.common["x-access-token"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["x-access-token"];
  }
};

export default setToken;
