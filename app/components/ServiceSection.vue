<template>
  <section id="service" class="bg-brand-background py-32">
    <div class="mx-auto max-w-5xl px-6">

      <!-- HEADER -->
      <div class="mb-24 max-w-xl">
        <h2 class="text-4xl font-extrabold tracking-tight text-gray-900">
          <span class="text-brand-orange">WHAT</span> WE DO
        </h2>

        <p class="mt-6 text-gray-700 leading-relaxed">
          Rupalakar adalah studio pemikir visual.
          Kami membantu brand memahami dirinya
          sebelum berbicara ke dunia.
        </p>
      </div>

      <!-- SERVICES LIST -->
      <div class="divide-y divide-gray-900">
        <button
          v-for="(item, index) in services"
          :key="index"
          class="group flex w-full items-center justify-between
                 py-10 text-left
                 transition-colors duration-300
                 hover:bg-brand-orange/5"
        >
          <!-- TITLE -->
          <span
            class="text-2xl font-semibold text-brand-orange
                   transition-transform duration-300
                   group-hover:translate-x-1"
          >
            {{ item.title }}
          </span>

          <!-- ARROW -->
          <UIcon
            name="i-heroicons-arrow-right"
            class="h-7 w-7 text-gray-900
                   transition-all duration-300
                   group-hover:translate-x-3
                   group-hover:text-brand-orange"
          />
        </button>
      </div>

      <!-- DESCRIPTION -->
      <p class="mt-8 max-w-md text-sm text-gray-700">
        Menjaga visual kamu tetap jernih, relevan,
        dan terasa jujur.
      </p>

      <!-- ACTIONS -->
      <div class="mt-14 flex items-center gap-8">
        <UButton color="orange" size="lg">
          Mulai Percakapan
        </UButton>

        <ULink
          to="#"
          class="font-medium text-brand-orange
                 underline-offset-4 hover:underline"
        >
          Explore More
        </ULink>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  { title: 'Visual Brand Identity' },
  { title: 'Social Media Management' },
  { title: 'Web Development' },
  { title: 'SEO Optimizing' },
  { title: 'Konsultasi' }
]
</script>
