<template>
  <v-list-item>
    <div class="task-hover pa-2 rounded ">
      <v-list-item-content>
        <v-list-item-title>{{ taskSummary }}</v-list-item-title>
        <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ task.status }}</v-list-item-subtitle>
      </v-list-item-content>
    </div>
  </v-list-item>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Task } from '@/types/task';

const props = defineProps<{
  listNumber: number;
  task: Task;
}>();

import type { ComputedRef } from 'vue';

const taskSummary: ComputedRef<string> = computed(() => {
  return `#${props.listNumber} - ${props.task.title}`;
});
</script>

<style scoped>
.task-hover{
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.task-hover:hover {
  background-color: #c4c4c4;
}
</style>