<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="section">
      <div class="columns">
        <div class="column is-7-desktop is-offset-1-desktop">
          <router-view/>
        </div>
        <div class="column is-3-desktop">
          <SideBar></SideBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";
  import SideBar from "./components/SideBar";

  export default {
    components: {
      SideBar,
      NavBar
    }
  }
</script>

<style lang="stylus">

</style>
