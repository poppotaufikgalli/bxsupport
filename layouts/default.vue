<template>
  <div class="min-h-screen h-full relative bg-gray-100 pb-20">
    <div class="fixed top-0 w-full">
      <Navbar />
    </div>
    <div class="max-w-5xl mx-auto px-5 pt-28">
      <NuxtPage />  
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'BisaXirim Support',
})
</script>