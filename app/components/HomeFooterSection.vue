<template>
  <section class="bg-brand-cream font-raleway pt-12 md:pt-20 pb-0 overflow-hidden">
    <div class="max-w-6xl mx-auto flex flex-col">
      
      <div class="space-y-6 md:space-y-8 text-left w-full" >
        <h1  data-aos="fade-up" class="text-3xl md:text-5xl leading-tight text-black font-semibold leading-[1.1] tracking-tighter text-black w-full">
          Kami bukan vendor.<br />
          tapi
          <span class="text-[#D34010]"> Kami partner berpikir visualmu.</span>
        </h1>
        
        
        <p  data-aos="fade-up" class="mt-8 text-lg md:text-2xl text-black leading-relaxed max-w-2xl font-normal text-justify">
          Kami hadir bukan untuk "menghasilkan desain", 
          tapi untuk membantu brand memahami dirinya dan berbicara dengan cara yang lebih jernih.
        </p>
      </div>
      <div  data-aos="fade-up" class="flex justify-center w-full leading-none items-end">
        <img 
          src="/img_part.png" 
          alt="Visual Partner Team" class="w-full h-auto max-w-full md:max-w-4xl block align-bottom"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'


onMounted(() => {
  AOS.init({
    duration: 1000, 
    once: true, 
    offset: 100, 
    mirror: false,
    disableMutationObserver: false,anchorPlacement: 'top-bottom',
  })
})
window.addEventListener('load', () => {
    AOS.refresh()
  })

  // 3. Tambahan untuk Chrome: Refresh jika ada perubahan DOM (seperti Swiper)
  setTimeout(() => {
    AOS.refresh()
  }, 500)
</script>
<style scoped>
/* Memastikan font-weight 900 (Black) dari Raleway aktif */
h1 {
  font-weight: 900;
}
</style>