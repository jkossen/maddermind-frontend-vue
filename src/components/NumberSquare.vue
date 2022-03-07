<script lang="ts" setup>
defineProps({
  num: Number,
  codeLength: Number,
  showNumbers: Boolean
})
</script>

<template>
  <div :class="'g-' + num"
       class="w-10 h-10 flex items-center justify-center font-bold">
    <span v-if="showNumbers && num < 10">{{ num }}</span>
  </div>
</template>
