<template>
  <div class="flex flex-col gap-4">
    <div class="space-y-0">
      <h3 class="text-2xl md:text-3xl font-black text-[#D34010] leading-tight">
        {{ title }}
      </h3>
      <p class="text-2xl md:text-3xl font-black text-[#D34010]">
        {{ schedule }}
      </p>
    </div>
    <p class="text-black text-lg md:text-xl leading-relaxed font-normal">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  schedule: String,
  description: String
})
</script>