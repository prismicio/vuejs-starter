<template>
  <section>
    <p>{{ heading }}</p>
  </section>
</template>

<script>
export default {
  name: 'Gains',
  props: ['slice'],
  computed: {
    heading () {
      return this.$prismicDOM.RichText.asText(this.slice.primary.heading);
    }
  }
};
</script>

<style scoped>
</style>
