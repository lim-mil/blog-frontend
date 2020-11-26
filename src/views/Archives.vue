<template>
  <div class="box">
    <div class="container mb-5" v-for="category in categories" :key="category.id">
      <h4 class="title is-4 has-text-right has-text-weight-light">{{category.name}}</h4>
      <div class="columns" v-for="post in category.posts" :key="post.id">
        <div class="column is-2-desktop">
          {{post.created | get_dt}}
        </div>
        <div class="column is-10-desktop">
          <h5 class="title is-5 has-text-weight-light is-4-desktop "><a href="#">{{post.title}}</a></h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Archives",
    data: () => {
      return {
        categories: [],
        archives: [
          {
            name: '编程',
            posts: [
              {
                id: 1,
                title: 'title1',
                created: 1606147036
              },
              {
                id: 2,
                title: 'title2',
                created: 1606147036
              },
              {
                id: 3,
                title: 'title3',
                created: 1606147036
              },
              {
                id: 4,
                title: 'title4',
                created: 1606147036
              },
              {
                id: 5,
                title: 'title5',
                created: 1606147036
              }
            ]
          },
          {
            name: '生活',
            posts: [
              {
                id: 6,
                title: 'title6',
                created: 1606147036
              },
              {
                id: 7,
                title: 'title7',
                created: 1606147036
              },
              {
                id: 8,
                title: 'title8',
                created: 1606147036
              },
              {
                id: 9,
                title: 'title9',
                created: 1606147036
              },
              {
                id: 10,
                title: 'title10',
                created: 1606147036
              }
            ]
          }
        ]
      }
    },
    created() {
      this.$axios({
        method: 'get',
        url: 'http://127.0.0.1:7331/posts/categories/'
      }).then((response) => {
        console.log(response.data)
        this.categories = response.data
      })
    },
    filters: {
      get_dt(v) {
        return new Date(v*1000).toLocaleDateString();
      }
    }
  }
</script>

<style lang="stylus">
h4
  padding-bottom 1%
  border-bottom solid 0.5px lightgray
</style>