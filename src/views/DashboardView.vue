<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';
import { useLogin } from '@/composables/useLogin';

const userStore = useUserStore();
const username = computed(() => userStore.username);
const { logout } = useLogin();

</script>

<template>
  <main>
    <h2>Welcome back {{ username }}</h2>
    <button @click="logout">
      Log out
    </button>
  </main>
</template>


<style>
</style>
