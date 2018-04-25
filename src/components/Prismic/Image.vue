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

      const altAttr = this.field.alt ? `alt="${this.field.alt}"` : '';

      return {
        template: `<img src="${this.field.url}" ${altAttr}>`
      };
    }
  }
};
</script>
