<script setup lang="ts">
import { ref } from "vue";
import Cart  from './Cart.vue';
import NameInput from "./NameInput.vue";


const props = defineProps<{ msg: string, listItems: number, show: boolean  }>();

console.log(props.listItems)

const items = new Array(props.listItems).fill(null).map((i, index) => `item ${index}`);

const count = ref(0);
const names = ref([]);
const time = ref(null)

const onNameAdded = (name, date) => {
  names.value.push(name);
  time.value = date;
  setTimeout(() => {
    time.value = null;
  },3000)

}

</script>


<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <div v-if="props.show">Ok so u want {{ listItems }} listed items?</div>
    <ul v-if="props.show">
      <li v-for="(item, key) of items" :key="key">
        <strong>{{ item }}</strong>
      </li>
    </ul>
    <div v-else>Click on show button</div>
    <button class="count" type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <div v-if="time">{{  time }}</div>
  <ul v-if="names.length" v-for="name in names">
    <li :key="name">{{name}}</li>
  </ul>

  <Cart />

  <NameInput @name-add="onNameAdded"/>

</template>

<style scoped>

</style>

<style scoped src="./HelloWorld.css">

</style>


