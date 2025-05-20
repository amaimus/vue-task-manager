import { defineStore } from 'pinia';
import type { Task } from '@/types/task';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[]
  }),
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
    getTaskById(id: string) {
      return this.tasks.find(task => task.id === id);
    }
  }
});
