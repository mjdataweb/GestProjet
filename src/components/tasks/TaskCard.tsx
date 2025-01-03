import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { Task } from '../../types';
import { useTaskActions } from '../../hooks/useTaskActions';
import { getPriorityColor } from '../../utils/taskUtils';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const { handleStatusChange, handleDelete } = useTaskActions(task);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-medium text-gray-900">{task.title}</h4>
        <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
          {task.priority === 'high' ? 'Urgent' : task.priority === 'medium' ? 'Normal' : 'Faible'}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4">{task.description}</p>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{new Date(task.dueDate).toLocaleDateString('fr-FR')}</span>
        </div>

        {task.assignee && (
          <div className="flex items-center">
            <img
              src={task.assignee.avatar}
              alt={task.assignee.name}
              className="h-6 w-6 rounded-full mr-2"
            />
            <span className="text-gray-600">{task.assignee.name}</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleStatusChange}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Changer le statut
        </button>
        <button
          onClick={handleDelete}
          className="text-sm text-red-600 hover:text-red-700"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}