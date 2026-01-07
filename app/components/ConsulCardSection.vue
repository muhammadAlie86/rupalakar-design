<template>
  <div class="flex flex-col gap-4">
    <div class="space-y-0">
      <h3 class="text-2xl md:text-3xl font-black text-[#D34010] leading-tight uppercase">
        {{ title }}
      </h3>
      <p class="text-2xl md:text-3xl font-black text-[#D34010]">
        {{ schedule }}
      </p>
    </div>
    <p class="text-gray-900 text-lg md:text-xl leading-relaxed font-medium">
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