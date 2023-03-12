<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <div clickable v-ripple v-for="habit in habitStore.habits" :key="habit.id">
      <div class="row">
        <q-checkbox class="col-2" v-ripple v-model="isChecked" />
        <p class="col-8">{{ habit.title }}</p>
        <q-btn
          class="col-2"
          icon="fa-solid fa-trash"
          @click="deleteHabit(habit.id)"
        />
      </div>
      <div class="row">
        <q-input class="col-10" v-model="newTitle" />
        <q-btn
          class="col-2"
          type="submit"
          icon="fa-regular fa-pen-to-square"
          @click="editHabit(habit.id, newTitle)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useHabitStore } from 'src/stores/habit-store';
const newTitle = ref('');
const habitStore = useHabitStore();
const isChecked = ref('');

const deleteHabit = (id: number) => {
  habitStore.remove(id);
};
const editHabit = (id: number, newTitle: string) => {
  habitStore.edit(id, newTitle);
  habitStore.fetch();
};
</script>
