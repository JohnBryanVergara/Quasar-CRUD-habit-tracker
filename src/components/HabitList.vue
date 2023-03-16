<template>
  <div class="q-pa-md bg-primary text-white">
    <div clickable v-ripple v-for="habit in habitStore.habits" :key="habit.id">
      <div class="row">
        <q-checkbox
          class="col-2"
          v-ripple
          v-model="habit.completed"
          @click="editHabit(habit.id, habit.title, habit.completed)"
        />
        <p class="col-6">{{ habit.title }}</p>
        <q-btn
          class="col-2"
          icon="fa-solid fa-trash"
          @click="deleteHabit(habit.id)"
        />

        <q-btn
          class="col-2"
          type="submit"
          icon="fa-regular fa-pen-to-square"
          @click="() => habitEditState().editToggle()"
        />
      </div>
      <div class="row" v-show="habitEditState().editStatus">
        <q-input class="col-10" v-model="newTitle" />
        <q-btn
          class="col-2"
          type="submit"
          icon="fa-solid fa-check"
          @click="editHabit(habit.id, newTitle, habit.completed)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useHabitStore } from 'src/stores/habit-store';

const habitStore = useHabitStore();
const newTitle = ref('');

const deleteHabit = (id: number) => {
  habitStore.remove(id);
};
const editHabit = (id: number, newTitle: string, completed: boolean) => {
  habitStore.edit(id, newTitle, completed);
};

function habitEditState() {
  const editStatus = ref(false);

  return {
    editStatus,
    editToggle: () => {
      editStatus.value = !editStatus.value;
    },
  };
}
</script>
