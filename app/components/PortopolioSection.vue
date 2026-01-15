<template>
  <section class="bg-[#F9EBEA]">
    <div class="mx-auto">

      
      <PortopolioCarouselSection :slides="slides" />
      <PortopolioGridSection />

      
    </div>
  </section>
</template>

<script setup>
const slides = [
  'https://picsum.photos/1600/600?random=1',
  'https://picsum.photos/1600/600?random=2',
  'https://picsum.photos/1600/600?random=3'
]

</script>
