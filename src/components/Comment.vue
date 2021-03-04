<template>
  <div id="comment">
    <nav class="level mt-3">
      <div class="level-left">
        <div class="level-item">
          10 条评论
        </div>
      </div>
    </nav>

    <div class="container">
      <article class="media" v-for="(comment) in comments" :key="comment.id">
        <figure class="media-left">
          <p class="image is-64x64">
            <img :src="comment.oauth.avatar_url">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong><a :href="comment.oauth.html_url">{{ comment.oauth.login }}</a></strong>
              <span class="ml-3" v-if="comment.target_oauth">
                <img width="16" height="15" src="./../assets/reply.svg"/><a href="#">lim-mil</a>
              </span>
              <br>
              {{ comment.content }}
              <br>
              <small><a @click="readyReply(comment.oauth.login, comment.oauth.id)">Reply</a> · 3 hrs</small>
            </p>
          </div>
        </div>
      </article>
    </div>


    <div class="container mt-6">
      <div class="level">
        <div class="level-left">
          <span class="ml-3" v-if="replyOauthLogin">
            <img width="16" height="15" src="./../assets/reply.svg"/><a href="#">{{ replyOauth }}</a>
            <a class="delete ml-1" @click="cancelChooseOauth"></a>
          </span>
        </div>
        <div class="level-right">
          <div class="level-item">
            <p class="mr-5">{{ isLogin }}</p>
            <a class="button is-info" :href="githubUrl" @click="saveURI" v-if="!isLogin">使用GitHub登录</a>
            <button class="button is-danger" v-else @click="logout">退出</button>
          </div>
        </div>
      </div>
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img :src="avatar">
          </p>
        </figure>
        <div class="media-content">
          <div class="field">
            <p class="control">
              <textarea v-model="content" class="textarea" placeholder="Add a comment..."></textarea>
            </p>
          </div>
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <button class="button is-info" @click="reply" v-show="isLogin">评论</button>
              </div>
            </div>
          </nav>
        </div>
      </article>
    </div>

  </div>
</template>

<script>
import {apiComments, apiCreateComment, apiGithubAuth} from "../request/api";

export default {
  name: "Comment",
  props: [
    "post_id"
  ],
  data: () => {
    return {
      githubUrl: "https://github.com/login/oauth/authorize?client_id=08534284cc7baa6ce7d4&scope=read:user&state=limyel",
      comments: [],
      replyOauthLogin: "",
      replyOauthId: 0,
      content: "",
    }
  },
  methods: {
    cancelChooseOauth() {
      this.replyOauthId = 0;
      this.replyOauthLogin = "";
    },
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
    readyReply(login, id) {
      this.replyOauthLogin = login;
      this.replyOauthId = id;
    },
    reply() {
      let params = {};
      params.content = this.content;
      params.oauth_id = parseInt(localStorage.getItem("OAUTH_ID"));
      params.post_id = this.$props.post_id;
      if (this.replyOauthId !== 0) {
        params.target_oauth_id = this.replyOauthId;
        this.replyOauthId = 0;
      }
      console.log(params);
      apiCreateComment(params).then(response => {
        if (response.code === 200) {
          location.reload();
        }
      })
    }
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
    isLogin() {
      let login = localStorage.getItem("LOGIN");
      if (login) {
        return login;
      } else {
        return "";
      }
    },
    replyOauth() {
      return this.replyOauthLogin;
    }
  },
  mounted() {
    apiComments(this.$props.post_id).then(response => {
      this.comments = response.data;
    })
  }
}
</script>

<style scoped>

</style>