<template>
  <component :is="imageComponent"/>
</template>

<script>
export default {
  name: 'PrismicImage',
  props: {
    field: {
      required: true
    }
  },
  computed: {
    imageComponent () {
      if (!this.field) {
        return null;
      }

      return {
        template: `<img src="${this.field.url}" alt="${this.field.alt}">`
      };
    }
  }
};
</script>
