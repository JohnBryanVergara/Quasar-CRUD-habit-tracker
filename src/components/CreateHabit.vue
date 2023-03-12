<template>
  <form
    @submit.prevent="addHabit"
    class="q-my-xl q-mx-auto"
    style="max-width: 318px"
  >
    <q-input outlined v-model="title" label="Outlined" />
    <q-btn type="submit" color="black" class="full-width" label="Add" />
  </form>
</template>

<script setup lang="ts">
import { useHabitStore } from 'src/stores/habit-store';
import { ref } from 'vue';

const title = ref('');
const habitStore = useHabitStore();

const addHabit = () => {
  habitStore.create({ title: title.value, completed: false });
};
</script>
