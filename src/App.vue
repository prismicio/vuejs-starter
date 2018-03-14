<template>
  <div id="app">
    <Page/>
  </div>
</template>

<script>
import Page from '@/components/documents/Page';

export default {
  name: 'App',
  components: {
    Page
  }
};
</script>

<style>
@import "./assets/resetr.css";

#app {
  color: #333;
}
</style>
