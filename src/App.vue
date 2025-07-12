<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

const show = ref(false)

const images = [
  '/vite.svg',
  '/src/assets/vue.svg'
]
const clickToggle = () => {
  show.value = !show.value;
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img :src="images[0]" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="images[1]" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <button @click="clickToggle">{{ show ? 'hide' : 'show'}}</button>
  <HelloWorld msg="Vite + Vue" :listItems="5" :show="show" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
