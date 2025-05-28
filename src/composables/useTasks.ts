import { ref } from 'vue';
import type { Task } from '@/types/task';
import { create, update } from '@/api/taskApi';
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

  const updateTaskStatus = async (task:Task) => {
    loading.value = true

    try {
      const newStatus = nextTaskStatus[task.status] || 'todo';
          
      const updatedTask = await update({
        ...task,
        status: newStatus
      })
      tasksStore.updateTask(updatedTask);
      console.log('Task updated successfully:', updatedTask);
      return updatedTask;
    } catch (error) {
      console.error('Error updatating task status:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const nextTaskStatus: Record<Task['status'], Task['status']> = {
    'todo': 'in-progress',
    'in-progress': 'done',
    'done': 'todo'
  }

  return {
    createTask,
    updateTaskStatus,
    loading,
  };
}
