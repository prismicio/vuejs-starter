<template>
  <div>
    <p>Loading the Prismic's Preview...</p>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Preview',
  beforeCreate () {
    const previewToken = this.$route.query.token

    this.$prismic.client.previewSession(previewToken, this.$prismic.linkResolver, '/')
      .then((url) => {
        window.location.replace(url)
      })
  }
}
</script>
