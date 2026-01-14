<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const data = [
  {
    name: "Jeremy Alvin",
    role: "Owner VOU",
    desc: "Yang kamu lakukan udah bener, dan saya sangat suka cara kerja tim kamu, saya rasa bisnis kamu bisa lebih daripada ini.",
    photo: "/ja.jpeg"
  },
  {
    name: "Ferdiansyah",
    role: "Owner Toko Buku Sederhana dan Guppy Stationary",
    desc: "Jujur saya baru tau ternyata bikin logo dan brand tuh alurnya harus kayak gini ya, dan ternyata logo-logo besar di luar sana juga bikinnya kayak gini. Ini bener-bener ilmu baru buat gue pribadi.",
    photo: "/fediansyah.jpg"
  },
  {
    name: "Firdaus",
    role: "CEO Guppy Stationary",
    desc: "Bener ya ma, saya makin kesini makin bisa ngerasa bahwa logo Guppy itu ada jiwanya.",
    photo: "/firdaus.jpg"
  },
  {
    name: "Lanjar Sumarno",
    role: "Owner PT. SKL Sinar Warna",
    desc: "Ini yang saya cari. Selama ini saya dapat agency dan studio yang bukan mecahin masalah usaha saya, tapi malah saya yang disuruh mikir sendiri. Tapi Rupalakar udah bener ngasih solusi tanpa saya harus pusing sendirian.",
    photo: "/lanjar.jpg"
  },
  {
    name: "Siti Khadijah",
    role: "CEO PT. SKL Sinar Warna",
    desc: "Kita beruntung banget ketemu Rupalakar. Saya salut banget dengan jalan pemikirannya yang kritis dan bisa diuji.",
    photo: "https://ui-avatars.com/api/?name=Siti+Khadijah&background=D34010&color=fff" // Placeholder jika foto kosong
  },
];
</script>

<template>
  <section class="py-20 bg-[#FDF2F0] px-6">
    <div class="max-w-5xl mx-auto relative">
      
      <Swiper
        :modules="[Navigation]"
        :navigation="{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }"
        :loop="true"
        class="testimonial-swiper"
      >
        <SwiperSlide v-for="(item, index) in data" :key="index">
          <div class="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm">
            
            <div class="w-32 h-44 md:w-40 md:h-52 flex-shrink-0 overflow-hidden rounded-xl shadow-md border-4 border-white">
              <img 
                :src="item.photo || 'https://ui-avatars.com/api/?name=' + item.name" 
                :alt="item.name"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="flex-1">
              <h3 class="text-4xl md:text-5xl font-serif font-bold text-black mb-2">
                {{ item.name }}
              </h3>
              <p class="text-[#D34010] italic text-lg mb-6 font-medium">
                {{ item.role }}
              </p>
              <p class="text-gray-700 text-lg md:text-xl leading-relaxed">
                "{{ item.desc }}"
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button class="swiper-prev absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-[#D34010] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-14 md:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button class="swiper-next absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-[#D34010] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-14 md:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  </section>
</template>

<style scoped>
/* Menghilangkan font default swiper agar arrow custom kita terlihat bersih */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  display: none;
}
</style>