import React from 'react';
import { Filter } from 'lucide-react';
import { useProject } from '../context/ProjectContext';

export function TaskFilters() {
  const { filterTasks } = useProject();
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = document.getElementById('status') as HTMLSelectElement;
    const priority = document.getElementById('priority') as HTMLSelectElement;
    const assignee = document.getElementById('assignee') as HTMLSelectElement;
    
    filterTasks(status.value, priority.value, assignee.value);
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center gap-2">
        <Filter className="h-5 w-5 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filtrer par :</span>
      </div>
      
      <select
        id="status"
        onChange={handleFilterChange}
        className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">Tous les statuts</option>
        <option value="todo">À faire</option>
        <option value="in-progress">En cours</option>
        <option value="completed">Terminé</option>
      </select>
      
      <select
        id="priority"
        onChange={handleFilterChange}
        className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">Toutes les priorités</option>
        <option value="high">Haute</option>
        <option value="medium">Moyenne</option>
        <option value="low">Basse</option>
      </select>
      
      <select
        id="assignee"
        onChange={handleFilterChange}
        className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">Tous les membres</option>
        <option value="assigned">Assigné à moi</option>
        <option value="unassigned">Non assigné</option>
      </select>
    </div>
  );
}