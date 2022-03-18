<script lang="ts" setup>
 import { ref } from "vue"
 import axios from "axios"
 import { useRoute, useRouter } from 'vue-router'
 import NumberSquare from "./NumberSquare.vue";
 import ResultLine from "./ResultLine.vue";
 import { AttemptInterface } from "../types";
 
 const router = useRouter()
 const route = useRoute()
 
 let codeLength = 4
 let showNumbers = ref<boolean>(false)
 const attempts = ref<AttemptInterface[]>([])
 const newAttempt = ref<Array<number>>([])
 const curCol = ref<number>(0)

 switch (route.params.level) {
     case '2':
	 codeLength = 6
	 break
     case '3':
	 codeLength = 8
	 break
     default:
	 codeLength = 4
 }

 for (let i = 0; i < codeLength; i++) {
     newAttempt.value[i] = 10
 }

 const checkAttempt = function () {
     for (let i = 0; i < codeLength; i++) {
	 if (newAttempt.value[i] == 10) {
	     return
	 }
     }

     const data = {
	 attempt: newAttempt.value
     }

     axios.post('/chk', data).then(result => {
	 attempts.value.unshift(result.data)

	 let score: number = 0
	 for (let r of result.data.result) {
	     score += parseInt(r)
	 }

	 if (score === codeLength * 2) {
	     router.push({
		 name: 'LevelCompleted', params: {
		     'level': route.params.level,
		     'nrAttempts': attempts.value.length
		 }
	     })
	 }

	 for (let i = 0; i < newAttempt.value.length; i++) {
	     newAttempt.value[i] = 10
	 }
	 curCol.value = 0
     })
 }

 const pickColor = function (i: number) {
     newAttempt.value[curCol.value] = i

     if (curCol.value < codeLength - 1) {
	 curCol.value++
     } else {
	 curCol.value = 0
     }
 }

 const toggleNumbers = function () {
     showNumbers.value = !showNumbers.value
 }
</script>

<template>
    <span
	class="mt-20 mb-10 w-10 h-10 mx-auto m-2 cursor-pointer text-center flex items-center justify-around font-bold rounded-full"
	style="background-color: #5b2226; color: #fafafa"
	@click="toggleNumbers()"
    ></span>
    <div class="flex max-w-screen-sm mx-auto justify-around items-center mb-10">
	<NumberSquare
	    v-for="i in 10"
	    :key="i - 1"
	    :num="i - 1"
	    :codeLength="codeLength"
	    :class="'g-' + (i - 1)"
	    :showNumbers="showNumbers"
	    @click="pickColor(i - 1)"
	/>
    </div>

    <div class="flex max-w-screen-sm mx-auto justify-around items-center mb-10 py-2">
	<div class="flex w-full mx-auto sm:justify-center justify-between">
	    <div
		v-for="i in codeLength"
		:key="i"
		class="w-10 h-15 flex flex-col"
		:class="(codeLength > 4) ? 'sm:mx-2' : 'mx-2'"
	    >
		<NumberSquare
		    :num="newAttempt[i - 1]"
		    :codeLength="codeLength"
		    :class="'g-' + newAttempt[i - 1]"
		    :showNumbers="showNumbers"
		/>

		<span v-if="curCol == i - 1" class="w-10 h-2 mt-2" style="background-color: #ee9b00;"></span>
	    </div>

	    <div class="w-20 h-10 flex justify-center" :class="(codeLength > 4) ? 'sm:ml-2' : 'ml-2'">
		<button
		    class="w-10 h-10 flex items-center justify-around font-bold bg-green-600 text-white rounded-full"
		    @click="checkAttempt"
		></button>
	    </div>
	</div>
    </div>

    <ResultLine
	v-for="(a, i) in attempts"
	:key="i"
	:attempt="a"
	:codeLength="codeLength"
	:showNumbers="showNumbers"
    />
</template>

<style>
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
     background-color: #94d2bd;
 }

 .r-0 {
     background-color: #d5d2ca;
 }
</style>
