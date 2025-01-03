import { useState } from 'react';
import { useProject } from '../context/ProjectContext';
import { Task } from '../types';

interface TaskFilters {
  search: string;
  status: string;
  priority: string;
  assignee: string;
  sortBy: 'dueDate' | 'priority';
}

export function useTaskFilters() {
  const [filters, setFilters] = useState<TaskFilters>({
    search: '',
    status: 'all',
    priority: 'all',
    assignee: 'all',
    sortBy: 'dueDate',
  });

  const updateFilters = (newFilters: Partial<TaskFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const filterTasks = (tasks: Task[]): Task[] => {
    return tasks
      .filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                            task.description.toLowerCase().includes(filters.search.toLowerCase());
        const matchesStatus = filters.status === 'all' || task.status === filters.status;
        const matchesPriority = filters.priority === 'all' || task.priority === filters.priority;
        const matchesAssignee = filters.assignee === 'all' ||
                               (filters.assignee === 'unassigned' && !task.assignee) ||
                               (filters.assignee === 'me' && task.assignee?.id === 'current-user-id');
        
        return matchesSearch && matchesStatus && matchesPriority && matchesAssignee;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'dueDate') {
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        } else {
          const priorityOrder = { high: 0, medium: 1, low: 2 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
      });
  };

  return {
    filters,
    updateFilters,
    filterTasks,
  };
}