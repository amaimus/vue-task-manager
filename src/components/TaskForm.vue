<template>
  <v-form @submit.prevent="handleCreateTask">
    <v-text-field
      label="Título"
      v-model="form.title"
      required
      outlined
      dense
    />
    <v-select
      label="Prioridad"
      v-model="form.priority"
      :items="['low', 'medium', 'high']"
      required
      outlined
      dense
    />
    <v-select
      label="Estado"
      v-model="form.status"
      :items="['todo', 'in-progress', 'done']"
      required
      outlined
      dense
    />
    <v-btn type="submit" color="primary" block :disabled="!isFormValid || loading">
      <v-progress-circular
        v-if="loading"
        indeterminate
        size="20"
        color="white"
        class="mr-2"
      />
      {{ loading ? '' : 'Crear tarea' }}
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { useTasks } from '@/composables/useTasks';
import { useTaskForm } from '@/composables/useTaskForm';

const { form, isFormValid, resetForm } = useTaskForm();
const { createTask, loading } = useTasks();

const handleCreateTask = async () => {
  if (!isFormValid.value) return;

  createTask(form.value)
    .then(() => resetForm() )
    .catch((error) => {
      console.error('Error creating task:', error);
    });
};

</script>