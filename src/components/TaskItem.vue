<template>
  <v-card :color="cardBackgroundColor" variant="elevated" class="mx-auto">
    <div class="task-hover pa-2 rounded ">
      <v-card-item>
        <div class="text-overline mb-1 text-h4"> {{ task.status }} </div>
        <div class="text-h6 mb-1"> {{ taskSummary}} </div>
        <div class="text-caption"> {{ task.description }}</div>
      </v-card-item>
      <v-card-actions>
        <v-btn @click="$emit('changeStatus', task)"class="ma-2">
          {{ cardButtonText }}
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Task } from '@/types/task';

const statusBackgroundColors = {
  'todo': 'primary',
  'in-progress': 'secondary',
  'done': 'success',
}

const actionButtonText = {
  'todo': 'Start Task',
  'in-progress': 'Complete Task',
  'done': 'Reopen Task',
}

const cardBackgroundColor = computed(() => {
  return statusBackgroundColors[props.task.status] || 'grey';
}); 

const cardButtonText = computed(() => {
  return actionButtonText[props.task.status] || 'Action';
});


const props = defineProps<{
  listNumber: number;
  task: Task;
}>();

import type { ComputedRef } from 'vue';

const taskSummary: ComputedRef<string> = computed(() => {
  return `#${props.listNumber} - ${props.task.title}`;
});
</script>
