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

export const apiPost = (id) => {
  let url = "/posts/" + id;
  return get(url);
}

export const apiGithubAuth = (redirectUri) => {
  let url = "https://github.com/login/oauth/authorize";
  let params = {
    client_id: "08534284cc7baa6ce7d4",
    redirect_uri: redirectUri,
    scope: "read:user",
    state: "limyel.com"
  }
  return get(url, params);
}