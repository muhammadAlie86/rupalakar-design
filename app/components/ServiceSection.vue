<template>
  <section id="service" class="bg-brand-background selection:bg-[#D34010] selection:text-white py-32">
    <div class="mx-auto max-w-6xl px-6">
      
      <header class="mb-20 text-left flex flex-col items-start">
        <h1 class="text-5xl md:text-8xl uppercase tracking-tighter leading-[0.9] font-medium">
          <span class="text-[#D34010] font-black">WHAT</span> WE DO
        </h1>
        <p class="mt-8 text-lg md:text-2xl text-gray-900 leading-relaxed max-w-2xl font-medium">
          Rupalakar adalah studio pemikir visual. Kami membantu brand memahami dirinya sebelum berbicara ke dunia.
        </p>
      </header>

      <div class="border-t border-gray-900">
        <div 
          v-for="(item, index) in services" 
          :key="index"
          class="border-b border-gray-900"
        >
          <button
            @click="handleToggle(index)"
            class="group flex w-full items-center justify-between py-10 md:py-12 text-left transition-all duration-500 hover:bg-[#D34010]/5 px-0"
            :aria-expanded="activeService === index"
          >
            <span
              class="text-3xl md:text-6xl font-bold transition-all duration-500 ease-out"
              :class="activeService === index ? 'text-[#D34010] translate-x-4' : 'text-gray-900'"
            >
              {{ item.title }}
            </span>

            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="h-10 w-10 md:h-16 md:w-16 text-gray-900 transition-all duration-500 ease-in-out"
              :class="activeService === index ? 'rotate-90 text-[#D34010]' : 'group-hover:text-[#D34010] group-hover:rotate-[-45deg]'"
            />
          </button>

          <div 
            class="grid transition-all duration-500 ease-in-out"
            :class="activeService === index ? 'grid-rows-[1fr] opacity-100 pb-12' : 'grid-rows-[0fr] opacity-0 pointer-events-none'"
          >
            <div class="overflow-hidden">
              <div 
                class="max-w-4xl transition-transform duration-500"
                :class="activeService === index ? 'translate-x-4' : ''"
              >
                <p class="text-xl md:text-3xl text-gray-900 leading-relaxed font-medium text-left">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="mt-16 flex flex-wrap items-center gap-8">
        <UButton 
          size="xl" 
          class="bg-[#D34010] hover:bg-[#b0350d] text-white px-10 py-4 font-bold text-lg rounded-none transition-all active:scale-95"
        >
          Mulai Percakapan
        </UButton>
        <ULink
          to="#"
          class="text-xl font-bold text-gray-900 uppercase tracking-widest underline decoration-2 underline-offset-8 hover:text-[#D34010] transition-colors"
        >
          Explore More
        </ULink>
      </footer>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeService = ref(null)

const services = [
  { title: 'Visual Brand Identity', description: 'Menjaga visual kamu tetap jernih, relevan, dan terasa jujur.' },
  { title: 'Social Media Management', description: 'Membangun kehadiran digital yang konsisten dan berdampak tinggi bagi audiens Anda.' },
  { title: 'Web Development', description: 'Membangun platform digital yang cepat, responsif, dan didesain untuk konversi.' },
  { title: 'SEO Optimizing', description: 'Meningkatkan visibilitas brand Anda agar selalu ditemukan oleh orang yang tepat.' },
  { title: 'Konsultasi', description: 'Diskusi mendalam untuk menemukan identitas unik dan strategi komunikasi brand Anda.' }
]

const handleToggle = (index) => {
  activeService.value = activeService.value === index ? null : index
}
</script>

<style scoped>
.grid-rows-\[0fr\] {
  grid-template-rows: 0fr;
}
.grid-rows-\[1fr\] {
  grid-template-rows: 1fr;
}
</style>