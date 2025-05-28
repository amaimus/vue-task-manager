import { ref, watch } from 'vue';
import type { Task } from '@/types/task';
import { create } from '@/api/taskApi';

export function useTasks() {
  const loading = ref(false);

  const createTask = async (task:Task) => {
    loading.value = true

    try {
      const createdTask = await create(task)
      // Add createdTask to pinia here
      console.log('Task created successfully:', createdTask);
    } catch (error) {
      console.error('Error creating task:', error);
    } finally {
      loading.value = false;
    }
  };

  return {
    createTask,
    loading
  };
}
