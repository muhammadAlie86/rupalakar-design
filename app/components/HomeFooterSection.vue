<template>
  <section class="bg-brand-cream font-raleway pt-16 md:pt-24 min-h-fit flex flex-col overflow-hidden">
    
    <div class="container mx-auto px-6 lg:px-12 flex flex-col flex-grow">
      
      <div class="space-y-6 md:space-y-10 text-left w-full mb-12 md:mb-16">
        <p data-aos="fade-up" 
           class="text-lg md:text-2xl xl:text-3xl text-black leading-relaxed max-w-3xl font-normal text-justify">
              Kami tidak memulai dari warna, bentuk, atau moodboard. Kami memulai dari kesadaran: siapa kamu, apa yang kamu rasakan, apa yang ingin kamu ubah. Dari sana, visual berkembang secara natural.
      
        </p>
        <h1 data-aos="fade-up" 
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tighter text-black font-black w-full">
          Kami bukan vendor.<br />
          tapi
          <span class="text-[#D34010]"> Kami partner berpikir visualmu.</span>
        </h1>
        
        <p data-aos="fade-up" 
           class="text-lg md:text-2xl xl:text-3xl text-black leading-relaxed max-w-3xl font-normal text-justify">
          Kami hadir bukan untuk "menghasilkan desain", 
          tapi untuk membantu brand memahami dirinya dan berbicara dengan cara yang lebih jernih.
        </p>
      </div>

      <div class="mt-auto w-full flex justify-center items-end bg-transparent">
  <img 
    src="/img_part.png" 
    alt="Visual Partner Team" 
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="w-full h-auto max-w-[1440px] block align-bottom"
    @load="onImgLoad"
  />
</div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50, // Dikurangi agar AOS muncul lebih cepat di layar kecil
    anchorPlacement: 'top-bottom',
  })

  // Refresh untuk memastikan kalkulasi posisi tepat setelah gambar load
  window.addEventListener('load', () => {
    AOS.refresh()
  })
})
</script>

<style scoped>
/* Pastikan font-black (900) Raleway terpakai */
.font-black {
  font-weight: 900;
}

/* Hilangkan celah 1px yang sering muncul di bawah gambar pada Safari/Chrome */
img {
  margin-bottom: -1px;
}
</style>