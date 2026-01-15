<template>
  <section class="w-full font-raleway text-left overflow-hidden bg-[#F9EBEA] pt-16 md:pt-24">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
      
      <div class="px-6 md:pl-12 md:pr-16 pb-12">
        <div class="space-y-8" data-aos="fade-up">
          <p class="text-xl md:text-2xl text-black leading-relaxed font-normal text-justify hyphens-auto">
        Di era AI, manusia masih punya 
tempat. Bukan menolak teknologi 
AI, tapi kami percaya, ada hal-hal 
yang tidak bisa dibuat mesin; 
intuisi, rasa, kritis dalam pemikiran, 
dan kejujuran berpikir  </p>
          
          <p class="text-xl md:text-2xl text-black leading-relaxed font-normal text-justify hyphens-auto" data-aos="fade-up">
            Rupalakar adalah bukti bahwa 
kreativitas manusia akan terus 
pantas berdiri di dunia yang serba 
otomatis di tengah dunia kreatif 
yang makin cepat dan penuh 
automasi, Rupalakar hadir untuk 
mengembalikan makna, bahwa 
kami percaya manusia masih punya 
tempat dalam merasakan dan 
memaknai sesuatu.
          </p>

          <div class="pt-8 ">
            <h2 class="text-5xl md:text-7xl uppercase tracking-tighter font-medium mb-10 text-left" data-aos="fade-up">
              <span class="text-[#D34010] font-black">HOW</span> WE DO
            </h2>
            <div class="relative mt-8 md:mt-0 flex h-auto md:h-full items-end justify-end overflow-visible pb-10 md:pb-20" data-aos="fade-up">
  <img 
    src="/ic_diag.png" 
    alt="Thinker" 
    class="
      w-full h-auto object-contain
      transform scale-100    
      translate-x-0            
      mt-4                    
      
      md:w-[100%] lg:w-[140%]
      md:scale-[1.35]
      md:translate-x-[10%]
      md:origin-bottom
      md:mr-[10%] lg:mr-[-25%]
      md:mt-[10%] lg:mt-[30%]
      md:mb-0
    "
  />
</div>


          
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-between h-full bg-[#F9EBEA]">
        <div class="px-6 md:pl-0 md:pr-12 md:pb-12">
          <p class="text-xl md:text-2xl text-black leading-relaxed font-normal text-justify hyphens-auto" data-aos="fade-up">
       Bukan hanya menghasilkan 
identitas visual, tapi membantu 
brand menemukan kesadaran 
dan kritisasi berpikir dalam 
pembentukannya.   </p>
        </div>

       <div class="relative mt-12 md:mt-0 flex h-full items-end justify-end" data-aos="fade-up">
  <img 
    src="/ic_home_picture.png" 
    alt="Thinker" 
    class="w-[90%] md:w-[110%] lg:w-[80%] h-auto object-contain ml-auto self-end"
  />
</div>
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
    mirror: true,   
    offset: 120,    
  })
})
</script>