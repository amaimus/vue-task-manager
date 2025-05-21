import { ref, watch } from 'vue';

export function useLoginForm() {
  const username = ref('');
  const btnDisabled = ref(true);

  watch(username, (newVal) => {
    btnDisabled.value = newVal.trim() === '';
  });

  return {
    username,
    btnDisabled,
  };
}
