<script setup lang="ts">

import { ref, computed } from 'vue';

const cart = ref(0);
const hovering = ref(false)
const refined = computed(() =>  `CART ${cart.value}`)

const onAdd = () => {
    cart.value++;
}

const onMouseOver = () => {
    hovering.value = true;
    if (cart.value > 0)
        cart.value--;
}

const onMouseOut = () => {
    hovering.value = false;
}



</script>

<template>
    <div @mouseover="onMouseOver" @mouseout="onMouseOut" class="cart">{{ refined }}</div>
    <button :class="{'grey-out' : hovering }" @click="onAdd">Add</button>
    </template>

    <style scoped src="./Cart.css">
    </style>