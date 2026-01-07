<script setup>
definePageMeta({ layout: 'home-layout' })

import HomeSection from '~/components/HomeSection.vue';
</script>

<template>
  <div>

    <section id="home" class="min-h-screen  bg-brand-background flex items-center justify-center  text-center">
      <HomeSection/>
    </section>
  </div>
</template>

