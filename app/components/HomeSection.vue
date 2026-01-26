<template>
  <section class="bg-[#F9EBEA] font-raleway overflow-x-hidden">

    <div class="mx-auto">

      <HomeCarouselSection :slides="homeVideoSlideItems" />
      
      <HomeLogoSection/>
    </div>
    <div class="container mx-auto px-6 py-12 md:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
      
      <div class="text-left order-2 lg:order-1" data-aos="fade-up"> 
        <h1 class="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-black">
          We think in Visual<br />
          We <span class="text-[#D34010]">Design for Impact</span>
        </h1>
        
        <p class="mt-6 text-lg md:text-xl xl:text-2xl text-black leading-relaxed max-w-xl font-normal">
          Rupalakar adalah studio pemikir visual.
          Kami membantu brand memahami dirinya sebelum berbicara ke dunia.
        </p>

        <UButton 
          to="/contact"
          size="lg" 
          class="inline-block bg-[#D34010] hover:bg-[#b0350d] text-lg md:text-lg xl:text-xl text-white mt-10 font-bold uppercase tracking-wider px-10 py-4 rounded-none transition-all active:scale-95"
        >
          Mulai Percakapan
        </UButton>
      </div>

      <div class="flex justify-center lg:justify-end order-1 lg:order-2" data-aos="fade-up">
        <div class="relative h-64 w-64 md:h-96 md:w-96 xl:h-[450px] xl:w-[450px] overflow-hidden shrink-0">
          <img src="/rupalakar.gif" alt="Deskripsi Visual" class="h-full w-full object-cover">
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
     
        
    <div class=" px-6" >
      <HomeFooterSection />
    </div>
    <div 
        class="mt-auto w-full flex justify-center items-end" 
        data-aos="fade-up" 
        data-aos-anchor-placement="top-bottom"
      >
        <img 
          src="/img_part.webp" 
          alt="Visual Partner Team"
          class="w-full h-auto max-w-[1020px] block align-bottom transform-gpu" 
          decoding="sync"
          loading="eager"
          style="backface-visibility: hidden; -webkit-backface-visibility: hidden;"
          @load="onImgLoad"
        />
      </div>

  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HomeLogoSection from './HomeLogoSection.vue'
import { homeVideoSlideItems } from '~/data/homevideoslideitems';


const onImgLoad = () => {
  console.log('Gambar sukses dimuat!')
  if (typeof window !== 'undefined' && window.AOS) {
    window.AOS.refresh()
  }
}

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

  setTimeout(() => {
    AOS.refresh()
  }, 500)
</script>
<style>
img[data-aos] {
  will-change: transform, opacity;
}

.transform-gpu {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
html, body {
  overscroll-behavior-y: none; 
  scroll-behavior: smooth;
}

.will-change-transform {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>