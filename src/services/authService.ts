export async function loginUser(username: string): Promise<boolean> {
  // Simulación de login
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(username.trim() !== '');
    }, 3000);
  });
}
