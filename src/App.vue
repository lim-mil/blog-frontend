<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="columns mt-5 content">
      <div class="column is-6 is-offset-2">
        <router-view/>
      </div>
      <div class="column is-2">
        <SideBar></SideBar>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";
  import SideBar from "./components/SideBar";
  import Footer from "@/components/Footer";

  export default {
    components: {
      Footer,
      SideBar,
      NavBar
    }
  }
</script>

<style>
#app{
  height: 100vh;
  display: flex;
  flex-direction: column;

}
.content{
  flex: 1;
}
html,body{
  min-height: 100vh;
}
</style>
