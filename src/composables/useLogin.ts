import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { loginUser, logoutUser } from '@/api/authApi';

export function useLogin() {
  const router = useRouter();
  const authStore = useAuthStore();
  const loading = ref(false);

  const login = async (username: string) => {
    loading.value = true
    const success = await loginUser(username);
    loading.value = false
    
    if (success) {
      authStore.login(username);
      router.push('/dashboard');
    }
  };

  const logout = async () => {
    loading.value = true
    const success = await logoutUser();
    loading.value = false

    if (success) {
      authStore.logout();
      router.push('/');
    }
  };

  return {
    login,
    logout,
    loading,
  };
}