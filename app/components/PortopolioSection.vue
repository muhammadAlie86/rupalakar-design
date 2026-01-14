<template>
  <section class="bg-[#F9EBEA] py-32">
    <div class="mx-auto max-w-6xl px-6">

      
      <PortopolioCarouselSection :slides="slides" />

      <!-- TITLE + GRID -->
      <div class="relative">

        <!-- BACKGROUND TITLE -->
        <span
          class="pointer-events-none absolute inset-0 flex items-center justify-center
                 rotate-90 text-[120px] font-extrabold tracking-tight
                 text-brand-orange/10 select-none"
        >
          PORTFOLIO
        </span>

        <!-- GRID -->
        <div
          class="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="(item, index) in portfolios"
            :key="index"
            class="group rounded-xl border border-gray-900 bg-white p-6
                   transition-all duration-300
                   hover:-translate-y-1 hover:shadow-xl"
          >
            <!-- THUMB -->
            <div
              class="mb-5 h-44 rounded-lg bg-gray-200
                     transition group-hover:opacity-90"
            />

            <!-- CONTENT -->
            <h3 class="text-base font-bold text-gray-900">
              {{ item.title }}
            </h3>

            <p class="mt-2 text-sm text-gray-600">
              {{ item.description }}
            </p>

            <UButton
              variant="outline"
              color="orange"
              size="sm"
              class="mt-5"
            >
              View Project
            </UButton>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const slides = [
  'https://picsum.photos/1600/600?random=1',
  'https://picsum.photos/1600/600?random=2',
  'https://picsum.photos/1600/600?random=3'
]

const portfolios = Array.from({ length: 6 }, () => ({
  title: 'Brand Identity Project',
  description: 'Visual system & digital presence'
}))
</script>
