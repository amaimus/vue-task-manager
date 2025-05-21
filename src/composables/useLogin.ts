import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { loginUser } from '@/services/authService';

export function useLogin() {
  const router = useRouter();
  const userStore = useUserStore();

  const login = async (username: string) => {
    const success = await loginUser(username);
    if (success) {
      userStore.login(username);
      router.push('/dashboard');
    }
  };

  return {
    login,
  };
}