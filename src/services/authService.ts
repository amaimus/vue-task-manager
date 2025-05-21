export async function loginUser(username: string): Promise<boolean> {
  // Simulación de login
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(username.trim() !== '');
    }, 3000);
  });
}

export async function logoutUser(): Promise<boolean> {
  // Simulación de logout
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 3000);
  });
}