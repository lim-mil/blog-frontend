<template>
  <div class="box">
    <h2 class="title has-text-centered">{{post? post.title: ""}}</h2>
    <div class="content is-small has-text-centered has-text-grey">{{ ts }}</div>
    <div class="subtitle content is-6" v-html="post? md: ''"></div>
    <hr>
    <Comment :post_id="post.id"></Comment>
  </div>
</template>

<script>
import {apiPost} from "@/request/api";
import {tsToStr} from "@/utils/ts";
import {toMarkdown} from "@/utils/md";
import Comment from "@/components/Comment";

export default {
  name: "Post",
  components: {Comment},
  data: () => {
    return {
      post: null
    }
  },
  mounted() {
    apiPost(this.$route.params.id).then(response => {
      this.post = response.data;
    })
  },
  computed: {
    ts: function() {
      return tsToStr(this.post.created);
    },
    md: function() {
      return toMarkdown(this.post.content);
    }
  }
}
</script>

<style lang="stylus">

</style>