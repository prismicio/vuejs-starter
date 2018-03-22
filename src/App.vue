<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
@import "./assets/resetr.css";
@import "./assets/prismic-edit-button.css";

#app {
  color: #333;
}
</style>
