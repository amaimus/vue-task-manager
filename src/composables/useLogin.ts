import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { loginUser, logoutUser } from '@/services/authService';

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

  const logout = async () => {
    loading.value = true
    const success = await logoutUser();
    loading.value = false

    if (success) {
      userStore.logout();
      router.push('/');
    }
  };

  return {
    login,
    logout,
    loading,
  };
}