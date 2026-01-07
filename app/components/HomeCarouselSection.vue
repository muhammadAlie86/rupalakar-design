<template>
  <div class="w-full relative">
    <!-- Swiper Container -->
    <swiper-container
      ref="swiperRef"
      class="w-full overflow-hidden shadow-2xl"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ el: '.swiper-pagination-custom', clickable: true }"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative h-[450px] md:h-[650px] w-full overflow-hidden bg-gray-100">
          <img
            :src="slide"
            class="h-full w-full object-cover"
            draggable="false"
            loading="eager"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 pointer-events-none"></div>
        </div>
      </swiper-slide>
    </swiper-container>

    <!-- Dots -->
    <div class="swiper-pagination-custom absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { register } from 'swiper/element/bundle';
register();

const props = defineProps<{
  slides: string[];
}>();

const swiperRef = ref<any>(null);

onMounted(async () => {
  await nextTick(); // pastikan slide sudah render
  swiperRef.value?.initialize();

  // Custom renderBullet
  const swiper = swiperRef.value?.swiper;
  if (swiper?.params?.pagination?.el) {
    swiper.params.pagination.renderBullet = (index: number, className: string) => {
      return `<span class="${className} w-2.5 h-2.5 bg-white/50 rounded-full cursor-pointer transition-all hover:bg-white inline-block"></span>`;
    };
    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  }
});
</script>

<style scoped>
:deep(.swiper-pagination-custom) {
  display: flex !important;
  gap: 12px;
}
:deep(.swiper-pagination-bullet-active) {
  background-color: white !important;
  transform: scale(1.3);
  opacity: 1 !important;
  transition: transform 0.3s;
}
</style>
