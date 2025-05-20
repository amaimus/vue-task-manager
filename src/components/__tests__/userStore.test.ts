import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useUserStore } from '../../stores/user';

describe('User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('Login correctly as user', () => {
    const store = useUserStore();
    store.login('alejandro');
    expect(store.username).toBe('alejandro');
    expect(store.isAuthenticated).toBe(true);
  });

  it('Logout correctly', () => {
    const store = useUserStore();
    store.login('alejandro');
    store.logout();
    expect(store.username).toBe('');
    expect(store.isAuthenticated).toBe(false);
  });
});
