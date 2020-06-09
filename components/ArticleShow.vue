<template>
  <div class="my-8">
    <div class="relative w-full mb-4">
      <img :src="article.image.url" :alt="article.title" class="lazyload" />
      <div class="absolute bottom-0 left-0 bg-opacity-50 bg-blue-800 pt-2 pb-1">
        <span class="text-white mx-4 capitalize">
          {{ article.image.name }}
        </span>
      </div>
    </div>

    <section id="article-content" class="divide-y divide-gray-400 mx-2">
      <div class="flex flex-col overflow-hidden">
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <!-- Article categories -->
            <p class="flex justify-end text-sm leading-5 font-medium text-indigo-600">
              <nuxt-link v-for="category in article.categories" :key="category.id" :to="'/categories/' + category.slug">
                <span class="mr-2 inline-flex items-center px-4 py-2 text-sm font-medium leading-5 bg-green-500 text-white">
                  {{ category.name }}
                </span>
              </nuxt-link>
            </p>

            <!-- Article meta data -->
            <nuxt-link class="block" :to="'/articles/' + article.slug">
              <h3 class="text-xl leading-7 font-semibold text-gray-900">
                {{ article.title }}
              </h3>
            </nuxt-link>
          </div>

          <!-- Article author -->
          <div class="mt-6 flex items-center">
            <!-- Author's avatar -->
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full lazyload" :src="article.author.avatar.url" :alt="article.author.full_name" />
            </div>

            <!-- Publishing context -->
            <div class="ml-3">
              <p class="text-sm leading-5 font-medium text-gray-900">
                {{ article.author.full_name }}
              </p>
              <div class="flex text-sm leading-5 text-gray-500">
                <span class="mr-1">
                  Publié le
                </span>
                <time :datetime="article.published_at">
                  {{ date }}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="whitespace-pre-line text-gray-700 text-base break-normal py-4 leading-loose lazyload" v-html="$md.render(article.content)"></div>
    </section>

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
  },
  data() {
    return { date: '' }
  },
  created() {
    const date = new Date(this.article.published_at)
    this.date = date.toLocaleDateString('fr-FR')
  }
}
</script>

<style></style>
