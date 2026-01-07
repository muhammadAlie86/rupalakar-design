<template>
  <div class="w-full min-h-screen flex flex-col bg-brand-background overflow-x-hidden no-scrollbar">
    
    <Navbar class="flex-shrink-0" />

    <main class="flex-1">
      <NuxtPage />
    </main>

    <Footer class="flex-shrink-0" />
    
  </div>
</template>

<script setup>
// Pastikan variabel status menu didefinisikan jika Navbar mengandalkannya
const isOpen = ref(false) 
</script>

<style>
/* Reset global untuk menghilangkan scrollbar di semua browser */
html {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
    scroll-behavior: smooth;
}

html::-webkit-scrollbar,
.no-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}
</style>