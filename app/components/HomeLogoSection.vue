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
  <section class="bg-[#F9EBEA] w-full overflow-hidden">
    
    <div class="w-full relative"> 
      
      <Swiper
        :modules="[Navigation, Autoplay]"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :space-between="10" 
        :breakpoints="{
          '320': { slidesPerView: 2 },
          '640': { slidesPerView: 4 },
          '1024': { slidesPerView: 7 } 
        }"
        class="w-full"
      >
        <SwiperSlide v-for="(item, index) in clients" :key="index">
          <div class="h-24 md:h-32 w-full flex items-center justify-center">
            <img 
              :src="item.src" 
              :alt="item.name"
              class="max-w-full max-h-full object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  </section>
</template>

<style scoped>
/* Tambahkan ini untuk memastikan Safari merender lebar dengan benar */
.swiper {
  width: 100%;
  height: 100%;
  display: block; /* Membantu Safari menghitung box model */
}

:deep(.swiper-wrapper) {
  display: flex;
  align-items: center;
}
</style>