<template>
  <section class="bg-brand-background font-raleway">

    <!-- HERO -->
    <div class="mx-auto max-w-6xl px-6 pt-28">
      <UCarousel
        :items="heroSlides"
        indicators
        arrows
        class="mb-20 overflow-hidden rounded-2xl"
      >
        <template #default="{ item }">
          <div
            class="flex h-[420px] w-full items-center justify-center
                   rounded-2xl bg-gray-900
                   text-xl font-semibold text-white"
          >
            {{ item }}
          </div>
        </template>
      </UCarousel>

      <!-- LOGO CAROUSEL -->
      <UCarousel
        :items="logos"
        arrows
        :ui="{ item: 'basis-1/5' }"
        class="mb-28"
      >
        <template #default="{ item }">
          <div
            class="flex h-20 items-center justify-center
                   rounded-md border border-gray-300
                   bg-white text-sm font-semibold text-gray-800"
          >
            {{ item }}
          </div>
        </template>
      </UCarousel>

      <!-- INTRO -->
      <div class="mb-44 grid items-center gap-20 lg:grid-cols-2">
        <!-- TEXT -->
        <div>
          <h1 class="text-5xl font-extrabold leading-tight text-gray-900">
            We think in Visual<br />
            <span class="text-brand-orange">
              We Design for Impact
            </span>
          </h1>

          <p class="mt-6 max-w-md text-gray-700">
            Rupalakar adalah studio pemikir visual.
            Kami membantu brand memahami dirinya
            sebelum berbicara ke dunia.
          </p>

          <UButton
            color="orange"
            size="lg"
            class="mt-8 font-semibold"
          >
            Mulai Percakapan
          </UButton>
        </div>

        <!-- VISUAL -->
        <div class="flex justify-center lg:justify-end">
          <div
            class="flex h-72 w-72 items-center justify-center
                   rounded-xl bg-gray-900
                   text-sm font-semibold text-white"
          >
            GIF / Visual
          </div>
        </div>
      </div>
    </div>

    <!-- WHY -->
    <div class="mx-auto max-w-6xl px-6 pb-36">
      <div class="mb-24 max-w-2xl">
        <h2
          class="text-7xl font-extrabold leading-none text-brand-orange"
        >
          WHY
        </h2>
        <p
          class="mt-4 text-lg font-semibold tracking-wide text-gray-900"
        >
          RUPALAKAR EXISTS
        </p>
      </div>

      <div class="grid items-start gap-24 lg:grid-cols-2">
        <!-- TEXT -->
        <div class="space-y-8 text-gray-800">
          <p>
            Di era AI, manusia masih punya tempat.
            Bukan melalui teknologi,
            tapi lewat empati, rasa, dan naluri.
          </p>

          <p>
            Rupalakar hadir untuk membantu brand
            memahami dirinya,
            bukan sekadar tampil menarik.
          </p>

          <div>
            <h3 class="mb-4 text-xl font-bold text-brand-orange">
              HOW WE DO
            </h3>

            <img
              src="https://picsum.photos/600/400?random=21"
              class="rounded-lg border border-gray-900"
            />
          </div>
        </div>

        <!-- IMAGE -->
        <div class="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/420/560?random=22"
            class="rounded-lg border border-gray-900 object-cover"
          />
        </div>
      </div>
    </div>

    <!-- CLOSING -->
    <div class="bg-brand-background py-36">
      <div
        class="mx-auto max-w-6xl px-6
               grid items-center gap-24 lg:grid-cols-2"
      >
        <!-- TEXT -->
        <div>
          <p class="mb-6 max-w-md text-sm text-gray-700">
            Kami tidak memulai dari warna, bentuk,
            atau moodboard.
            Kami memulai dari pemahaman.
          </p>

          <h2 class="text-4xl font-bold leading-tight text-gray-900">
            Kami bukan vendor,<br />
            tapi
            <span class="text-brand-orange">
              partner berpikir visualmu
            </span>
          </h2>

          <p class="mt-6 max-w-md text-sm text-gray-700">
            Kami membantu brand memahami dirinya
            dan berbicara dengan cara yang lebih jujur.
          </p>
        </div>

        <!-- IMAGE -->
        <div class="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/520/420?random=30"
            class="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const heroSlides = ['Video / Slide', 'Video / Slide', 'Video / Slide']
const logos = ['Logo', 'Logo', 'Logo', 'Logo', 'Logo']
</script>
