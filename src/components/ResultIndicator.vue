<script lang="ts" setup>
defineProps({
  result: Number,
});
</script>

<template>
  <div
    :class="'r-' + result"
    class="w-5 h-5 border-1 border-gray-300 text-center"
  ></div>
</template>
