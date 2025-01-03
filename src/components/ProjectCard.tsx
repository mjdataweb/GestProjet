import React from 'react';
import { Users, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const completedTasks = project.tasks.filter(task => task.status === 'completed').length;
  const progress = (completedTasks / project.tasks.length) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progression</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center text-gray-500">
          <Users className="h-4 w-4 mr-1" />
          <span className="text-sm">{project.teamMembers.length} membres</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">
            Créé le {new Date(project.createdAt).toLocaleDateString('fr-FR')}
          </span>
        </div>
      </div>
    </div>
  );
}