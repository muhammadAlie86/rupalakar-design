<template>
  <section class="min-h-screen bg-[#F9EBEA] flex flex-col items-center py-12 px-4 font-raleway overflow-x-hidden">
    
    <div class="mx-auto max-w-6xl px-6 pt-16"> 
      <div class="mt-8 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div class="text-left" data-aos="fade-right" data-aos-duration="1000"> 
          <h1 class="text-5xl md:text-7xl font-black leading-[1.1] text-[#D34010]">
            Brand Bagus <br />Gak Lahir <br />Dari Asumsi
          </h1>
          <p class="mt-6 text-lg md:text-xl text-gray-900 leading-relaxed max-w-md font-medium">
            Brand yang kuat lahir dari keputusan sadar. Bukan karena tren, bukan karena ikut-ikutan.
          </p>
        </div>

        <div class="relative flex justify-center items-center" data-aos="zoom-in-left" data-aos-duration="1200">
          <div class="absolute inset-0 translate-x-4 translate-y-4 -z-10 bg-[#D34010]/5 rounded-full blur-3xl"></div>
          <img 
            src="/konsul_satu.png" 
            class="w-full h-auto object-contain relative z-10 floating-animation" 
            alt="Visual Branding Rupalakar" 
          />
        </div>
      </div>
      
      <div class="mb-12 text-center" data-aos="fade-up">
        <h2 class="text-2xl md:text-4xl text-[#D34010] leading-tight max-w-4xl mx-auto font-medium">
          Ini 
          <span class="text-4xl md:text-6xl font-semibold tracking-tighter text-[#D34010] block md:inline my-2">
            Masalah 
          </span>
          yang kamu hadapi?
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5 relative flex justify-center" data-aos="fade-right">
          <div class="absolute -left-4 top-0 text-[#D34010] opacity-10 font-black text-[280px] leading-none -z-10 select-none">
            R
          </div>
          <img 
            src="/konsul_dua.png" 
            alt="Problem Context" 
            class="w-full max-w-[400px] object-contain drop-shadow-2xl"
          />
        </div>

        <div class="lg:col-span-7 space-y-6">
          <div 
            v-for="(item, index) in problems" 
            :key="index"
            data-aos="fade-left"
            :data-aos-delay="index * 200"
            class="relative group border-2 border-[#D34010] bg-[#F9EBEA] p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          >
            <p class="text-xl md:text-2xl text-gray-900 leading-snug font-medium">
              {{ item.text }}
              <span class="text-[#D34010] font-black group-hover:text-black transition-colors">{{ item.highlight }}</span>
              {{ item.suffix }}
            </p>
            <div class="absolute -bottom-2 -right-2 w-full h-full border-2 border-[#D34010]/10 -z-10 group-hover:border-[#D34010]/40 transition-colors"></div>
          </div>
        </div>
      </div>

      <div class="mt-24 mb-12 text-center" data-aos="zoom-in">
        <h2 class="text-2xl md:text-4xl text-[#D34010] leading-tight max-w-4xl mx-auto font-medium">
          Solusi Kami
        </h2>
      </div>
      <div class="mt-8 mb-12 text-left" data-aos="fade-up">
        <h2 class="text-3xl md:text-5xl text-[#D34010] leading-tight max-w-4xl font-black">
          Branding Solid Dimulai dari Sesi Konsultasi yang Tepat.
        </h2>
      </div>

      <div class="mt-8 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="text-left" data-aos="fade-right"> 
          <p class="text-xl md:text-3xl text-gray-900 leading-relaxed max-w-md font-medium">
            Di Rupalakar, kami percaya <br/>
            bahwa branding yang kuat <br/>
            lahir dari pemahaman yang <br/>
            mendalam tentang siapa<br/>
            brand kamu. Kami bantu <br/>
            kamu menggali nilai-nilai,<br/>
            visi, dan audiens yang akan <br/>
            membawa brand kamu <br/>
            lebih jauh diingat dan dikenal.
          </p>
        </div>

        <div class="relative flex justify-center items-center min-h-[400px]">
  <img 
    src="/konsul_tiga.png" 
    class="w-full h-auto object-contain relative z-20 opacity-100 visible floating-animation" 
    alt="Visual Branding Rupalakar" 
    @load="() => console.log('Gambar Berhasil Dimuat')"
    @error="(e) => console.error('Gambar Gagal Dimuat', e)"
  />
  
  <div class="absolute inset-0 bg-[#D34010]/5 rounded-full blur-3xl -z-10"></div>
</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <ConsulCardSection
          data-aos="fade-up" data-aos-delay="0"
          title="Assessment"
          schedule="H-1"
          description="Interview dan sesi tanya jawab seputar masalah dan goal yang ingin dicapai."
        />
        <ConsulCardSection
          data-aos="fade-up" data-aos-delay="200"
          title="Presentasi Solusi & Diskusi"
          schedule="H-2"
          description="Presentasi solusi dan diskusi terbuka seputar branding dan bisnis."
        />
        <ConsulCardSection
          data-aos="fade-up" data-aos-delay="400"
          title="Digital Book insight dan Studi Kasus"
          schedule="H+14"
          description="Pemberian Panduan, Insight serta studi kasus mendalam yang relevan dengan masalah yang dihadapi"
        />
      </div>

      <div class="mb-12 text-center" data-aos="zoom-in">
        <h2 class="text-2xl md:text-4xl text-[#D34010] leading-tight max-w-4xl mx-auto font-medium">
          Apa
          <span class="text-4xl md:text-6xl font-semibold tracking-tighter text-[#D34010] block md:inline my-2">
            Kata Mereka ?
          </span>
        </h2>
      </div>
      <ConsulTestimoniSection data-aos="fade-up" />

      <div class="my-24 text-center" data-aos="flip-up">
        <h2 class="text-2xl md:text-4xl text-[#D34010] leading-tight max-w-4xl mx-auto font-medium">
          Buat Branding yang Solid Dimulai dari Konsultasi yang Tepat.
          <br/>
          <span class="text-3xl md:text-4xl font-semibold tracking-tighter text-black underline-animate block md:inline my-2 cursor-pointer">
              Jadwalkan Sekarang.
          </span>
        </h2>
      </div>

      <div class="mb-12 text-center" data-aos="fade-up">
        <h2 class="text-2xl md:text-4xl text-[#D34010] leading-tight max-w-4xl mx-auto font-medium">
          Portopolio
          <span class="text-3xl md:text-4xl font-black tracking-tighter block md:inline my-2 text-black">
              Rupalakar
          </span>
          <br/>
          <span class="text-xl md:text-2xl text-gray-600 font-light block md:inline my-2">
              Lihat bagaimana Kami Membantu Brand Tumbuh
          </span>
        </h2>
      </div>
      
      <div class="relative h-[500px] overflow-hidden rounded-3xl group shadow-2xl" data-aos="zoom-in">
        <video 
          ref="videoPlayer"
          autoplay 
          :muted="isMuted" 
          loop 
          playsinline 
          class="absolute min-w-full min-h-full object-cover"
        >
          <source src="/ic_intro.mp4" type="video/mp4" />
        </video>

        <button 
          @click="toggleSound"
          class="absolute bottom-6 right-6 z-20 bg-black/40 backdrop-blur-md p-4 px-6 rounded-full hover:bg-[#D34010] transition-all text-white font-bold flex items-center gap-2"
        >
          <transition name="scale" mode="out-in">
            <span :key="isMuted">{{ isMuted ? '🔇 Aktifkan Suara' : '🔊 Matikan Suara' }}</span>
          </transition>
        </button>
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