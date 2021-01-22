<template>
  <div class="box">
    <div class="container mb-6" v-for="category in categories" :key="category.id">
      <h4 class="title is-4 has-text-right has-text-weight-light">{{category.name}}</h4>
      <div class="columns" v-for="project in category.projects" :key="project.id">
        <div class="column is-2-desktop">
          <a href="#">{{project.name}}</a>
        </div>
        <div class="column is-8-desktop has-text-grey-light">
          {{project.description}}
        </div>
        <div class="column is-2-desktop has-text-right has-text-success" v-if="project.status == 0">
          {{project.status | getStatus}}
        </div>
        <div class="column is-2-desktop has-text-right has-text-danger" v-if="project.status == 1">
          {{project.status | getStatus}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {apiProjects} from "@/request/api";

export default {
  name: "Projects",
  data: () => {
    return {
      categories: [],

    }
  },
  filters: {
    getStatus(value) {
      switch(value) {
        case 0:
          return '开发中';
        case 1:
          return '停止';
      }
    }
  },
  mounted() {
    apiProjects().then(response => {
      this.categories = response.data;
    })
  }
}
</script>

<style lang="stylus">
.container
  padding-right 2%
  border-right cornflowerblue 3px solid
</style>