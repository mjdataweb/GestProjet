import React from 'react';
import { TaskColumn } from './TaskColumn';
import { useProject } from '../../context/ProjectContext';
import { useTaskFilters } from '../../hooks/useTaskFilters';
import { Task } from '../../types';

export function TaskBoard() {
  const { projects } = useProject();
  const { filterTasks } = useTaskFilters();
  const allTasks = filterTasks(projects[0].tasks);

  const columns: { title: string; status: Task['status']; tasks: Task[] }[] = [
    {
      title: 'À faire',
      status: 'todo',
      tasks: allTasks.filter(task => task.status === 'todo'),
    },
    {
      title: 'En cours',
      status: 'in-progress',
      tasks: allTasks.filter(task => task.status === 'in-progress'),
    },
    {
      title: 'Terminé',
      status: 'completed',
      tasks: allTasks.filter(task => task.status === 'completed'),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {columns.map(column => (
        <TaskColumn key={column.status} {...column} />
      ))}
    </div>
  );
}