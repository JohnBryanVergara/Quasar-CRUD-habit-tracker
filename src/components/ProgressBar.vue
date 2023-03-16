<template>
  <div>
    <h3>Progress bar yan pre</h3>
    <q-linear-progress
      dark
      stripe
      rounded
      size="20px"
      :value="habitStore.habitsCheckedCount"
      color="red"
      class="q-mt-sm"
    />
  </div>
</template>

<script setup lang="ts">
import { useHabitStore } from 'src/stores/habit-store';
const habitStore = useHabitStore();
</script>
