<template>
  <div
    class="w-full min-h-screen flex flex-col
           bg-brand-background overflow-x-hidden"
  >
    <!-- HEADER -->
    <Navbar class="flex-shrink-0" />

    <!-- PAGE CONTENT -->
    <main class="flex-1">
      <NuxtPage />
    </main>

    <!-- FOOTER -->
    <Footer class="flex-shrink-0" />
  </div>
</template>
