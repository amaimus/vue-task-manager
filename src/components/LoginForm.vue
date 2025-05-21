<template>
  <v-form @submit.prevent="handleLogin">
    <v-text-field
      label="Usuario"
      v-model="username"
      required
      outlined
      dense
    />
    <v-btn type="submit" color="primary" block :disabled="btnDisabled">
      Iniciar sesión
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { useLoginForm } from '@/composables/useLoginForm';
import { useLogin } from '@/composables/useLogin';

const { username, btnDisabled } = useLoginForm();
const { login } = useLogin();

const handleLogin = () => {
  if (username.value.trim() === '') return;
  login(username.value);
};
</script>