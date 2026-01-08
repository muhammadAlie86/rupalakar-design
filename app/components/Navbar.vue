<template>
  <header
  class="sticky top-0 z-50 w-full
         bg-brand-background/90 backdrop-blur-md
         border-b border-orange-200"
         >
  <UContainer class="flex items-center justify-between py-4 px-4 md:px-8 lg:px-12">


      <!-- LOGO -->
      <div class="w-[150px] h-12 flex-shrink-0">
      <img 
        src="/assets/images/ic_logo.png" 
        alt="R" 
        class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
      />
    </div>

      <!-- DESKTOP NAV -->
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="font-raleway text-sm font-bold uppercase transition-colors duration-300 hover:text-[#D34010]"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- MOBILE BUTTON -->
      <UButton
  :icon="isOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-20-solid'"
  variant="ghost"
  color="gray"
  class="md:hidden z-[60]" 
  aria-label="Toggle Menu"
  @click="isOpen = !isOpen"
/>
    </UContainer>
  </header>

  <!-- MOBILE MENU -->
  <USlideover v-if="isOpen" v-model="isOpen" class="md:hidden">
    <UCard class="flex flex-col flex-1 bg-[#F9EBEA]'">

      <nav class="flex flex-col py-6">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="py-4 text-lg font-bold transition-colors duration-300 hover:text-[#D34010]"
          @click="isOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </UCard>
  </USlideover>
</template>

<script setup>
  import { ref } from 'vue' 
const isOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Service', to: '/service' },
  { label: 'Portopolio', to: '/portopolio' },
  { label: 'Contact', to: '/contact' },
  { label: 'Konsultasi', to: '/consult' }
]
</script>
