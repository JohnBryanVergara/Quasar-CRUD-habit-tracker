import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Habit } from 'src/components/models';

interface HabitState {
  habits: Habit[];
}

export const useHabitStore = defineStore('habit', {
  state: (): HabitState => ({
    habits: [],
  }),

  getters: {
    habitsCheckedCount({ habits }) {
      const checkedCount = habits.filter((habit) => habit.completed).length;
      return checkedCount / habits.length;
    },
  },

  actions: {
    async fetch() {
      const res = await api.get('/habits');
      this.habits = res.data;
    },
    async create(habit) {
      const res = await api.post('/habits', habit);
      this.habits.push(res.data);
    },
    async remove(id) {
      await api.delete(`/habits/${id}`);
      this.habits = this.habits.filter((habit) => habit.id !== id);
    },
    async edit(id, newTitle, completed) {
      await api.put(`/habits/${id}`, {
        title: newTitle,
        completed,
      });
      this.habits = this.habits.map((habit) => {
        if (habit.id == id) {
          habit.title = newTitle;
          habit.completed = completed;
        }
        return habit;
      });
    },
  },
});
