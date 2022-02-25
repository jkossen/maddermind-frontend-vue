<script lang="ts" setup>
import {ref} from "vue";
import axios from "axios"

const props = defineProps({
  showNumbers: Boolean
})

const codeLength = 4
const attempts: any = ref([])
const newAttempt: any = ref([])

let i: number
for (i = 0; i < codeLength; i++) {
  newAttempt.value[i] = 10
}

let curCol: number = 0

const checkAttempt = function () {
  const instance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 1000,
  })

  const data = {
    Attempt: newAttempt.value
  }

  instance.post('/chk', data).then(result => {
    attempts.value.unshift(result.data)

    let i: number
    for (i = 0; i < newAttempt.value.length; i++) {
      newAttempt.value[i] = 10
    }
    curCol = 0
  })
}

const pickColor = function (i: number) {
  newAttempt.value[curCol] = i

  if (curCol < codeLength - 1) {
    curCol++
  } else {
    curCol = 0
  }
}
</script>

<template>
  <h1 class="text-3xl font-bold mx-auto mb-10">Madder Mind</h1>

  <div class="flex mx-auto justify-between items-center mb-10 cursor-pointer" style="width:32rem;">
    <span v-for="i in 10" :key="i"
          :class="'g-' + (i-1)"
          class="w-10 h-10 text-center flex items-center justify-around font-bold"
          @click="pickColor(i-1)"
    ><span v-if="showNumbers">{{ i - 1 }}</span></span>
  </div>

  <div class="flex mx-auto w-96 justify-between mb-10 border-gray-400 border-2 rounded-full px-10 py-2">
    <span v-for="i in codeLength" :key="i"
          :class="'g-' + newAttempt[i-1]"
          class="w-10 h-10 flex items-center justify-around font-bold">
      <span v-if="showNumbers && newAttempt[i-1] < 10">{{ newAttempt[i - 1] }}</span>
    </span>
    <button class="bg-green-600 w-10 h-10 border-1 border-gray-400 px-3 rounded-full" @click="checkAttempt"></button>
  </div>

  <div v-for="a in attempts" class="flex w-72 h-20 mx-auto items-center justify-between items-center">
    <div class="flex w-full justify-between mr-5">
      <div v-for="n in a.attempt"
           :class="'g-' + n"
           class="flex justify-center items-center w-10 h-10 font-bold">
        <span v-if="showNumbers">{{ n }}</span>
      </div>
    </div>
    <div class="flex items-end text-right">
      <div class="flex flex-col">
        <div :class="'r-' + a.result[0]" class="w-5 h-5 border-1 border-gray-300 text-center">&nbsp;</div>
        <div :class="'r-' + a.result[1]" class="w-5 h-5 border-1 border-gray-300 text-center">&nbsp;</div>
      </div>

      <div class="flex flex-col">
        <div :class="'r-' + a.result[2]" class="w-5 h-5 border-1 border-gray-300 text-center">&nbsp;</div>
        <div :class="'r-' + a.result[3]" class="w-5 h-5 border-1 border-gray-300 text-center">&nbsp;</div>
      </div>
    </div>
    <div v-if="a.result.length > 4"
         class="flex items-end text-right">
      <div class="flex flex-col">
        <div :class="'r-' + a.result[4]" class="w-5 h-5 border-1 border-gray-300 text-center">&nbsp;</div>
        <div :class="'r-' + a.result[5]" class="w-5 h-5 border-1 border-gray-300 text-center">&nbsp;</div>
      </div>

      <div v-if="a.result.length > 6"
           class="flex flex-col">
        <div :class="'r-' + a.result[6]" class="w-5 h-5 border-1 border-gray-300 text-center">&nbsp;</div>
        <div :class="'r-' + a.result[7]" class="w-5 h-5 border-1 border-gray-300 text-center">&nbsp;</div>
      </div>
    </div>
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
  background-color: #94d2bd;
}
</style>