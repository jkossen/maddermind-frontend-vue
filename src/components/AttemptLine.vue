<script setup lang="ts">
</script>

<template>

  <div class="flex mx-auto w-64 justify-between mb-10">
    <input type="text" class="w-1/6 border-2 border-gray-300 text-center rounded-full"/>
    <input type="text" class="w-1/6 border-2 border-gray-300 text-center rounded-full"/>
    <input type="text" class="w-1/6 border-2 border-gray-300 text-center rounded-full"/>
    <input type="text" class="w-1/6 border-2 border-gray-300 text-center rounded-full"/>
  </div>


  <div class="w-48 mx-auto">
    <div class="flex mx-auto w-32">
      <div class="w-1/4 border-2 border-gray-300">{{ r1 }}</div>
      <div class="w-1/4 border-2 border-gray-300">{{ r2 }}</div>
    </div>

    <div class="flex mx-auto w-32">
      <div class="w-1/4 border-2 border-gray-300">{{ r3 }}</div>
      <div class="w-1/4 border-2 border-gray-300">{{ r4 }}</div>
    </div>
  </div>
</template>