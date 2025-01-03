import React from 'react';
import { Calendar, User, Trash2 } from 'lucide-react';
import { Task } from '../types';
import { useProject } from '../context/ProjectContext';

interface TaskCardProps {
  task: Task;
}

const priorityColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

const statusColors = {
  todo: 'bg-gray-100 text-gray-800',
  'in-progress': 'bg-purple-100 text-purple-800',
  completed: 'bg-green-100 text-green-800',
};

const priorityLabels = {
  low: 'Basse',
  medium: 'Moyenne',
  high: 'Haute',
};

const statusLabels = {
  todo: 'À faire',
  'in-progress': 'En cours',
  completed: 'Terminé',
};

export function TaskCard({ task }: TaskCardProps) {
  const { updateTask, deleteTask } = useProject();

  const handleStatusChange = () => {
    const statuses: Task['status'][] = ['todo', 'in-progress', 'completed'];
    const currentIndex = statuses.indexOf(task.status);
    const nextStatus = statuses[(currentIndex + 1) % statuses.length];
    updateTask(task.id, { status: nextStatus });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium text-gray-900">{task.title}</h3>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs ${priorityColors[task.priority]}`}>
            {priorityLabels[task.priority]}
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-gray-400 hover:text-red-500"
            title="Supprimer la tâche"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{task.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{new Date(task.dueDate).toLocaleDateString('fr-FR')}</span>
        </div>
        {task.assignee && (
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1 text-gray-500" />
            <span className="text-sm text-gray-600">{task.assignee.name}</span>
          </div>
        )}
      </div>
      <div className="mt-3">
        <span
          onClick={handleStatusChange}
          className={`px-2 py-1 rounded-full text-xs cursor-pointer ${statusColors[task.status]}`}
          title="Cliquer pour changer le statut"
        >
          {statusLabels[task.status]}
        </span>
      </div>
    </div>
  );
}