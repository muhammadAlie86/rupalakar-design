<script setup>
const teams = [
  {
    role: 'Visual & Brand Consultant',
    name: 'Ramadhan Putra.',
    image: '/rama.png',
    description:
      'Sejak 2015 saya berkarya di dunia kreatif, dan sejak 2020 fokus membantu brand lokal menemukan identitas visual yang tepat. Saya percaya, branding yang kuat lahir dari pemahaman yang mendalam akan masalah bisnisnya.',
  },
  {
    role: 'Project Manager',
    name: 'Widya Zatalini.',
    image: '/widya.png',
    description:
      'Sejak 2021, saya memimpin proyek di Rupalakar dengan pendekatan yang strategis dan terukur. Bagi saya, keberhasilan bukan soal rencana, tapi bagaimana tim yang kompeten mengeksekusinya dengan disiplin dan arah yang jelas.',
  },
  {
    role: 'Digital Performance',
    name: 'Nabil Syamil.',
    image: '/nabil.png',
    description:
      'Sejak 2020, saya bantu brand lokal tumbuh lewat strategi performa yang relevan dan terukur. Dalam 3 bulan terakhir, salah satu kampanye saya capai ROAS 16x, berkat insight yang tepat bukan iklan masif.',
  },
]
</script>


<template>
  <section class="bg-[#F9EFEA] py-24">
    <div class="mb-12 text-center">
            <h2 class="text-4xl lg:text-4xl xl:text-6xl font-black text-[#D34010] leading-tight">
          Di Belakang Layar
        </h2>
      </div>
    <div class="max-w-7xl mx-auto px-6">
      

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

        <div
          v-for="team in teams"
          :key="team.name"
          class="relative grid grid-cols-[140px_1fr] gap-6 items-start"
        >
          <img
            :src="team.image"
            :alt="team.name"
            class="h-[480px] object-contain"
          />

  <!-- ROLE (ABSOLUTE – NEMPEL KEPALA) -->
  <h3
    class="absolute left-[120px] top-[60px] 
           text-[#D34010] font-bold text-xl md:text-2xl xl:text-3xl leading-tight max-w-[200px]"
  >
    {{ team.role }}
  </h3>

  <!-- TEXT -->
  <div class="pt-[180px]">
    <p class="text-[#D34010] text-sm md:text-xl xl:text-2xl  font-semibold mb-2">
      {{ team.name }}
    </p>

    <p class="text-black  text-sm md:text-base xl:text-lg ">
      {{ team.description }}
    </p>
  </div>
</div>


      </div>
    </div>
  </section>
</template>