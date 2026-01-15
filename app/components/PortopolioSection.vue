<template>
  <section class="bg-[#F9EBEA] relative overflow-hidden min-h-screen">
    
    <div class="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
      <h1 class="text-[8rem] md:text-[18rem] lg:text-[rem] font-black text-[#D34010] leading-none tracking-tighter rotate-90 whitespace-nowrap">
        PORTPOLIO
      </h1>
    </div>

    <div class="relative z-500 mx-auto px-4 md:px-0">
      <PortopolioCarouselSection :slides="slides" />
      
      <div class="mx-auto mt-12 md:mt-24">
        <PortopolioGridSection />
      </div>
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
