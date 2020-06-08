<template>
  <article-show :article="article" />
</template>

<script>
import ArticleShow from '~/components/ArticleShow.vue'

export default {
  components: {
    ArticleShow
  },
  async asyncData({ $axios, params, payload }) {
    if (payload) return { article: payload }
    else {
      const {
        defaults: { baseURL }
      } = $axios
      const slug = params.slug
      let article = await $axios.$get(baseURL + '/articles/?slug=' + slug)
      const slugifiedArticle = article[0]
      article = slugifiedArticle
      return { article }
    }
  },
  data() {
    return {
      title: 'Blog Colivme - Article',
      description: "Détails de l'article"
    }
  },
  created() {
    const name = this.article.title
    this.title = this.title + ' ' + name
    this.description = this.description + ' ' + name
  },
  head() {
    return {
      title: this.title,
      meta: [{ hid: 'description', name: 'description', content: this.description }]
    }
  }
}
</script>

<style></style>
