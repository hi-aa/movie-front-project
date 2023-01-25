<template>
  <div>
    second view
    <br/>
    <button @click="test">Call Not DB API</button>
    <br/>
    <button @click="test2">Call DB API</button>
    <h2>Response Message</h2>
    <span>
      {{ message }}
    </span>
    <h2>Response Data</h2>
    <ul>
      <li v-for="(item, index) in testArray" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { callBackendTest, callBackendDBTest } from '@/api/movie';
import { ref } from 'vue';

const message  = ref('');
const testArray = ref([]);

const test = async () => {
		const response = await callBackendTest();
    message.value = response.data.message;
    testArray.value = response.data.data;
}; 
const test2 = async ()=> {
	const response = await callBackendDBTest();
  message.value = response.data.message;
  testArray.value = response.data.data;
};
</script>

<style scoped>

</style>