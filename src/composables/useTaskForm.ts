import { ref, computed } from 'vue';
import type { Task } from '@/types/task';

export function useTaskForm() { 
  const form = ref<Task>({
    id: crypto.randomUUID(),
    title: '',
    priority: 'low',
    status: 'todo',
    description: "description",
    dueDate: 'dueDate',
    tags: ['tags', 'tags'],
  });

  const isFormValid = computed(() => {
    const { title, priority, status } = form.value;
    return title && priority && status;
  });

  return {
    form,
    isFormValid,
  };
}
