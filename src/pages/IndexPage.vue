<template>
  <q-page>
    <progress-bar />
    <create-habit />
    <habit-list />
  </q-page>
</template>

<script setup lang="ts">
import HabitList from 'src/components/HabitList.vue';
import CreateHabit from 'src/components/CreateHabit.vue';
import ProgressBar from 'src/components/ProgressBar.vue';
</script>
