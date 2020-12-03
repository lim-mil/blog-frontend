<template>
  <div class="about box">
    {{about}}
  </div>
</template>

<script>
  export default {
    name: "About",
    data: () => {
      return {
        about: ''
      }
    },
    created() {
      this.$axios({
        method: 'get',
        url: 'http://127.0.0.1:7331/info/about'
      }).then((response) => {
        this.about = response.data.about
      })
    }
  }
</script>