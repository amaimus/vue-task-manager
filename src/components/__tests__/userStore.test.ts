import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useAuthStore } from '../../stores/auth';

describe('User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('Login correctly as user', () => {
    const store = useAuthStore();
    store.login('alejandro');
    expect(store.username).toBe('alejandro');
    expect(store.isAuthenticated).toBe(true);
  });

  it('Logout correctly', () => {
    const store = useAuthStore();
    store.login('alejandro');
    store.logout();
    expect(store.username).toBe('');
    expect(store.isAuthenticated).toBe(false);
  });
});
