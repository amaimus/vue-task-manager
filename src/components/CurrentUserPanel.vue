// base vue template for the current user panel
<template>
  <div class="current-user-panel">
    <h2>Welcome back <span class="text-primary">{{ username }}</span></h2>
    <v-btn type="submit" color="primary" @click="logout">
      <v-progress-circular
        v-if="loading"
        indeterminate
        size="20"
        color="white"
        class="mr-2"
      />
      {{ loading ? '' : 'Logout' }}
    </v-btn>
  </div>    
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useLogin } from '@/composables/useLogin';
const authStore = useAuthStore();
const username = authStore.username;
const { logout, loading } = useLogin();
</script>