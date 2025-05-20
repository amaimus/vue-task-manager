import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useTasksStore } from '../../stores/task';
import type { Task } from '@/types/task';

const MockedTask: Task = {
  id: '12',
  title: 'Test Task',
  description: 'This is a test task',
  status: 'todo',
  priority: 'high',
  dueDate: '2025-01-01',
  tags: ['important', 'development'],
};

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('Store starts with empty tasks list', () => {
    const store = useTasksStore();
    expect(store.tasks).toEqual([]);
  });

  it('add a task correctly to store', () => {
    const store = useTasksStore();
    store.addTask(MockedTask);
    expect(store.tasks).toHaveLength(1);
    expect(store.tasks[0]).toEqual(MockedTask);
  });

  it('get task by Id', () => {
    const store = useTasksStore();

    store.addTask(MockedTask);
    const taskFound = store.getTaskById('12');
    expect(taskFound).toEqual(MockedTask);
  });

  it('returns undefined if TaskId not found', () => {
    const store = useTasksStore();
    const result = store.getTaskById('non-existent-id');
    expect(result).toBeUndefined();
  });
});
