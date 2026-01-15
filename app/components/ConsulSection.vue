<template>
  <section class="min-h-screen bg-[#F9EBEA] py-8 md:py-20 px-4 font-raleway overflow-x-hidden">
    <div class="max-w-6xl mx-auto">
      
      <header class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24 mt-10 px-2">
  
      <div class="order-1 lg:order-1 text-left" data-aos="fade-right">
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-[#D34010] mb-6">
          Brand Bagus <br class="hidden sm:block" /> Gak Lahir <br class="hidden sm:block" /> Dari Asumsi
        </h1>
        <p class="text-base md:text-xl text-black font-normal max-w-lg leading-relaxed">
          Brand yang kuat lahir dari keputusan sadar. Bukan karena tren, bukan karena ikut-ikutan.
        </p>
      </div>

      <div class="order-2 lg:order-2 relative flex justify-center" data-aos="zoom-in">
        <div class="absolute inset-0 bg-[#D34010]/5 rounded-full blur-3xl -z-10 scale-125 md:scale-150"></div>
        
        <img 
          src="/konsul_satu.png" 
          
    class="
      w-full md:w-[120%] lg:w-[140%]
      h-auto object-contain
      transform scale-[1] md:scale-[1]
      translate-x-[10%]
      origin-bottom
    "
          alt="Hero Branding" 
        />
      </div>

    </header>

      <section class="mb-32">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-xl md:text-3xl text-[#D34010] font-medium mb-2">Ini <span class="text-4xl md:text-6xl font-bold block sm:inline">Masalah</span> yang kamu hadapi?</h2>
         
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="block lg:col-span-5 relative overflow-hidden">
  <img 
    src="/konsul_dua.png" 
    class="
      w-full h-auto object-contain mb-8
    
      lg:w-[140%] 
      lg:transform lg:scale-[1] 
      lg:translate-x-[5%] 
      lg:mb-0" 
    alt="Problem Illustration" 
  />
</div>
          
          <div class="lg:col-span-7 space-y-4">
          <div v-for="(item, i) in problems" :key="i" 
              class="problem-card border-2 border-[#D34010] p-6 md:p-8 transition-all duration-300 hover:bg-[#D34010]/5" 
              data-aos="fade-left">
            
            <p class="text-lg md:text-2xl font-medium text-black leading-snug">
              {{ item.text }} 
              <span class="text-[#D34010] font-medium decoration-2">
                {{ item.highlight }}
              </span> 
              {{ item.suffix }}
            </p>

          </div>
        </div>
        </div>
      </section>
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl text-[#D34010] font-medium mb-2">Solusi Kami</h2>
        </div>
      <section class="mb-0">
        <div class="flex flex-col md:flex-row gap-10 items-center mb-16">
          <div class="flex-1" data-aos="fade-up">
            <h2 class="text-3xl md:text-5xl font-medium text-[#D34010] leading-tight">
              Branding Solid Dimulai dari Sesi Konsultasi yang Tepat.
            </h2>
            <p class="mt-6 text-lg md:text-2xl text-black leading-relaxed font-medium">
              Di Rupalakar, kami percaya
              bahwa branding yang kuat
              lahir dari pemahaman yang
              mendalam tentang siapa
              brand kamu. Kami bantu
              kamu menggali nilai-nilai,
              visi, dan audiens yang akan
              membawa brand kamu
              lebih jauh diingat dan dikenal
            </p>
          </div>
          <div class="flex-1 flex justify-center" data-aos="fade-up">
            <img src="/konsul_tiga.png" 
    class="
      w-full h-auto object-contain mb-2
    
      lg:w-[140%] 
      lg:transform lg:scale-[1] 
      lg:translate-x-[5%] 
      lg:mb-0" 
    alt="Problem Illustration"  />
          </div>
        </div>

       
      </section>
      <section class="bg-[#F9EBEA] py-0">
        <div class="max-w-7xl mx-auto px-6">
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            
            <ConsulCardSection 
              v-for="(item, index) in roadmap" 
              :key="index"
              :title="item.title"
              :schedule="item.schedule"
              :description="item.description"
              data-aos="fade-up"
              :data-aos-delay="index * 200"
            />

          </div>
          
        </div>
      </section>
      <div class="text-center mb-16 mt-6" data-aos="fade-up">
          <h2 class="text-xl md:text-4xl text-[#D34010] font-medium mb-2">Apa Kata Mereka?</h2>
      </div>

        <ConsulTestimoniSection data-aos="fade-up"/>
        <div class="text-center py-20 border-t border-[#D34010]/20" data-aos="fade-up">
          <h3 class="text-2xl md:text-4xl font-medium text-[#D34010]">
            Buat Branding yang Solid di mulai dari Konsultasi yang Tepat.<br/>
          
          </h3>
          <NuxtLink 
          to="/contact" 
          class="text-2xl md:text-4xl font-black text-black block mt-6 cursor-pointer hover:text-[#D34010] transition-all duration-300 ease-in-out hover:translate-x-2"
        >
          Jadwalkan Sekarang.
        </NuxtLink>
      </div>
      
      <section class="mb-8">
        <div class="text-center mb-2" data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-bold text-black">Portofolio <span class="text-[#D34010]">Rupalakar</span></h2>
        </div>
         <div class="text-center mb-8" data-aos="fade-up">
          <h2 class="text-xl md:text-2xl font-nor,a; text-black">
            Lihat Bagaimana Kami Membantu Brand Tumbuh
        
          </h2>
          
      </div>
        <div class="relative h-[250px] sm:h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl group" data-aos="zoom-out">
           <video
           
          ref="videos"
          class="h-full w-full object-cover"
          :autoplay="false" 
          :muted="true"
          loop
          playsinline
          controls
        >
       <source src="/ic_intro.mp4" type="video/mp4" />
      </video>
          <!-- <video ref="videoPlayer" loop playsinline :muted="isMuted" class="w-full h-full object-cover">
            <source src="/ic_intro.mp4" type="video/mp4" />
          </video>
          <button @click="toggleSound" class="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md text-white px-5 py-3 rounded-full hover:bg-[#D34010] transition-all text-sm font-bold">
            {{ isMuted ? '🔇 Unmute' : '🔊 Mute' }}
          </button> -->
        </div>
      </section>

    

      <ConsulMemberCard data-aos="fade-up" />

      <div class="mb-12 mt-4 text-center" data-aos="fade-up">
        <h2 class="text-2xl md:text-4xl text-[#D34010] leading-tight max-w-4xl mx-auto font-bold">
          Klien Kami Sudah Mempercayakan <br/>
          Branding Mereka ke Rupalakar.
        </h2>
        <p class="text-xl text-black font-light max-w-3xl mx-auto mt-4">
            Brand yang kuat dimulai dari kemitraan yang solid. Kami sudah bekerja sama dengan berbagai brand dari berbagai industri.
        </p>
      </div>
      
      <ConsulBrandSection data-aos="fade-up" />

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const roadmap = [
  {
    title: 'Assessment',
    schedule: 'H-1',
    description: 'Interview dan sesi tanya jawab seputar masalah dan goal yang ingin dicapai.'
  },
  {
    title: 'Presentasi Solusi & Diskusi',
    schedule: 'H-2',
    description: 'Presentasi solusi dan diskusi terbuka seputar branding dan bisnis.'
  },
  {
    title: 'Digital Book insight dan Studi Kasus',
    schedule: 'H+14',
    description: 'Pemberian Panduan, Insight serta studi kasus mendalam yang relevan dengan masalah yang dihadapi.'
  }
]
const problems = [
  { text: "Ngerasa brand", highlight: "gue belum punya", suffix: "arah yang jelas." },
  { text: "Udah punya produk, tapi", highlight: "bingung gimana brand", suffix: "-nya." },
  { text: "Kayanya", highlight: "branding gue gak 'nyambung'", suffix: "sama target market." }
]

const videoPlayer = ref(null)
const isMuted = ref(true)

const toggleSound = () => {
  if (videoPlayer.value) {
    isMuted.value = !isMuted.value
    videoPlayer.value.muted = isMuted.value
  }
}


onMounted(() => {
  AOS.init({
    duration: 1000, 
    once: true,    
    offset: 100,    
  })
})
</script>
