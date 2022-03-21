<script lang="ts" setup>
 import ResultIndicator from "./ResultIndicator.vue"
 import NumberSquare from "./NumberSquare.vue";
 import { AttemptInterface } from "../types";
 
 defineProps<{
     attempt: AttemptInterface,
     codeLength: number,
     showNumbers: boolean
 }>()
</script>

<template>
    <div
	class="flex max-w-screen-sm mx-auto justify-around items-center mb-5"
    >
	<div class="flex w-full mx-auto sm:justify-center justify-between">
	    <NumberSquare
		v-for="(n, j) in attempt.attempt"
		:key="j"
		:num="n"
		:codeLength="codeLength"
		:showNumbers="showNumbers"
		:class="(codeLength > 4) ? 'sm:mx-2' : 'mx-2'"
	    />
	    <div class="w-20 h-10 flex justify-center"
		 :class="(codeLength > 4) ? 'sm:ml-2' : 'ml-2'"
	    >
		<div class="flex items-end text-right"
		     :class="(codeLength > 4) ? 'sm:mx-2' : 'mx-2'"
		>
		    <div class="flex flex-col">
			<ResultIndicator :result="attempt.result[0]"/>
			<ResultIndicator :result="attempt.result[1]"/>
		    </div>

		    <div class="flex flex-col">
			<ResultIndicator :result="attempt.result[2]"/>
			<ResultIndicator :result="attempt.result[3]"/>
		    </div>
		</div>
		<div v-if="codeLength > 4"
		     class="flex items-end text-right">
		    <div class="flex flex-col">
			<ResultIndicator :result="attempt.result[4]"/>
			<ResultIndicator :result="attempt.result[5]"/>
		    </div>

		    <div v-if="codeLength > 6"
			 class="flex flex-col">
			<ResultIndicator :result="attempt.result[6]"/>
			<ResultIndicator :result="attempt.result[7]"/>
		    </div>
		</div>
	    </div>
	</div>
    </div>
</template>
