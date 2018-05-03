<template>
  <component :is="richTextComponent"/>
</template>

<script>
import prismicDOM from 'prismic-dom';
import defaultHtmlSerializer from '@/prismic/html-serializer';
import linkResolver from '@/prismic/link-resolver';

export default {
  name: 'PrismicRichText',
  props: {
    field: {
      required: true
    },
    isPlain: {
      type: Boolean,
      required: false,
      default: false
    },
    htmlSerializer: {
      type: Function,
      required: false,
      default: defaultHtmlSerializer
    }
  },
  computed: {
    richTextComponent () {
      if (!this.field) {
        return null;
      }

      let template = '';

      if (this.isPlain === false) {
        template = `
          <div>
            ${prismicDOM.RichText.asHtml(this.field, linkResolver, this.htmlSerializer)}
          </div>
        `;
      } else {
        template = `<span>${prismicDOM.RichText.asText(this.field)}</span>`;
      }
      return { template };
    }
  }
};
</script>
