<template>
  <div class="my-8">
    <div class="relative w-full">
      <img :src="article.image.url" :alt="article.title" class="lazyload" />
      <div class="absolute bottom-0 left-0 bg-opacity-50 bg-blue-800 pt-2 pb-1">
        <span class="text-white mx-4 capitalize">
          {{ article.image.name }}
        </span>
      </div>
    </div>
    <div class="text-gray-700 text-base break-normal my-4 leading-loose">
      {{ article.content }}
    </div>
    <!-- <div class="flex justify-center items-end my-4">
      <span v-for="category in article.categories" :key="category.id" class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 m-1 py-1 px-2">
        <article-category-pill :name="category.name" :slug="category.slug" />
      </span>
    </div> -->
  </div>
</template>

<script>
export default {
  //   components: {
  //     ArticleCategoryPill
  //   },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
#article-image-title {
  background-color: #233a49;
}
</style>
