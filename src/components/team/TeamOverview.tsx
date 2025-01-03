import React from 'react';
import { Users, Briefcase, Target } from 'lucide-react';
import { useProject } from '../../context/ProjectContext';

export function TeamOverview() {
  const { projects } = useProject();
  const currentProject = projects[0];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Vue d'ensemble</h2>
      
      <div className="space-y-6">
        <div className="flex items-center">
          <div className="bg-blue-50 p-3 rounded-lg">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">Membres actifs</p>
            <p className="text-xl font-semibold text-gray-900">
              {currentProject.teamMembers.length}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-green-50 p-3 rounded-lg">
            <Briefcase className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">Projets en cours</p>
            <p className="text-xl font-semibold text-gray-900">
              {projects.length}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-purple-50 p-3 rounded-lg">
            <Target className="h-6 w-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">Tâches complétées</p>
            <p className="text-xl font-semibold text-gray-900">
              {currentProject.tasks.filter(t => t.status === 'completed').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}