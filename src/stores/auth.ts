import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: '',
    isAuthenticated: false
  }),
  actions: {
    login(name: string) {
      this.username = name;
      this.isAuthenticated = true;
      this.saveToLocalStorage()
    },
    logout() {
      this.username = '';
      this.isAuthenticated = false;
      this.removeFromLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem('auth', JSON.stringify({
        username: this.username,
        isAuthenticated: this.isAuthenticated
      }))
    },
    removeFromLocalStorage() {
      localStorage.removeItem('auth');
    },
    restoreFromLocalStorage() {
      const raw = localStorage.getItem('auth');
      if (!raw) return;

      try {
        const localStoreUser = JSON.parse(raw)
        this.username = localStoreUser.username || ''
        this.isAuthenticated = localStoreUser.isAuthenticated || false
      } catch (e) {
        console.error('Error 01 Failed to parse user from localStorage', e)
      }
    } 
  }
});