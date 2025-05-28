import { ref } from 'vue';
import type { Task } from '@/types/task';
import { create } from '@/api/taskApi';
import { useTasksStore } from '@/stores/task';

export function useTasks() {
  const loading = ref(false);
  const tasksStore = useTasksStore();

  const createTask = async (task:Task) => {
    loading.value = true

    try {
      const createdTask = await create(task)
      tasksStore.addTask(createdTask);
      console.log('Task created successfully:', createdTask);
      return createdTask;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  return {
    createTask,
    loading
  };
}
