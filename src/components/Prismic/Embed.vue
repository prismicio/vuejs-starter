<template>
  <component :is="EmbedComponent"/>
</template>

<script>
export default {
  name: 'PrismicEmbed',
  props: {
    field: {
      required: true
    }
  },
  computed: {
    EmbedComponent () {
      if (!this.field) {
        return null;
      }

      return {
        template: `
          <div>
            ${this.field.html}
          </div>
        `
      };
    }
  }
};
</script>
