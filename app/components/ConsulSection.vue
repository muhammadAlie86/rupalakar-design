<template>
  <section class="min-h-screen bg-[#F9EBEA] py-8 md:py-20 px-4 font-raleway overflow-x-hidden">
    <div class="max-w-6xl mx-auto">
      
      <header class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24 mt-10 px-2">
  
      <div class="order-1 lg:order-1 text-left" data-aos="fade-right">
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-[#D34010] mb-6">
          Brand Bagus <br class="hidden sm:block" /> Gak Lahir <br class="hidden sm:block" /> Dari Asumsi
        </h1>
        <p class="text-base md:text-xl text-gray-800 font-normal max-w-lg leading-relaxed">
          Brand yang kuat lahir dari keputusan sadar. Bukan karena tren, bukan karena ikut-ikutan.
        </p>
      </div>

      <div class="order-2 lg:order-2 relative flex justify-center" data-aos="zoom-in">
        <div class="absolute inset-0 bg-[#D34010]/5 rounded-full blur-3xl -z-10 scale-125 md:scale-150"></div>
        
        <img 
          src="/konsul_satu.png" 
          class="w-3/4 sm:w-full max-w-[280px] md:max-w-md h-auto object-contain floating-animation" 
          alt="Hero Branding" 
        />
      </div>

    </header>

      <section class="mb-32">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-xl md:text-3xl text-[#D34010] font-medium mb-2">Ini <span class="text-4xl md:text-6xl font-bold block sm:inline">Masalah</span></h2>
          <p class="text-lg md:text-xl text-gray-700">yang mungkin kamu hadapi saat ini?</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="hidden lg:block lg:col-span-5 relative">
            <span class="absolute -top-20 -left-10 text-[#D34010]/10 font-black text-[300px] select-none">R</span>
            <img src="/konsul_dua.png" class="relative z-10 w-full drop-shadow-2xl" alt="Problem Illustration" />
          </div>
          
          <div class="lg:col-span-7 space-y-4">
            <div v-for="(item, i) in problems" :key="i" 
                 class="problem-card" 
                 data-aos="fade-left" :data-aos-delay="i * 150">
              <p class="text-lg md:text-2xl font-medium text-black leading-snug">
                {{ item.text }} <span class="text-[#D34010] font-black underline decoration-2">{{ item.highlight }}</span> {{ item.suffix }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-32">
        <div class="flex flex-col md:flex-row gap-10 items-center mb-16">
          <div class="flex-1" data-aos="fade-right">
            <h2 class="text-3xl md:text-5xl font-black text-[#D34010] leading-tight">
              Branding Solid Dimulai dari Sesi Konsultasi yang Tepat.
            </h2>
            <p class="mt-6 text-lg md:text-2xl text- leading-relaxed font-medium">
              Kami bantu kamu menggali nilai-nilai, visi, dan audiens yang akan membawa brand kamu lebih jauh.
            </p>
          </div>
          <div class="flex-1 flex justify-center" data-aos="zoom-in">
            <img src="/konsul_tiga.png" class="w-3/4 md:w-full max-w-sm floating-animation" alt="Solution" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ConsulCardSection v-for="(card, i) in roadmap" :key="i" v-bind="card" data-aos="fade-up" :data-aos-delay="i * 100" />
        </div>
      </section>

      <section class="mb-32">
        <div class="text-center mb-10" data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-bold text-black">Portofolio <span class="text-[#D34010]">Rupalakar</span></h2>
        </div>
        <div class="relative h-[250px] sm:h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl group" data-aos="zoom-out">
          <video ref="videoPlayer" autoplay loop playsinline :muted="isMuted" class="w-full h-full object-cover">
            <source src="/ic_intro.mp4" type="video/mp4" />
          </video>
          <button @click="toggleSound" class="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md text-white px-5 py-3 rounded-full hover:bg-[#D34010] transition-all text-sm font-bold">
            {{ isMuted ? '🔇 Unmute' : '🔊 Mute' }}
          </button>
        </div>
      </section>

      <div class="text-center py-20 border-t border-[#D34010]/20" data-aos="flip-up">
        <h3 class="text-2xl md:text-4xl font-medium text-[#D34010]">
          Siap Membangun Brand yang Solid? <br/>
          <span class="text-3xl md:text-5xl font-black text-black block mt-4 cursor-pointer hover:text-[#D34010] transition-colors duration-300">
            Jadwalkan Sekarang.
          </span>
        </h3>
      </div>

     <div class="mb-8 md:mb-12 text-center" data-aos="fade-up">
      <h2 class="text-xl md:text-4xl text-[#D34010] leading-tight max-w-4xl mx-auto font-medium">
        Portofolio 
        <span class="text-3xl md:text-5xl font-black tracking-tighter block md:inline my-1 text-black">
          Rupalakar
        </span>
        <br class="hidden md:block"/>
        <span class="text-base md:text-2xl text-gray-600 font-light block mt-2">
          Lihat bagaimana Kami Membantu Brand Tumbuh
        </span>
      </h2>
    </div>

    
      <ConsulMemberCard data-aos="fade-up" />

      <div class="mb-12 mt-20 text-center" data-aos="fade-up">
        <h2 class="text-2xl md:text-4xl text-[#D34010] leading-tight max-w-4xl mx-auto font-bold">
          Klien Kami Sudah Mempercayakan <br/>
          Branding Mereka ke Rupalakar.
        </h2>
        <p class="text-xl text-gray-600 font-light max-w-3xl mx-auto mt-4">
            Brand yang kuat dimulai dari kemitraan yang solid. Kami sudah bekerja sama dengan berbagai brand dari berbagai industri.
        </p>
      </div>
      <ConsulBrandSection data-aos="fade-up" />

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

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
</script>

<style scoped>
/* Animasi Mengambang Gambar */
.floating-animation {
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
}

/* Animasi Smooth Underline */
.underline-animate {
  position: relative;
  transition: color 0.3s;
}
.underline-animate::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #D34010;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}
.underline-animate:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.underline-animate:hover {
    color: #D34010;
}

/* Transisi Teks Tombol Video */
.scale-enter-active, .scale-leave-active {
  transition: all 0.2s ease;
}
.scale-enter-from, .scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Kustomisasi AOS */
[data-aos] {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>