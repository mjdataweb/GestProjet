import React from 'react';
import { CheckCircle2, Clock, AlertTriangle, BarChart2 } from 'lucide-react';
import { Project } from '../types';

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
}

function MetricCard({ icon, label, value, color }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center">
        <div className={`${color} p-3 rounded-lg`}>
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

interface ProjectMetricsProps {
  project: Project;
}

export function ProjectMetrics({ project }: ProjectMetricsProps) {
  const completedTasks = project.tasks.filter(t => t.status === 'completed').length;
  const inProgressTasks = project.tasks.filter(t => t.status === 'in-progress').length;
  const urgentTasks = project.tasks.filter(t => t.priority === 'high').length;
  const progress = Math.round((completedTasks / project.tasks.length) * 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <MetricCard
        icon={<CheckCircle2 className="h-6 w-6 text-green-600" />}
        label="Tâches terminées"
        value={completedTasks}
        color="bg-green-50"
      />
      <MetricCard
        icon={<Clock className="h-6 w-6 text-blue-600" />}
        label="En cours"
        value={inProgressTasks}
        color="bg-blue-50"
      />
      <MetricCard
        icon={<AlertTriangle className="h-6 w-6 text-orange-600" />}
        label="Tâches urgentes"
        value={urgentTasks}
        color="bg-orange-50"
      />
      <MetricCard
        icon={<BarChart2 className="h-6 w-6 text-purple-600" />}
        label="Progression globale"
        value={`${progress}%`}
        color="bg-purple-50"
      />
    </div>
  );
}