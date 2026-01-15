<template>
<div class="w-full relative group mb-16 px-4 md:px-0">
    <swiper-container
      ref="swiperRef"
      init="false"
      class="w-full overflow-hidden shadow-2xl"
      :slides-per-view="1"
      :loop="true"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative h-[450px] md:h-[650px] w-full overflow-hidden bg-gray-100">
          <img
            :src="slide"
            class="h-full w-full object-cover transition-transform duration-[5s] group-hover:scale-105"
            draggable="false"
            loading="eager"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 pointer-events-none"></div>
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="swiper-pagination-custom absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { register } from 'swiper/element/bundle';

// Daftarkan Custom Element Swiper
register();

const props = defineProps<{
  slides: string[];
}>();

const swiperRef = ref<any>(null);

onMounted(async () => {
  await nextTick();
  
  const swiperEl = swiperRef.value;
  if (!swiperEl) return;

  const swiperParams = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-custom',
      clickable: true,
      renderBullet: (index: number, className: string) => {
        return `<span class="${className}" style="width: 10px; height: 10px; background: rgba(255,255,255,0.5); border-radius: 50%; cursor: pointer; display: inline-block; transition: all 0.3s"></span>`;
      },
    },
    // Kecepatan transisi antar slide (dalam ms)
    speed: 1000,
  };

  // Masukkan parameter dan inisialisasi manual
  Object.assign(swiperEl, swiperParams);
  swiperEl.initialize();
});
</script>

<style scoped>
:deep(.swiper-pagination-bullet-active) {
  background-color: #D34010 !important; /* Gunakan warna brand orange kamu */
  transform: scale(1.4);
  opacity: 1 !important;
  width: 30px !important; /* Membuat dot menjadi lonjong saat aktif */
  border-radius: 5px !important;
}

.swiper-pagination-custom {
  z-index: 40;
}
</style>