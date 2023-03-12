<template>
  <q-page>
    <create-habit />
    <habit-list />
  </q-page>
</template>

<script setup lang="ts">
import HabitList from 'src/components/HabitList.vue';
import CreateHabit from 'src/components/CreateHabit.vue';
</script>
