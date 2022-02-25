<script setup lang="ts">
import {ref} from "vue";
import axios from "axios"

const attempts: any = ref([])
const newAttempt: any = ref([10, 10, 10, 10])

const input: any = ref([])

const n1: any = ref()
const n2: any = ref()
const n3: any = ref()
const n4: any = ref()

let r1: any = ref(0)
let r2: any = ref(0)
let r3: any = ref(0)
let r4: any = ref(0)

let curCol:number = 0

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
    r1.value = result.data["result"][0]
    r2.value = result.data["result"][1]
    r3.value = result.data["result"][2]
    r4.value = result.data["result"][3]

    let i: number
    for (i=0; i<newAttempt.value.length; i++) {
      newAttempt.value[i] = 10
    }
    curCol = 0
  })
}

const h0: string = 'g-0'
const h1: string = 'g-1'
const h2: string = 'g-2'
const h3: string = 'g-3'

const pickColor = function(i: number) {
  if (curCol < newAttempt.value.length) {
    curCol++
  } else {
    curCol = 0
  }
  newAttempt.value[curCol-1] = i
}
</script>

<template>
  <h1 class="text-3xl font-bold mx-auto mb-10">Madder Mind</h1>

  <div class="flex mx-auto justify-between mb-10 cursor-pointer" style="width:32rem;">
    <span v-for="i in 10" :key="i" class="w-10 h-10" :class="'g-' + (i-1)" @click="pickColor(i-1)"></span>
  </div>

  <div class="flex mx-auto w-96 justify-between mb-10 border-gray-400 border-2 rounded-full px-10 py-2">
    <span v-for="i in 4" :key="i" class="w-10 h-10" :class="'g-' + newAttempt[i-1]"></span>
    <button @click="checkAttempt" class="bg-green-600 w-10 h-10 border-1 border-gray-400 px-3 rounded-full"></button>
  </div>

  <div class="flex w-72 h-20 mx-auto items-center justify-between items-center" v-for="a in attempts">
    <div class="flex w-full justify-between mr-5">
      <div v-for="n in a.attempt" class="flex justify-center items-center w-10 h-10" :class="'g-' + n"></div>
    </div>
    <div class="flex flex-col items-end text-right">
      <div class="flex">
        <div class="w-5 h-5 border-1 border-gray-300 text-center" :class="'r-' + a.result[0]">&nbsp;</div>
        <div class="w-5 h-5 border-1 border-gray-300 text-center" :class="'r-' + a.result[1]">&nbsp;</div>
      </div>

      <div class="flex">
        <div class="w-5 h-5 border-1 border-gray-300 text-center" :class="'r-' + a.result[2]">&nbsp;</div>
        <div class="w-5 h-5 border-1 border-gray-300 text-center" :class="'r-' + a.result[3]">&nbsp;</div>
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
}

.g-1 {
  background-color: #005f73;
}

.g-2 {
  background-color: #0a9396;
}

.g-3 {
  background-color: #94d2bd;
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
}

.g-8 {
  background-color: #ae2012;
}

.g-9 {
  background-color: #9b2226;
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
