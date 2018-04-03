<template>
  <section>
    <p>{{ heading }}</p>
    <div>
      <div v-for="(item, index) in items" :key="'item_' + index">
        <img :src="item.icon.url" :alt="item.icon.alt">
        <p>{{ item.heading }}</p>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gains',
  props: ['slice'],
  computed: {
    heading () {
      return this.$prismicDOM.RichText.asText(this.slice.primary.heading);
    },
    items () {
      let results = [];

      for (let item of this.slice.items) {
        results.push({
          icon: {
            url: item.icon.url,
            alt: item.icon.alt
          },
          heading: this.$prismicDOM.RichText.asText(item.heading),
          description: this.$prismicDOM.RichText.asText(item.description)
        });
      }
      return results;
    }
  }
};
</script>

<style scoped>
</style>
