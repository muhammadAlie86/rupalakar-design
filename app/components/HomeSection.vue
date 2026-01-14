<template>
  <section class="bg-[#F9EBEA] font-raleway overflow-x-hidden">

    <div class="mx-auto max-w-6xl px-6 pt-16"> 
      <HomeCarouselSection :slides="heroSlides" />
      <HomeLogoSection/>

      
      <div class="mt-8 mb-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
  
      <div class="text-left" data-aos="fade-up"> <h1 class="text-3xl md:text-5xl font-extrabold leading-tight text-black uppercase">
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

      <div class="flex justify-center lg:justify-end" data-aos="fade-up" data-aos-delay="200">
      <div class="relative flex h-64 w-64 md:h-80 md:w-80 items-center justify-center   overflow-hidden">
        
          <img src="/rupalakar.gif" alt="Deskripsi Visual" class="h-full w-full object-cover">
        
        <div class="absolute inset-0 pointer-events-none"></div>
      </div>
    </div>
    </div>
    </div>

    <div data-aos="fade-up" data-aos-delay="100">
      <WhySection />
    </div>

    <div data-aos="fade-up" data-aos-delay="200">
      <HomeWeDoSection />
    </div>

    <div data-aos="fade-up" data-aos-delay="300">
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
    duration: 1000, // Kecepatan animasi (1 detik)
    once: true,     // Set ke true jika ingin animasi hanya jalan 1x
    mirror: true,    // Animasi akan jalan lagi jika kita scroll balik ke atas
    offset: 120,     // Jarak (px) dari elemen asli untuk trigger animasi
  })
})
</script>