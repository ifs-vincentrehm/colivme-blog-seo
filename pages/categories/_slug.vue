<template>
  <div class="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-8 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <div v-for="article in category.articles" :key="article.id" class="flex">
          <article-card :article="articles[article.id - 1]" />
        </div>
      </div>
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
    const articles = await $axios.$get(baseURL + '/articles?_sort=id:ASC')
    const categoryFilter = await $axios.$get(baseURL + '/categories?slug=' + slug)
    const category = categoryFilter[0]
    return { articles, category }
  }
}
</script>

<style></style>
