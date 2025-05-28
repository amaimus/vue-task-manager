import { ref, computed } from 'vue';
import type { Task } from '@/types/task';

export function useTaskForm() { 
  const initialForm = (): Task => ({
    id: crypto.randomUUID(),
    title: '',
    priority: 'low',
    status: 'todo',
    description: "description",
    dueDate: 'dueDate',
    tags: ['tags', 'tags'],
  })


  const form = ref<Task>(initialForm());

  const isFormValid = computed(() => {
    const { title, priority, status } = form.value;
    return title && priority && status;
  });

  const resetForm = () => {
    form.value = initialForm();
  };


  return {
    form,
    isFormValid,
    resetForm,
  };
}
