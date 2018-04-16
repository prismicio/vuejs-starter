<template>
  <component :is="imageComponent"/>
</template>

<script>
export default {
  name: 'PrismicImage',
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageComponent () {
      return {
        template: `<img src="${this.field.url}" alt="${this.field.alt}">`
      };
    }
  }
};
</script>
