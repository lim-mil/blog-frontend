<template>
  <div id="comment">
    <nav class="level mt-3">
      <div class="level-left">
        <div class="level-item">
          10 条评论
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <p class="mr-5">{{ login }}</p>
          <a class="button is-info" :href="githubUrl" @click="saveURI" v-if="!login">使用GitHub登录</a>
          <button class="button is-danger" v-else @click="logout">退出</button>
        </div>
      </div>
    </nav>

    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="avatar">
        </p>
      </figure>
      <div class="media-content">
        <div class="field">
          <p class="control">
            <textarea class="textarea" placeholder="Add a comment..."></textarea>
          </p>
        </div>
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <button class="button is-info" @click="submitComment">评论</button>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <label class="checkbox">
                <input type="checkbox"> Press enter to submit
              </label>
            </div>
          </div>
        </nav>
      </div>
    </article>

    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Barbara Middleton </strong><img width="16" height="15" src="./../assets/reply.svg"/><a href="#">lim-mil</a>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
            <br>
            <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
          </p>
        </div>
      </div>
    </article>

    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Barbara Middleton </strong><img width="16" height="15" src="./../assets/reply.svg"/><a href="#">lim-mil</a>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
            <br>
            <small><a @click="readyReply">Reply</a> · 3 hrs</small>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import {apiGithubAuth} from "../request/api";

export default {
  name: "Comment",
  data: () => {
    return {
      githubUrl: "https://github.com/login/oauth/authorize?client_id=08534284cc7baa6ce7d4&scope=read:user&state=limyel"
    }
  },
  methods: {
    loginGithub() {
      apiGithubAuth();
    },
    saveURI() {
      localStorage.setItem("CURRENT_URI", window.location.href);
    },
    logout() {
      localStorage.removeItem("OAUTH_JWT_TOKEN");
      localStorage.removeItem("LOGIN");
      localStorage.removeItem("AVATAR_URL");
      localStorage.removeItem("CURRENT_URI");
      location.reload()
    },
    readyReply()
  },
  computed: {
    avatar() {
      let avatarUrl = localStorage.getItem("AVATAR_URL")
      if (avatarUrl) {
        return avatarUrl;
      } else {
        return "https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/128x128.png";
      }
    },
    login() {
      let login = localStorage.getItem("LOGIN");
      if (login) {
        return login;
      } else {
        return "";
      }
    }
  }
}
</script>

<style scoped>

</style>