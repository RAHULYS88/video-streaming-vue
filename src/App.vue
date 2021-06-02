<template>
  <div
    id="app"
    class="container"
  >
    <div class="row" />
    <div class="col-sm-8">
      <play-list />
    </div>
  </div>
</template>
<script>
import PlayList from "./components/PlayList.vue";
export default {
  name: "App",
  components: {
    PlayList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.col-sm-8 {
  display: inline-flex !important;
}
</style>
