import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { loginUser } from '@/services/authService';

export function useLogin() {
  const router = useRouter();
  const userStore = useUserStore();
  const loading = ref(false);

  const login = async (username: string) => {
    loading.value = true
    const success = await loginUser(username);
    loading.value = false
    
    if (success) {
      userStore.login(username);
      router.push('/dashboard');
    }
  };

  return {
    login,
    loading,
  };
}