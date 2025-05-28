import type { Task } from '../types/task';

export async function create(task: Task): Promise<Task> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isValid = task.status !== 'done' && task.title.trim() !== '';
      if (isValid) {
        resolve(task);
      } else {
        reject(new Error('Error, no se pudo crear la tarea'));
      }
    }, 1000);
  });
}

export async function update(task: Task): Promise<Task> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isValid = task.id && task.status && task.title.trim() !== '';
      if (isValid) {
        resolve(task);
      } else {
        reject(new Error('Error, no se pudo actualizar la tarea'));
      }
    }, 1000);
  });
}