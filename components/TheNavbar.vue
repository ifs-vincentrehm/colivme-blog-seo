<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-20">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button class="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-blue-700 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false" @click="isOpen = !isOpen">
            <!-- Icon when menu is closed. -->
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg :class="isOpen ? 'hidden' : 'block'" class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open. -->
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg :class="isOpen ? 'block' : 'hidden'" class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navbar links -->
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
          <!-- Colivme logo -->
          <nuxt-link to="/" class="flex-shrink-0 flex flex-none lg:flex-1 items-center">
            <img class="h-12 w-auto lazyload" :data-src="require('~/assets/img/logos/logo-colivme-web.svg')" alt="Colivme logo" />
          </nuxt-link>

          <div class="hidden sm:ml-6 sm:flex">
            <nuxt-link to="/" class="navbar-first-link focus:outline-none focus:border-blue-700">
              {{ links[0] }}
            </nuxt-link>

            <a v-for="(link, index) in filteredLinks" :key="index" :href="link.url" class="navbar-second-links hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade" enter-active-class="duration-200 ease-out" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <!--
      Mobile menu, toggle classes based on menu state.
      Menu open: "block", Menu closed: "hidden"
      -->
      <div :class="isOpen ? 'block' : 'hidden sm:hidden'">
        <div class="pt-2 pb-4">
          <nuxt-link to="/" class="navbar-mobile-first-link focus:outline-none focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700">
            {{ links[0] }}
          </nuxt-link>
          <a v-for="(link, index) in filteredLinks" :key="index" :href="link.url" class="navbar-mobile-second-links hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300">
            {{ link.name }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: ['Blog', { name: 'Nos logements', url: 'https://colivme.com/coliving/france' }, { name: 'Le coliving ?', url: 'https://colivme.com/qu-est-ce-que-le-coliving' }],
    isOpen: false
  }),
  computed: {
    filteredLinks() {
      return this.links.filter((link) => link !== 'Blog')
    }
  }
}
</script>

<style>
.navbar-first-link {
  @apply inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-lg font-medium leading-5 text-gray-900 transition duration-150 ease-in-out;
}

.navbar-second-links {
  @apply ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-lg font-medium leading-5 text-gray-500 transition duration-150 ease-in-out;
}

.navbar-mobile-first-link {
  @apply block pl-3 pr-4 py-2 border-l-4 border-blue-500 text-base font-medium text-blue-700 bg-blue-50 transition duration-150 ease-in-out;
}

.navbar-mobile-second-links {
  @apply mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 transition duration-150 ease-in-out;
}
</style>
