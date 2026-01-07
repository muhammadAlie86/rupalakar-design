<template>
  <section class="min-h-screen bg-[#F9EBEA] flex flex-col items-center py-12 px-4 font-raleway">
    
    <div class="mx-auto max-w-6xl px-6 pt-16"> 
      <div class="mt-8 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div class="text-left" data-aos="fade-right"> 
          <h1 class="text-5xl md:text-7xl font-black leading-[1.1] text-[#D34010]">
            Brand Bagus <br />Gak Lahir <br />Dari Asumsi
          </h1>
          <p class="mt-6 text-lg md:text-xl text-gray-900 leading-relaxed max-w-md font-medium">
            Brand yang kuat lahir dari keputusan sadar. Bukan karena tren, bukan karena ikut-ikutan.
          </p>
        </div>

        <div class="relative flex justify-center items-center" data-aos="fade-left">
          <div class="absolute inset-0 border-2 border-[#D34010] translate-x-4 translate-y-4 -z-10"></div>
            <img 
            src="/konsul_satu.png" 
            class="w-full h-auto object-contain shadow-xl relative z-10" 
            alt="Visual Branding Rupalakar" 
          />
        </div>
      </div>
      
      <div class="mb-12 text-center" data-aos="zoom-in">
        <h2 class="text-2xl md:text-4xl text-[#D34010] leading-tight max-w-4xl mx-auto font-medium">
          Ini 
          <span class="text-4xl md:text-6xl font-black tracking-tighter text-[#D34010] block md:inline my-2">
            Masalah 
          </span>
          yang kamu hadapi?
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
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

        <div class="lg:col-span-7 space-y-6" data-aos="fade-left">
          <div 
            v-for="(item, index) in problems" 
            :key="index"
            class="relative group border-2 border-[#D34010] bg-white p-6 md:p-8 transition-all "
          >
            <p class="text-xl md:text-2xl text-gray-900 leading-snug font-medium">
              {{ item.text }}
              <span class="text-[#D34010] font-black">{{ item.highlight }}</span>
              {{ item.suffix }}
            </p>
            
            <div class="absolute -bottom-2 -right-2 w-full h-full border-2 border-[#D34010]/10 -z-10 group-hover:border-[#D34010]/30 transition-colors"></div>
          </div>
        </div>

      </div>
      <div class="mt-8 mb-12 text-center" data-aos="zoom-in">
        <h2 class="text-2xl md:text-4xl text-[#D34010] leading-tight max-w-4xl mx-auto font-medium">
          Solusi Kami
        </h2>
      </div>
      <div class="mt-8 mb-12 text-left" data-aos="fade-right">
        <h2 class="text-3xl md:text-5xl text-[#D34010] leading-tight max-w-4xl font-medium">
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
lebih jauh diingat dan dikenal.​
          </p>
        </div>

        <div class="relative flex justify-center items-center" data-aos="fade-left">
          <div class="absolute inset-0 border-2 border-[#D34010] translate-x-4 translate-y-4 -z-10"></div>
            <img 
            src="/konsul_empat.png" 
            class="w-full h-auto object-contain shadow-xl relative z-10" 
            alt="Visual Branding Rupalakar" 
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <ConsulCardSection
          title="Assessment"
          schedule="H-1"
          description="Interview dan sesi tanya jawab seputar masalah dan goal yang ingin dicapai."
        />
        <ConsulCardSection
          title="Presentasi Solusi & Diskusi"
          schedule="H-2"
          description="Presentasi solusi dan diskusi terbuka seputar branding dan bisnis."
        />
        <ConsulCardSection
          title="Digital Book insight dan Studi Kasus"
          schedule="H+14"
          description="Pemberian Panduan, Insight serta studi kasus mendalam yang relevan dengan masalah yang dihadapi"
        />
      </div>
      
      <ConsulMemberCard/>
        
      

    </div>
  </section>
</template>

<script setup>
const problems = [
  { 
    text: "Ngerasa brand", 
    highlight: "gue belum punya", 
    suffix: "arah yang jelas." 
  },
  { 
    text: "Udah punya produk, tapi", 
    highlight: "bingung gimana brand", 
    suffix: "-nya." 
  },
  { 
    text: "Kayanya", 
    highlight: "branding gue gak 'nyambung'", 
    suffix: "sama target market." 
  }
]
</script>