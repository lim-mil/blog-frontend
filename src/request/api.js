import {get} from "@/request/http";

export const apiPosts = (page=1, step=20) => {
  let url = "posts";
  let params = {
    page: page,
    step: step
  }
  return get(url, params);
}