<template>
  <div class="relative w-full group">
    <swiper-container
      ref="swiperRef"
      class="w-full overflow-hidden"
      :slides-per-view="1"
      :loop="true"
      init="false"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative w-full aspect-video max-w-[1920px]">
      <video
        v-if="isVideo(slide)"
        :src="slide"
        class="w-full h-full object-contain"
        autoplay
        :muted="globalMuted"
        loop
        playsinline
        preload="auto"
      ></video>
    </div>
      </swiper-slide>
    </swiper-container>

    <button 
      @click="toggleMute"
      class="absolute top-4 right-4 z-40 bg-black/40 hover:bg-black/60 backdrop-blur-md p-3 rounded-full text-white transition-all active:scale-90"
    >
      <div v-if="globalMuted" class="flex items-center gap-2 px-1">
        <span class="text-xs font-bold uppercase tracking-widest">Unmute</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
      </div>
      <div v-else class="flex items-center gap-2 px-1">
        <span class="text-xs font-bold uppercase tracking-widest">Mute</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
      </div>
    </button>
    
    <div class="swiper-pagination-custom absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { register } from 'swiper/element/bundle'
register()

defineProps<{ slides: string[] }>()
const swiperRef = ref<any>(null)
const globalMuted = ref(true) // Default harus true agar autoplay jalan

const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src)

// Fungsi untuk toggle suara
const toggleMute = () => {
  globalMuted.value = !globalMuted.value
  
  // Terapkan langsung ke semua video yang ada di DOM agar sinkron
  const allVideos = swiperRef.value.querySelectorAll('video')
  allVideos.forEach((v: HTMLVideoElement) => {
    v.muted = globalMuted.value
  })
}

onMounted(() => {
  const swiperEl = swiperRef.value
  
  const swiperParams = {
    pagination: {
      el: '.swiper-pagination-custom',
      clickable: true,
      renderBullet: (_: any, className: string) => {
        return `<span class="${className} w-2.5 h-2.5 rounded-full bg-white/50 cursor-pointer transition-all"></span>`
      },
    },
    on: {
      slideChangeTransitionEnd: (swiper: any) => {
        const allVideos = swiperEl.querySelectorAll('video')
        allVideos.forEach((v: HTMLVideoElement) => v.pause())

        const activeSlide = swiper.slides[swiper.activeIndex]
        const video = activeSlide.querySelector('video')
        if (video) {
          // Tetap gunakan status globalMuted agar jika user sudah unmute, 
          // slide berikutnya otomatis bersuara
          video.muted = globalMuted.value 
          video.play()
        }
      }
    }
  }

  Object.assign(swiperEl, swiperParams)
  swiperEl.initialize()
})
</script>