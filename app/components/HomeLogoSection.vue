<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { homeLogoItems } from '~/data/homelogoitems';
const modules = [Navigation, Autoplay];


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
        <SwiperSlide v-for="(item, index) in homeLogoItems" :key="index">
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
.swiper {
  width: 100%;
  height: 100%;
  display: block;
}

:deep(.swiper-wrapper) {
  display: flex;
  align-items: center;
}
</style>