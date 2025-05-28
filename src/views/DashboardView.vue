<script setup lang="ts">
import CurrentUserPanel from '@/components/CurrentUserPanel.vue';
import TaskForm from '@/components/TaskForm.vue';

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <CurrentUserPanel />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <TaskForm />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!-- <TasksDashboard /> -->
      </v-col>
    </v-row>
  </v-container>
</template>
