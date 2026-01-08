<script setup>
const clients = [
  { name: 'Guppy', src: '/ic_guppy.png' },
  { name: 'Enjoy Jakarta', src: '/ic_jakarta.png' },
  { name: 'BSI', src: '/ic_bsi.png' },
  { name: 'Schott Pharma', src: '/ic_scot.png' },
  { name: 'Honda', src: '/ic_honda.png' },
  { name: 'Pertamina', src: '/ic_pertamina.png' },
  { name: 'Vov', src: '/ic_vov.png' },
]
</script>

<template>
  <section class="py-16 bg-[#F9EBEA]"> <div class="container mx-auto px-6">
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 items-center justify-items-center">
        
        <div 
          v-for="logo in clients" 
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