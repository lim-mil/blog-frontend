<template>
  <div id="github-oauth">

  </div>
</template>

<script>
import {apiGithubOauth} from "@/request/api";

export default {
  name: "GithubOauth",
  mounted() {
    let uri = new URL(window.location.href);
    let params = uri.search;
    apiGithubOauth(params).then(response => {
      localStorage.setItem("OAUTH_JWT_TOKEN", response.data.token);
      localStorage.setItem("LOGIN", response.data.oauth.login);
      localStorage.setItem("AVATAR_URL", response.data.oauth.avatar_url);
      let uri = localStorage.getItem("CURRENT_URI");
      window.location.href = uri;
      localStorage.removeItem("CURRENT_URI")
    })
  }
}
</script>

<style lang="stylus">

</style>