<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <!-- Article image -->
    <nuxt-link class="flex-shrink-0" :to="'/articles/' + article.slug">
      <img class="h-48 w-full object-cover" :src="article.image.url" :alt="article.title" />
    </nuxt-link>

    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <!-- Article categories -->
        <p class="text-sm leading-5 font-medium text-indigo-600">
          <nuxt-link v-for="category in article.categories" :key="category.id" :to="'/categories/' + category.slug">
            <span class="mr-2 inline-flex items-center px-4 py-2 text-sm font-medium leading-5 bg-green-500 text-white">
              {{ category.name }}
            </span>
          </nuxt-link>
        </p>

        <!-- Article meta data -->
        <nuxt-link class="block" :to="'/articles/' + article.slug">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {{ article.title }}
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500 truncate">
            {{ article.content }}
          </p>
        </nuxt-link>
      </div>

      <!-- Article author -->
      <div class="mt-6 flex items-center">
        <!-- Author's avatar -->
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" :src="article.author.avatar.url" :alt="article.author.full_name" />
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
</template>

<script>
export default {
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
