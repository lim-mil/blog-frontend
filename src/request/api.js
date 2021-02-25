import {get} from "@/request/http";

export const apiPosts = (page=1, step=20) => {
  let url = "/posts";
  let params = {
    page: page,
    step: step
  }
  return get(url, params);
}

export const apiInfo = () => {
  let url = "/info";
  return get(url);
}

export const apiBlogrols = () => {
  let url = "/info/blogrols";
  return get(url);
}

export const apiCategories = () => {
  let url = "/posts/categories";
  return get(url);
}

export const apiProjects = () => {
  let url = "/projects/categories";
  return get(url);
}

export const apiAbout = () => {
  let url = "/info/about";
  return get(url);
}