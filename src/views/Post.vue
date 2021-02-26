<template>
  <div class="box">
    <h2 class="title has-text-centered">{{post? post.title: ""}}</h2>
    <div class="content is-small has-text-centered has-text-grey">2020-10-30 10:20</div>
    <div class="subtitle content is-6">
      {{post? post.content: ""}}
    </div>
    <hr>
  </div>
</template>

<script>
import {apiPost} from "@/request/api";

export default {
  name: "Post",
  data: () => {
    return {
      post: null
    }
  },
  mounted() {
    apiPost(this.$route.params.id).then(response => {
      this.post = response.data;
    })
  }
}
</script>

<style lang="stylus">

</style>