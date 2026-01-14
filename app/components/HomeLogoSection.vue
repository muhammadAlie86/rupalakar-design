<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

// Import CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation, Autoplay];

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
  <section class="py-16 bg-[#F9EBEA] px-12 md:px-20 overflow-hidden">
    <div class="max-w-7xl mx-auto relative">
      
      <Swiper
        :modules="[Navigation, Autoplay]"
        :navigation="{
          nextEl: '.nav-next',
          prevEl: '.nav-prev',
        }"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :space-between="20"
        :breakpoints="{
          '320': { slidesPerView: 2 },  // HP: 2 Logo
          '640': { slidesPerView: 3 },  // Tablet: 3 Logo
          '1024': { slidesPerView: 6 }  // Desktop: 6 Logo
        }"
        class="!overflow-visible"
      >
        <SwiperSlide v-for="(item, index) in clients" :key="index">
          <div class="bg-white rounded-2xl h-24 md:h-32 w-full flex items-center justify-center p-4  border-white transition-transform hover:scale-105 duration-300">
            <img 
              :src="item.src" 
              :alt="item.name"
              class="max-w-full max-h-full object-contain transition-all"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <button class="nav-prev absolute left-[-40px] md:left-[-80px] top-1/2 -translate-y-1/2 z-50 text-gray-300 hover:text-[#D34010] transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button class="nav-next absolute right-[-40px] md:right-[-80px] top-1/2 -translate-y-1/2 z-50 text-gray-300 hover:text-[#D34010] transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  </section>
</template>

<style scoped>
:deep(.swiper) {
  overflow: visible !important;
}
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  display: none !important;
}
</style>