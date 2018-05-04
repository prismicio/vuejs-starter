<template>
  <div>
    <prismic-edit-button :documentId="documentId"/>
    <p>Page</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      documentId: ''
    }
  },
  methods: {
    getContent () {
      this.$prismic.getApi(this.$prismic.endpoint).then((api) => {
        return api.getSingle('example');
      }).then((document) => {
        this.documentId = document.id;
      });
    }
  },
  created () {
    this.getContent();
  }
};
</script>
