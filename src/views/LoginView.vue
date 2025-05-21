<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const username = ref('');
const btnDisabled = ref(true);
const userStore = useUserStore();
const router = useRouter();

function handleLogin() {
  if (username.value.trim() === '') {
    return;
  }
  userStore.login(username.value);
  router.push('/dashboard');
}

watch(username, (newVal) => {
  btnDisabled.value = newVal.trim() === '';
});

</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" >
        <v-card>
          <v-card-title class="text-h5 text-center">
            Iniciar Sesión
          </v-card-title>

          <v-card-text>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
