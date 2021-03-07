<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4 mt-5">
          <img :src="image_url" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4 has-text-centered">{{info.name}}</p>
            <p class="subtitle is-6"><img src="./../assets/github.svg" class="icon">&nbsp;<a :href="info.link">github</a></p>
            <p class="subtitle is-6"><img src="./../assets/location.svg" class="icon">&nbsp;{{info.location}}</p>
            <p class="subtitle is-6"><img src="./../assets/heart.svg" class="icon">&nbsp;{{info.job}}</p>
          </div>
        </div>

        <div class="content">
          {{info.description}}
        </div>
      </div>
    </div>
    <div class="box mt-3">
      <li v-for="blogrol in blogrols" :key="blogrol.name">
        <a :href="blogrol.link">{{blogrol.name}}</a>
      </li>
    </div>
  </div>
</template>

<script>
import {apiBlogrols, apiInfo} from "@/request/api";
import CONFIG from "@/config";

  export default {
    name: "SideBar",
    data: () => {
      return {
        info: {},
        blogrols: [],
        image_url: CONFIG.BASE_SERVER + CONFIG.MEDIA_API + "/img/limyel.jpg"
      }
    },
    mounted() {
      apiInfo().then(response => {
        this.info = response.data;
      })

      apiBlogrols().then(response => {
        this.blogrols = response.data;
      })

    }
  }
</script>

<style scoped>

</style>