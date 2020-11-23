<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        limyel's blog
      </div>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/home" active-class="is-active">
          Home
        </router-link>
        <router-link class="navbar-item" to="/archives" active-class="is-active">
          Archives
        </router-link>
        <router-link class="navbar-item" to="/projects" active-class="is-active">
          Projects
        </router-link>
        <a class="navbar-item is-disabled" href="#">
          Laboratory
        </a>
        <router-link class="navbar-item" to="/about" active-class="is-active">
          About
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>

</style>