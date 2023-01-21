<template>
  <div>
    second view
    <button @click="test">Click me</button>
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
import { callBackendTest } from '@/api/movie';
import { ref } from 'vue';

const message  = ref('');
const testArray = ref([]);

const test = async () => {
		const response = await callBackendTest();
    message.value = response.data.message;
    testArray.value = response.data.data;
}; 
</script>

<style scoped>

</style>