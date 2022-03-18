<script lang="ts" setup>
 const props = defineProps<{
     num: number,
     codeLength: number,
     showNumbers: boolean,
     cursor: string
 }>()

 let curs = ''
 if (props.cursor != undefined) {
     curs = 'cursor-' + props.cursor
 }
 
</script>

<template>
  <div :class="'g-' + num + ' ' + curs"
       class="w-10 h-10 flex items-center justify-center font-bold">
    <span v-if="showNumbers && num < 10">{{ num }}</span>
  </div>
</template>
