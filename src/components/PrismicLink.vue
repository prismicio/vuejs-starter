<template>
  <component :is="linkComponent">
    <slot/>
  </component>
</template>

<script>
import prismicDOM from 'prismic-dom';
import linkResolver from '@/prismic/link-resolver';

export default {
  name: 'PrismicLink',
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  computed: {
    linkComponent () {
      let template = '';
      const url = prismicDOM.Link.url(this.field, linkResolver);

      if (this.field.link_type === 'Document') {
        template = `
          <router-link to="${url}">
            <slot/>
          </router-link>
        `;
      } else {
        const target = this.field.target ? `target="'${this.field.target}'" rel="noopener"` : '';

        template = `
          <a href="${url}" ${target}>
            <slot/>
          </a>
        `;
      }
      return { template };
    }
  }
};
</script>
