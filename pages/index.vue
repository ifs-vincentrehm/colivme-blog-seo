<template>
  <section id="content">
    <home-header-cta />
    <article-collection-grid :articles="articles" />
  </section>
</template>

<script>
import HomeHeaderCta from '~/components/HomeHeaderCta.vue'
import ArticleCollectionGrid from '~/components/ArticleCollectionGrid.vue'

export default {
  components: {
    HomeHeaderCta,
    ArticleCollectionGrid
  },
  async asyncData({ $axios }) {
    const {
      defaults: { baseURL }
    } = $axios
    const articles = await $axios.$get(baseURL + '/articles?_sort=id:ASC')
    const categories = await $axios.$get(baseURL + '/categories?_sort=id:ASC')
    return { articles, categories }
  }
}
</script>

<style></style>
