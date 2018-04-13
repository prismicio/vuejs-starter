<template>
  <div :is="comp"/>
</template>

<script>
export default {
  name: 'PrismicLink',
  props: ['link'],
  computed: {
    comp () {
      const url = this.$prismicDOM.Link.url(this.link, this.$linkResolver);
      const target = this.link.target ? `target="'${this.link.target}'" rel="noopener"` : '';

      if (this.link.link_type === 'Document') {
        return {
          template: `<router-link to="${url}"><slot/></router-link>`
        };
      } else {
        return {
          template: `<a href="${url}" ${target}><slot/></a>`
        };
      }
    }
  }
};
</script>
