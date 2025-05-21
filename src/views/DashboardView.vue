<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const username = computed(() => userStore.username);

</script>

<template>
  <main>
    <h2>Welcome back {{ username }}</h2>
  </main>
</template>


<style>
</style>
