<template>
  {{ taskCount }} Tasks
  <v-list>
    <TaskItem
      v-for="(task, i) in tasks"
      :listNumber="i + 1"
      :task="task"
      :key="task.id"
    />
  </v-list>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTasksStore } from '@/stores/task';
import TaskItem from '@/components/TaskItem.vue';

const taskStore = useTasksStore();
const tasks = taskStore.tasks;

const taskCount = computed(() => tasks.length);
</script>