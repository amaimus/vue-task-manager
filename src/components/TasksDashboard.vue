<template>
  {{ taskCount }} Tasks
  <v-list>
    <v-list-item v-for="task in tasks" :key="task.id">
      <v-list-item-content>
        <v-list-item-title>{{ task.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTasksStore } from '@/stores/task';

const taskStore = useTasksStore();
const tasks = taskStore.tasks;

const taskCount = computed(() => tasks.length);
</script>