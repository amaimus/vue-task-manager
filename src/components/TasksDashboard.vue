<template>
  {{ taskCount }} Tasks
  <v-row>
    <v-col v-for="(task, i) in tasks" :key="task.id" cols="12" md="6">
      <TaskItem
        :listNumber="i + 1"
        :task="task"
        @changeStatus="handleChangeStatus"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTasksStore } from '@/stores/task';
import TaskItem from '@/components/TaskItem.vue';
import { useTasks } from '@/composables/useTasks';
import type { Task } from '@/types/task';

const taskStore = useTasksStore();
const tasks = taskStore.tasks;
const { updateTaskStatus } = useTasks();

const taskCount = computed(() => tasks.length);

const handleChangeStatus = (task: Task) => {
  updateTaskStatus(task);
  console.log(`Changing status for task ID: ${task.id}`);
};
</script>