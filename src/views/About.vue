<template>
  <div class="about box">
    {{about}}
  </div>
</template>

<script>
import {apiAbout} from "@/request/api";

export default {
  name: "About",
  data: () => {
    return {
      about: ''
    }
  },
  mounted() {
    apiAbout().then(response => {
      this.about = response.data.about;
    })
  }
}
</script>