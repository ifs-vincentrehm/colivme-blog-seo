<template>
  <div class="relative bg-white pt-4 pb-4 px-4 sm:px-6 lg:pt-8 lg:pb-8 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto mt-4 sm:mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
      <article-card v-for="article in articles" :key="article.id" :article="article" />
    </div>
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'

export default {
  components: {
    ArticleCard
  },
  async asyncData({ $axios, params }) {
    const slug = params.slug
    const {
      defaults: { baseURL }
    } = $axios
    const categoryFilter = await $axios.$get(baseURL + '/categories?slug=' + slug)
    const category = categoryFilter[0]
    const articles = await $axios.$get(baseURL + '/articles?_sort=id:ASC&categories.id=' + category.id)
    // const { articles } = category
    return { articles, category }
  },
  data() {
    return {
      title: 'Blog Colivme - Catégorie',
      description: 'Détails de la catégorie'
    }
  },
  created() {
    const name = this.category.name
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
