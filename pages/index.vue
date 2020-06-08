<template>
  <section id="articles-index">
    <article-collection-grid :articles="articles" />
  </section>
</template>

<script>
import ArticleCollectionGrid from '~/components/ArticleCollectionGrid.vue'

export default {
  components: {
    ArticleCollectionGrid
  },
  async asyncData({ $axios }) {
    const {
      defaults: { baseURL }
    } = $axios
    const articles = await $axios.$get(baseURL + '/articles?_sort=id:ASC')
    const categories = await $axios.$get(baseURL + '/categories?_sort=id:ASC')
    return { articles, categories }
  },
  data() {
    return {
      title: 'Blog Colivme',
      description: 'Colivme est la 1ère plateforme de référencement des espaces de coliving en France.'
    }
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
