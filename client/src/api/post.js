import Axios from "axios";
import {server} from "./config";

export const paginatePosts = async query => {
  return Axios.post(`${server}/posts/paginate`, query);
};

export const updatePost = async post => {
  return Axios.patch(`${server}/posts/${post.id}`, post);
};

export const addPost = async post => {
  return Axios.put(`${server}/posts`, post);
};

export const deletePost = async id => {
  return Axios.delete(`${server}/posts/${id}`);
};
