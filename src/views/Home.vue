<template>
  <div>
    <div class="box" v-for="post in posts" :key="post.id">
      <h2 class="title has-text-weight-light"><a href="#">{{post.title}}</a></h2>
      <div class="columns">
      <div class="column is-2 is-small has-text-grey datetime">
        <p>{{post.created | datetimeChange}}</p>
      </div>
      <div class="column has-text-left is-small has-text-grey category">
        <p>{{post.category.name}}</p>
      </div>
      </div>
      <p class="subtitle content is-6 has-text-grey">
        {{post.description}}
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  data: () => {
    return {
      posts: [],

    }
  },
  filters: {
    datetimeChange(value) {
      let now = new Date() / 1000;
      let delta = parseInt((now - value) / 60);
      if (delta > 0 && delta < 10)
        return '刚刚';
      else if (delta >= 10 && delta < 60)
        return delta + ' 分钟前';
      else if (delta >= 60 && delta < 60 * 24)
        return parseInt(delta / 60) + ' 小时前';
      else if (delta >= 60 * 24 && delta < 60 * 24 * 100)
        return parseInt(delta / 60 / 24) + ' 天前';
      else if (delta >= 60 * 24 * 100) {
        value *= 1000;
        value = new Date(value);
        return value.toLocaleDateString();
      }
    }
  },
  created() {
    this.$axios({
      method: 'get',
      url: 'http://127.0.0.1:7331/posts/'
    }).then((response) => {
      console.log(response.data)
      this.posts = response.data.post_list
    })
  }
}
</script>

<style lang="stylus">
.datetime, .category
  font-size small
</style>