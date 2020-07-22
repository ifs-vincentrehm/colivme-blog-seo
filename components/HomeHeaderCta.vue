<template>
  <section id="header" class="relative">
    <a href="https://colivme.com/coliving/france">
      <picture class="relative flex justify-center">
        <source class="lazyload" :srcset="desktopPath" alt="Découvrez nos logements en coliving" media="(min-width: 640px)" />
        <img class="lazyload" :src="mobilePlaceHolder" :srcset="mobilePath" alt="Découvrez nos logements en coliving" />
      </picture>

      <h1 class="text-white absolute inset-0 h-full uppercase">
        <span class="flex h-3/4 items-center justify-center text-center text-base md:text-2xl px-16 sm:px-8 leading-normal"> Pourquoi louer un studio petit & cher ?<br />découvrez le coliving </span>
      </h1>

      <h2 class="flex justify-center">
        <span class="absolute bottom-0 mb-8 sm:mb-4 inline-flex items-center px-4 py-2 rounded-full text-sm sm:text-xl font-medium leading-5 bg-green-500 text-white">
          Réservez votre logement
        </span>
      </h2>
    </a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      desktopPath: require('~/assets/img/header-desktop.jpg').srcSet,
      mobilePath: require('~/assets/img/header-mobile.jpg').srcSet,
      desktopPlaceHolder: require('~/assets/img/header-desktop.jpg').placeholder,
      mobilePlaceHolder: require('~/assets/img/header-mobile.jpg').placeholder
    }
  },
  computed: {
    headerDesktopSrcSet() {
      const urls = this.desktopPath.split(',')
      const result = this.processSrcSet(urls)
      return result
    },
    headerMobileSrcSet() {
      const urls = this.mobilePath.split(',')
      const result = this.processSrcSet(urls)
      return result
    }
  },
  methods: {
    processSrcSet(urls) {
      const results = []
      for (let index = 0; index < urls.length; index++) {
        const element = urls[index]
        results.push(element)
      }
      const result = results.join(', ')
      return result
    }
  }
}
</script>
