<template>
  <div>
    <p>Loading the Prismic's Preview...</p>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)

export default {
  name: 'Preview',
  beforeCreate () {
    const previewToken = this.$route.query.token

    this.$prismic.client.previewSession(previewToken, this.$prismic.linkResolver, '/')
      .then((url) => {
        this.$cookie.set(this.$prismic.previewCookie, previewToken, { expires: '30m' })
        window.location.replace(url)
      })
  }
}
</script>
