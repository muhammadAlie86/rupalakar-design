<template>
  <header
    class="sticky top-0 z-50 w-full
           bg-brand-background/90 backdrop-blur-md
           border-b border-orange-200"
  >
    <UContainer class="flex items-center justify-between py-4">

      <!-- LOGO -->
      <AppLogo />

      <!-- DESKTOP NAV -->
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="font-raleway text-sm font-bold uppercase
                 hover:text-brand-orange"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- MOBILE BUTTON -->
      <UButton
        icon="i-heroicons-bars-3-20-solid"
        variant="ghost"
        class="md:hidden"
        @click="isOpen = true"
      />
    </UContainer>
  </header>

  <!-- MOBILE MENU -->
  <USlideover v-if="isOpen" v-model="isOpen" class="md:hidden">
    <UCard class="flex flex-col flex-1 bg-brand-background">
      <template #header>
        <div class="flex items-center justify-between">
          <AppLogo />
          <UButton
            icon="i-heroicons-x-mark-20-solid"
            variant="ghost"
            @click="isOpen = false"
          />
        </div>
      </template>

      <nav class="flex flex-col py-6">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="py-4 text-lg font-bold hover:text-brand-orange"
          @click="isOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </UCard>
  </USlideover>
</template>

<script setup>
const isOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Service', to: '/service' },
  { label: 'Portfolio', to: '/portfolio' }
]
</script>
