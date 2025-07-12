<script setup lang="ts">
import { ref, defineEmits } from 'vue'
const name = ref('');
const $emit = defineEmits<{
 (e: 'name-add', name: string, time: Date): void
}>();
const handleSubmit = (e: Event) => {
    e.preventDefault();
    $emit('name-add', name.value, new Date());
    name.value = ''
}
</script>
<template>
    <div>
        <form @submit="handleSubmit">
        <label for="name-input">Name:</label>
        <input v-model="name" id="name-input"/>
        <div>{{ name }}</div>
        <button type="submit">add</button>
    </form>
    </div>
</template>