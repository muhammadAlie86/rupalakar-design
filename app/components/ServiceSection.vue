<template>
  <section class="bg-[#F9EBEA] selection:bg-[#D34010] selection:text-white py-32 overflow-hidden">
    <div class="mx-auto max-w-6xl px-6">
      
      <header class="mb-20 text-left flex flex-col items-start" data-aos="fade-up">
        <h1 class="text-5xl md:text-8xl uppercase tracking-tighter leading-[0.9] font-medium">
          <span class="text-[#D34010] font-black">WHAT</span> WE DO
        </h1>
        <p class="mt-8 text-lg md:text-2xl text-black leading-relaxed max-w-2xl font-normal">
          Rupalakar adalah studio pemikir visual. Kami membantu brand memahami dirinya sebelum berbicara ke dunia.
        </p>
      </header>

      <div class="border-t border-black">
        <div 
          v-for="(item, index) in services" 
          :key="item.slug"
          class="border-b border-black group"
        >
          <button
            @click="handleToggle(index)"
            class="flex w-full items-center justify-between py-10 md:py-12 text-left transition-colors duration-300 hover:bg-[#D34010]/5" 
            :aria-expanded="activeService === index"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <span
              class="text-3xl md:text-6xl font-bold transition-all duration-500 ease-out"
              :class="activeService === index ? 'text-[#D34010] translate-x-4' : 'text-black'" 
            >
              {{ item.title }}
            </span>

            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="h-10 w-10 md:h-16 md:w-16 text-black transition-all duration-500"
              :class="[
                activeService === index ? 'rotate-90 text-[#D34010]' : 'group-hover:text-[#D34010] group-hover:rotate-[-45deg]'
              ]"
            />
          </button>

          <div 
            class="grid transition-all duration-500 ease-in-out overflow-hidden" 
            :class="[
              activeService === index 
                ? 'grid-rows-[1fr] opacity-100 mb-12' 
                : 'grid-rows-[0fr] opacity-0 pointer-events-none'
            ]"
          >
            <div class="min-h-0"> 
              <div 
                class="max-w-4xl transition-transform duration-500" 
                :class="activeService === index ? 'translate-x-4' : ''"
              >
                <p class="text-xl md:text-3xl text-black leading-relaxed font-normal text-left">
                  {{ item.description }}
                </p>

            
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="mt-20 flex flex-wrap items-center gap-8" data-aos="fade-up">
        <UButton 
          to="/contact"
          size="xl" 
          class="bg-[#D34010] hover:bg-[#b0350d] text-white px-10 py-4 font-medium text-lg rounded-none transition-all active:scale-95"
        >
          Mulai Percakapan
        </UButton>
        
        <ULink
          to="/service/konsultasi"
          class="text-xl font-medium text-black uppercase tracking-widest underline decoration-2 underline-offset-8 hover:text-[#D34010] transition-colors"
        >
          Explore More
        </ULink>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// State
const activeService = ref(null)

// Data
const services = [
  { 
    title: 'Visual Brand Identity', 
    description: 'Menjaga visual kamu tetap jernih, relevan, dan terasa jujur.',
    slug: 'visual-identity' 
  },
  { 
    title: 'Social Media Management', 
    description: 'Membangun kehadiran digital yang konsisten dan berdampak tinggi bagi audiens Anda.',
    slug: 'social-media'
  },
  { 
    title: 'Web Development', 
    description: 'Membangun platform digital yang cepat, responsif, dan didesain untuk konversi.',
    slug: 'web-development'
  },
  { 
    title: 'SEO Optimizing', 
    description: 'Meningkatkan visibilitas brand Anda agar selalu ditemukan oleh orang yang tepat.',
    slug: 'seo'
  },
  { 
    title: 'Konsultasi', 
    description: 'Diskusi mendalam untuk menemukan identitas unik dan strategi komunikasi brand Anda.',
    slug: 'konsultasi'
  }
]

// Logic
const handleToggle = (index) => {
  activeService.value = activeService.value === index ? null : index
  
  // Memberi waktu transisi selesai sebelum merefresh deteksi scroll jika perlu
  setTimeout(() => {
    AOS.refresh()
  }, 500)
}

onMounted(() => {
  AOS.init({
    duration: 1000, 
    once: true,    
    offset: 50, // Diperkecil agar lebih sensitif
  })
})
</script>

<style scoped>
/* Transisi Smooth untuk Grid Rows */
.grid {
  display: grid;
}
</style>