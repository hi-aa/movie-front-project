<template>
  <div>
    <button @click="test">Call Not DB API</button>&nbsp;
    <button @click="test2">Call DB API</button>
    <div style="border:3px solid black; margin: 10px;">
      <h2>Response</h2>
      <ul>
        <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { callBackendTest, callBackendDBTest } from '@/api/movie';
import { ref } from 'vue';

const arr = ref([]);

const test = async () => {
		const response = await callBackendTest();
    arr.value = response.data;
}; 
const test2 = async ()=> {
	const response = await callBackendDBTest();
  arr.value = response.data;
};
</script>

<style scoped>

</style>