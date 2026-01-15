<template>
  <section class="mx-auto max-w-6xl px-6> mb-6 " >
    <div class="max-auto max-w-7xl ">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div 
          v-for="(item, index) in portfolioItems" 
          :key="index"
          class="bg-[#F9EBEA] selection:bg-[#D34010] border border-black flex flex-col group transition-all duration-300 hover:shadow-2xl"
        >
          <div class="relative aspect-square bg-black overflow-hidden">
            <img 
              v-if="item.image" 
              :src="item.image" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#D34010] rounded-full blur-xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity"></div>
          </div>

          <div class="p-8 flex flex-col flex-grow">
            <h3 class="text-2xl font-bold leading-tight mb-4">
              <span class="text-[#D34010]"> {{ item.title }}</span>
            </h3>
            
          <div class="p-6">
            <p class="text-black text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
              {{ item.description }}
            </p>
          </div>
            <div class="flex items-center justify-between mt-auto">
              <UButton
                to="/contact"
                size="lg"
                class="bg-[#D34010] hover:bg-[#b0350d] text-white px-6 py-3 rounded-none font-normal transition-transform active:scale-95"
              >
                Mulai Percakapan
              </UButton>

              <ULink
                :to="`/portopolio/${item.slug}`"
                class="text-[#D34010] font-medium text-sm uppercase underline decoration-2 underline-offset-4 hover:text-black transition-colors"
              >
                Read More
              </ULink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioItems } from '~/data/portfolioItems';
</script>