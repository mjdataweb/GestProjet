import React, { useState } from 'react';
import { Header } from './Header';
import { ProjectCard } from './ProjectCard';
import { TaskCard } from './TaskCard';
import { TeamSection } from './TeamSection';
import { ProjectMetrics } from './ProjectMetrics';
import { TaskFilters } from './TaskFilters';
import { AddTaskModal } from './AddTaskModal';
import { useProject } from '../context/ProjectContext';

export function ProjectDashboard() {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const { projects } = useProject();
  const currentProject = projects[0];

  return (
    <div className="flex-1 ml-64 p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <ProjectMetrics project={currentProject} />
        <TeamSection teamMembers={currentProject.teamMembers} />
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Projets actifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard project={currentProject} />
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Tâches récentes</h2>
            <button
              onClick={() => setIsAddTaskModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Nouvelle tâche
            </button>
          </div>
          <TaskFilters />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProject.tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </section>
      </div>

      <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
      />
    </div>
  );
}