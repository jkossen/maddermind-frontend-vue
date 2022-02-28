<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const nrAttempts = route.params.nrAttempts
</script>

<template>
    <span
        class="mt-20 mb-10 w-10 h-10 mx-auto m-2 text-center flex items-center justify-around font-bold rounded-full"
        style="background-color: #5b2226; color: #fafafa">
    </span>

  <div class="rotate-180">
  <div v-for="j in 10" :key="j" class="flex max-w-screen-sm mx-auto justify-around items-center mb-4">
    <span v-for="i in 10" :key="i"
          class="w-10 h-10 text-center flex items-center justify-around font-bold"
          :class="(j <= 14-nrAttempts) ? 'g-' + (j-1) : 'r-0'"
    >
    </span>
  </div>  </div>

  <div class="flex  max-w-screen-sm mx-auto items-center justify-around">
  <span @click="router.push({name: 'GuessScreen', params: {level: 1}})"
      class="bg-green-500 cursor-pointer mt-20 mb-10 w-20 h-20 mx-auto m-2 text-center flex items-center justify-around font-bold rounded-full"
>
  </span>
  <span @click="router.push({name: 'GuessScreen', params: {level: 2}})"
      class="bg-orange-400 cursor-pointer mt-20 mb-10 w-20 h-20 mx-auto m-2 text-center flex items-center justify-around font-bold rounded-full"
>    </span>
  <span @click="router.push({name: 'GuessScreen', params: {level: 3}})"
      class="bg-red-800 cursor-pointer mt-20 mb-10 w-20 h-20 mx-auto m-2 text-center flex items-center justify-around font-bold rounded-full"
>    </span>
  </div>

</template>

<style scoped>

.g-10 {
  background-color: #d5d2ca;
}

.g-0 {
  background-color: #001219;
  color: #fafafa;
}

.g-1 {
  background-color: #005f73;
  color: #fafafa;
}

.g-2 {
  background-color: #0a9396;
  color: #fafafa;
}

.g-3 {
  background-color: #94d2bd;
  color: #fafafa;
}

.g-4 {
  background-color: #e9d8a6;
}

.g-5 {
  background-color: #ee9b00;
}

.g-6 {
  background-color: #ca6702;
}

.g-7 {
  background-color: #bb3e03;
  color: #fafafa;
}

.g-8 {
  background-color: #ae2012;
  color: #fafafa;
}

.g-9 {
  background-color: #9b2226;
  color: #fafafa;
}

.r-2 {
  background-color: #005f73;
}

.r-1 {
  background-color: #0a9396;
}

.r-0 {
  background-color: #d5d2ca;
}
</style>
