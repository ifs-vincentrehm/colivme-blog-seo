<template>
  <div>
    <the-navbar />
    <nuxt id="content" class="container mx-auto" />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'

export default {
  components: {
    TheNavbar
  }
}
</script>

<style>
html {
  font-family: 'Inter';
  font-display: swap;
}
</style>
