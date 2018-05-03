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

      const urlDataAttr = this.field.embed_url ? `data-oembed="${this.field.embed_url}"` : '';
      const typeDataAttr = this.field.type ? `data-oembed-type="${this.field.type}"` : '';
      const providerDataAttr = this.field.provider_name ? `data-oembed-provider="${this.field.provider_name}"` : '';

      return {
        template: `
          <div ${urlDataAttr} ${typeDataAttr} ${providerDataAttr}>
            ${this.field.html}
          </div>
        `
      };
    }
  }
};
</script>
