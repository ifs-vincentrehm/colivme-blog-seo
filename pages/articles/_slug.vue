<template>
  <article-show :article="article" />
</template>

<script>
import ArticleShow from '~/components/ArticleShow.vue'

export default {
  components: {
    ArticleShow
  },
  async asyncData({ $axios, params }) {
    const {
      defaults: { baseURL }
    } = $axios
    const slug = params.slug
    let article = await $axios.$get(baseURL + '/articles/?slug=' + slug)
    const slugifiedArticle = article[0]
    article = slugifiedArticle
    return { article }
  }
}
</script>

<style></style>
