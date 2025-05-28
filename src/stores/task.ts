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
    updateTask(updatedTask: Task) {
      const index = this.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
      }
    },
    getTaskById(id: string) {
      return this.tasks.find(task => task.id === id);
    }
  }
});
