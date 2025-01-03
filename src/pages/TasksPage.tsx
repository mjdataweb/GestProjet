import React from 'react';
import { TaskBoard } from '../components/tasks/TaskBoard';
import { TaskFilters } from '../components/tasks/TaskFilters';
import { TaskHeader } from '../components/tasks/TaskHeader';

export function TasksPage() {
  return (
    <div className="flex-1 ml-64 p-8">
      <div className="max-w-7xl mx-auto">
        <TaskHeader />
        <TaskFilters />
        <TaskBoard />
      </div>
    </div>
  );
}