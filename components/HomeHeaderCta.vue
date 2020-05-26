<template>
  <section id="header" class="relative">
    <picture class="relative flex justify-center">
      <source :data-srcset="require('~/assets/img/header-desktop.jpg').srcSet" media="(min-width: 640px)" />
      <img class="lazyload" :data-srcset="require('~/assets/img/header-mobile.jpg').srcSet" alt="Découvrez nos logements en coliving" />
    </picture>

    <h1 class="text-white absolute inset-0 h-full uppercase">
      <span class="flex h-3/4 items-center justify-center text-center text-base md:text-2xl px-16 sm:px-8 leading-normal"> Pourquoi louer un studio petit & cher ?<br />découvrez le coliving </span>
    </h1>

    <h2 class="flex justify-center">
      <span class="absolute bottom-0 mb-8 sm:mb-4 inline-flex items-center px-4 py-2 rounded-full text-sm sm:text-xl font-medium leading-5 bg-green-500 text-white">
        Réservez votre logement
      </span>
    </h2>
  </section>
</template>
