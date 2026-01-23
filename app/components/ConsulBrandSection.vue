<script setup>

import { clientItems } from '~/data/clientitems';
</script>

<template>
  <section class="py-16 bg-[#F9EBEA]"> <div class="container mx-auto px-6">
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 items-center justify-items-center">
        
        <div 
          v-for="logo in clientItems" 
          :key="logo.name"
          class="w-full max-w-[180px] lg:max-w-[220px] filter  transition-all duration-500 hover:opacity-100"
        >
          <img 
            :src="logo.src" 
            :alt="logo.name"
            class="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

      </div>
    </div>
  </section>
</template>