<<template>
  <div class="relative w-full">

    <swiper-container
      ref="swiperRef"
      class="w-full overflow-hidden shadow-2xl"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ el: '.swiper-pagination-custom', clickable: true }"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
      >
        <div class="relative h-[450px] md:h-[650px] w-full overflow-hidden bg-black">

          <!-- VIDEO -->
          <video
            v-if="isVideo(slide)"
            ref="videos"
            :src="slide"
            class="h-full w-full object-cover"
            muted
            loop
            playsinline
          ></video>

        

          <!-- Overlay -->
          <div class="pointer-events-none absolute inset-0
            bg-gradient-to-t from-black/50 via-transparent to-transparent">
          </div>

        </div>
      </swiper-slide>
    </swiper-container>

    <!-- Pagination -->
    <div
      class="swiper-pagination-custom absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3"
    ></div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { register } from 'swiper/element/bundle'
register()

const props = defineProps<{
  slides: string[]
}>()

const swiperRef = ref<any>(null)
const videos = ref<HTMLVideoElement[]>([])

const isVideo = (src: string) =>
  /\.(mp4|webm|ogg)$/i.test(src)

const setupPagination = (swiper: any) => {
  swiper.params.pagination.renderBullet = (_: number, className: string) =>
    `<span class="${className} w-2.5 h-2.5 rounded-full bg-white/50 cursor-pointer transition-all"></span>`

  swiper.pagination.init()
  swiper.pagination.render()
  swiper.pagination.update()
}

const handleVideoPlayback = (swiper: any) => {
  videos.value.forEach(v => v.pause())
  const activeVideo = swiper.slides[swiper.activeIndex]?.querySelector('video')
  activeVideo?.play()
}

onMounted(async () => {
  await nextTick()
  swiperRef.value?.initialize()

  const swiper = swiperRef.value?.swiper
  if (!swiper) return

  setupPagination(swiper)
  handleVideoPlayback(swiper)

  swiper.on('slideChange', () => handleVideoPlayback(swiper))
})
</script>
