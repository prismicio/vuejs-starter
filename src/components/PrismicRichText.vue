<template>
  <component :is="richTextComponent"/>
</template>

<script>
import prismicDOM from 'prismic-dom';
import linkResolver from '@/prismic/link-resolver';
import htmlSerializer from '@/prismic/html-serializer';

export default {
  name: 'PrismicRichText',
  props: {
    field: {
      type: Array,
      required: true
    },
    asText: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    richTextComponent () {
      let template = '';

      if (this.asText === false) {
        template = `
          <div>
            ${prismicDOM.RichText.asHtml(this.field, linkResolver, htmlSerializer)}
          </div>
        `;
      } else {
        template = `
          <span>
            ${prismicDOM.RichText.asText(this.field)}
          </span>
        `;
      }
      return { template };
    }
  }
};
</script>
