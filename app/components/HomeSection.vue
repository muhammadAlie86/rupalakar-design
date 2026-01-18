<template>
  <section class="bg-[#F9EBEA] font-raleway overflow-x-hidden">

    <div class="mx-auto">

      <HomeCarouselSection :slides="heroSlides" />
      
      <HomeLogoSection/>
    </div>
    <div class="mx-auto max-w-6xl pt-2"> 

      
      <div class="mt-8 mb-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
  
      <div class="text-left px-6" data-aos="fade-up"> <h1 class="text-3xl md:text-5xl font-extrabold leading-tight text-black">
          We think in Visual<br />
          We <span class="text-[#D34010]">Design for Impact</span>
        </h1>
        
        <p class="mt-6 text-lg md:text-2xl text-black leading-relaxed max-w-2xl font-normal">
          Rupalakar adalah studio pemikir visual.
          Kami membantu brand memahami dirinya sebelum berbicara ke dunia.
        </p>

        <UButton 
        to="/contact"
          size="lg" 
          class="bg-[#D34010] hover:bg-[#b0350d] text-white mt-8 mb-8 md:mb-24 font-bold uppercase tracking-wider px-10 py-4 rounded-none transition-all active:scale-95"
        >
          Mulai Percakapan
        </UButton>
      </div>

      <div class="flex justify-center lg:justify-end" data-aos="fade-up">
      <div class="relative flex h-64 w-64 md:h-80 md:w-80 aspect-square items-center justify-center   overflow-hidden">
        
          <img src="/rupalakar.gif" alt="Deskripsi Visual" class="h-full w-full object-cover">
        
        <div class="absolute inset-0 pointer-events-none"></div>
      </div>
    </div>
    </div>
    </div>

    <div data-aos="fade-up">
      <WhySection />
    </div>

    <div data-aos="fade-up" >
      <HomeWeDoSection />
    </div>
    
    <div data-aos="fade-up"  class=" px-6 mx-auto max-w-6xl pt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
      <p class="text-xl md:text-2xl text-black leading-relaxed font-normal text-justify hyphens-auto">
          Kami tidak memulai dari warna, bentuk, atau moodboard. Kami memulai dari kesadaran: siapa kamu, apa yang kamu rasakan, apa yang ingin kamu ubah. Dari sana, visual berkembang secara natural.
      </p>
    </div>
    <div class=" px-6" >
      <HomeFooterSection />
    </div>

  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HomeLogoSection from './HomeLogoSection.vue'

const heroSlides = [
  "/ic_intro.mp4"
]


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
<style>
html, body {
  /* Mencegah overscroll bounce yang mengganggu AOS */
  overscroll-behavior-y: none; 
  /* Memastikan scroll halus tapi tetap responsif */
  scroll-behavior: smooth;
}

/* Memastikan elemen dengan skala besar tidak merusak area scroll */
.will-change-transform {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>