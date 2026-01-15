<template>
  <main v-if="portfolioItem" class="bg-[#F9EBEA] min-h-screen text-white">
    <section class="w-full bg-[#F9EBEA] overflow-hidden border-b border-white/10">
      <img 
        :src="portfolioItem.image" 
        :alt="portfolioItem.title" 
        class="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] object-cover"
      />
    </section>

    <div class="container mx-auto px-2 py-6 md:py-10 text-left">
      <h1 class="text-4xl md:text-6xl font-medium tracking-tighter text-[#D34010] mb-6">
        {{ portfolioItem.title }}
      </h1>
      
      <div class="text-2xl md:text-3xl font-normal tracking-tighter text-[#D34010] mb-6">
        <p class="text-lg md:text-xl text-black leading-relaxed font-normal">
          "{{ portfolioItem.description }}"
        </p>
      </div>

      <NuxtLink 
        to="/portopolio" 
        class="inline-flex items-center mt-12 px-8 py-3 border border-[#D34010] text-[#D34010] uppercase font-normal tracking-widest hover:bg-[#D34010] hover:text-black transition-all duration-300 active:scale-95"
      >
        <span class="mr-2">&larr;</span> Back to Portpolio
      </NuxtLink>
    </div>
  </main>

  <div v-else class="h-screen flex items-center justify-center bg-[#0F172A] text-center px-6">
    <div>
      <h1 class="text-3xl font-bold text-red-500 mb-6 uppercase tracking-tighter italic">Portfolio item not found.</h1>
      <NuxtLink to="/portopolio" class="text-white underline decoration-[#D34010] underline-offset-8 font-bold">
        Back to portopolio
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { portfolioItems } from '~/data/portfolioItems';

const route = useRoute();
const slug = route.params.slug;

const portfolioItem = portfolioItems.find(item => item.slug === slug);

// SEO Meta
useSeoMeta({
  title: () => `${portfolioItem?.title || 'Project'} - My Portfolio`,
  ogTitle: () => portfolioItem?.title,
  description: () => portfolioItem?.description,
})
</script>

<style scoped>
/* Transisi halus saat gambar dimuat */
img {
  animation: fadeIn 1.2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>