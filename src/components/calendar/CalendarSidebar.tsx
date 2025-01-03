import React from 'react';
import { useProject } from '../../context/ProjectContext';
import { Clock, Calendar as CalendarIcon } from 'lucide-react';

export function CalendarSidebar() {
  const { projects } = useProject();
  const today = new Date();
  
  const upcomingTasks = projects[0].tasks
    .filter(task => new Date(task.dueDate) >= today)
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 5);

  return (
    <div className="w-80">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="font-semibold text-gray-900 mb-4">Prochaines échéances</h2>
        <div className="space-y-4">
          {upcomingTasks.map(task => (
            <div key={task.id} className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${
                task.priority === 'high' ? 'bg-red-100' :
                task.priority === 'medium' ? 'bg-yellow-100' :
                'bg-blue-100'
              }`}>
                <Clock className={`h-5 w-5 ${
                  task.priority === 'high' ? 'text-red-600' :
                  task.priority === 'medium' ? 'text-yellow-600' :
                  'text-blue-600'
                }`} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{task.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(task.dueDate).toLocaleDateString('fr-FR')}
                </p>
                {task.assignee && (
                  <div className="mt-1 flex items-center">
                    <img
                      src={task.assignee.avatar}
                      alt={task.assignee.name}
                      className="h-5 w-5 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      {task.assignee.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}