<template>
  <div>
    <div class="box" v-for="post in post_list" :key="post">
      <h2 class="title">{{post.title}}</h2>
      <div class="content is-small has-text-grey">{{post.created | datetimeChange}}</div>
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
      post_list: [
        {
          title: 'helo blog',
          created: 1606147036,
          description: '这是一条假的博文，this is a fake blog post'
        },
        {
          title: 'helo blog',
          created: 1606146006,
          description: '这另是一条假的博文，this is another fake blog post'
        },
        {
          title: 'helo blog',
          created: 1606140006,
          description: '这另另是一条假的博文，this is another fake blog post'
        },
        {
          title: 'helo blog',
          created: 1600000006,
          description: '这另另另是一条假的博文，this is another fake blog post'
        },
        {
          title: 'helo blog',
          created: 1500000006,
          description: '这另另另另是一条假的博文，this is another fake blog post'
        }
      ]
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
      else if (delta >= 60 * 24 & delta < 60 * 24 * 100)
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
      url: 'http://127.0.0.1:7331/post/list'
    }).then((response) => {
      console.log(response)
    })
  }
}
</script>
