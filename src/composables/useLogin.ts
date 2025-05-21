import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { loginUser } from '@/services/authService';

export function useLogin() {
  const username = ref('');
  const btnDisabled = ref(true);
  const router = useRouter();
  const userStore = useUserStore();

  const handleLogin = async () => {
    if (username.value.trim() === '') return;

    const success = await loginUser(username.value);
    
    if (success) {
      userStore.login(username.value);
      router.push('/dashboard');
    }
  };

  watch(username, (newVal) => {
    btnDisabled.value = newVal.trim() === '';
  });

  return {
    username,
    btnDisabled,
    handleLogin,
  };
}