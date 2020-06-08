<template>
  <li>
    <a :href="url" class="text-base leading-6 text-gray-700 hover:text-gray-700">{{ referenceCity.name }}, {{ referenceCity.country }}</a>
  </li>
</template>

<script>
export default {
  props: {
    referenceCity: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      url: ''
    }
  },
  created() {
    const url = 'https://colivme.com/coliving/' + this.referenceCity.countryUrlKey + '/' + this.referenceCity.nameUrlKey
    this.url = url
  }
}
</script>

<style></style>
