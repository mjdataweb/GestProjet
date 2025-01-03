import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useProject } from '../../context/ProjectContext';

export function TeamStats() {
  const { projects } = useProject();
  const currentProject = projects[0];

  const tasksByMember = currentProject.teamMembers.map(member => ({
    name: member.name,
    completed: currentProject.tasks.filter(t => t.assignee?.id === member.id && t.status === 'completed').length,
    inProgress: currentProject.tasks.filter(t => t.assignee?.id === member.id && t.status === 'in-progress').length,
    todo: currentProject.tasks.filter(t => t.assignee?.id === member.id && t.status === 'todo').length,
  }));

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Statistiques de l'équipe</h2>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={tasksByMember}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completed" name="Terminées" fill="#10B981" />
            <Bar dataKey="inProgress" name="En cours" fill="#6366F1" />
            <Bar dataKey="todo" name="À faire" fill="#9CA3AF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}