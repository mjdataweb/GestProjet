import { Task } from '../types';

export function getPriorityColor(priority: Task['priority']): string {
  const colors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-blue-100 text-blue-800',
  };
  return colors[priority];
}