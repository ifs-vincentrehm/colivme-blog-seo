<template>
  <div>
    <the-navbar id="navbar" />
    <home-header-cta />
    <nuxt id="content" class="container mx-auto" />
    <the-footer id="footer" />
    <cookie-control locale="fr" />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'
import HomeHeaderCta from '~/components/HomeHeaderCta.vue'

export default {
  components: {
    TheNavbar,
    TheFooter,
    HomeHeaderCta
  }
}
</script>

<style>
html {
  font-family: 'Inter';
  font-display: swap;
}
</style>
