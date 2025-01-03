import React from 'react';
import { Calendar } from 'lucide-react';
import { useProject } from '../../context/ProjectContext';

export function TeamCalendar() {
  const { projects } = useProject();
  const currentProject = projects[0];

  const upcomingDeadlines = currentProject.tasks
    .filter(task => new Date(task.dueDate) > new Date())
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Échéances à venir</h2>
      
      <div className="space-y-4">
        {upcomingDeadlines.map(task => (
          <div key={task.id} className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-900">{task.title}</p>
              <p className="text-sm text-gray-500">
                {new Date(task.dueDate).toLocaleDateString('fr-FR')}
              </p>
              {task.assignee && (
                <div className="mt-1 flex items-center">
                  <img
                    src={task.assignee.avatar}
                    alt={task.assignee.name}
                    className="h-5 w-5 rounded-full"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    {task.assignee.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}