<template>
  <div>
    <the-navbar id="navbar" />
    <nuxt id="content" class="container mx-auto" />
    <the-footer id="footer" />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style>
html {
  font-family: 'Inter';
  font-display: swap;
}
</style>
