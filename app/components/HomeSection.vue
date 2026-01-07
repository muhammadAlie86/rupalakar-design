<template>
  <section class="bg-brand-background font-raleway overflow-x-hidden">

    <div class="mx-auto max-w-6xl px-6 pt-16"> 
      <HomeCarouselSection :slides="heroSlides" />

      <div class="mt-12 mb-16 px-12" data-aos="fade-up"> 
        <div class="relative group">
          <UCarousel
            :items="logos"
            :ui="{ 
              wrapper: 'w-full', 
              container: 'gap-4',
              item: 'basis-1/2 md:basis-1/4 lg:basis-1/5' 
            }"
            arrows
          >
            <template #default="{ item }">
              <div class="logo-card h-20 w-full flex items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm opacity-0">
                <span class="text-gray-600 font-medium">{{ item }}</span>
              </div>
            </template>

            <template #prev="{ onClick, disabled }">
              <button v-if="!disabled" @click="onClick" class="absolute -left-10 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white shadow-md border border-gray-100">
                <UIcon name="i-heroicons-chevron-left-20-solid" class="w-6 h-6 text-gray-900" />
              </button>
            </template>

            <template #next="{ onClick, disabled }">
              <button v-if="!disabled" @click="onClick" class="absolute -right-10 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white shadow-md border border-gray-100">
                <UIcon name="i-heroicons-chevron-right-20-solid" class="w-6 h-6 text-gray-900" />
              </button>
            </template>
          </UCarousel>
        </div>
      </div>

      <div class="mt-16 mb-24 grid items-center gap-10 lg:grid-cols-2">
        <div class="text-left" data-aos="fade-right">
          <h1 class="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
            We think in Visual<br />
            We <span class="text-[#D34010]">Design for Impact</span>
          </h1>
          <p class="mt-4 md:text-xl max-w-md text-base text-gray-800 font-medium">
              Rupalakar adalah studio pemikir visual.
              Kami membantu brand memahami dirinya
              sebelum berbicara ke dunia.
          </p>
          <UButton size="lg" class="mt-6 bg-[#D34010] text-white">Mulai Percakapan</UButton>
        </div>

        <div class="mt-8 lg:mt-0 flex justify-center lg:justify-end" data-aos="fade-left">
          <div class="flex h-64 w-64 md:h-72 md:w-72 items-center justify-center rounded-xl bg-gray-900 text-white shadow-xl">
            GIF / Visual
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

const heroSlides = [
  'https://picsum.photos/1600/900?random=1',
  'https://picsum.photos/1600/900?random=2',
  'https://picsum.photos/1600/900?random=3'
]
const logos = ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5']

onMounted(() => {
  AOS.init({
    duration: 1000, // Kecepatan animasi (1 detik)
    once: false,     // Set ke true jika ingin animasi hanya jalan 1x
    mirror: true,    // Animasi akan jalan lagi jika kita scroll balik ke atas
    offset: 120,     // Jarak (px) dari elemen asli untuk trigger animasi
  })
})
</script>