import React from 'react';
import { Filter, SortAsc, Search } from 'lucide-react';
import { useTaskFilters } from '../../hooks/useTaskFilters';

export function TaskFilters() {
  const { filters, updateFilters } = useTaskFilters();

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une tâche..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
              onChange={(e) => updateFilters({ search: e.target.value })}
            />
          </div>
        </div>

        <select
          className="px-3 py-2 border border-gray-200 rounded-lg"
          value={filters.status}
          onChange={(e) => updateFilters({ status: e.target.value })}
        >
          <option value="all">Tous les statuts</option>
          <option value="todo">À faire</option>
          <option value="in-progress">En cours</option>
          <option value="completed">Terminé</option>
        </select>

        <select
          className="px-3 py-2 border border-gray-200 rounded-lg"
          value={filters.priority}
          onChange={(e) => updateFilters({ priority: e.target.value })}
        >
          <option value="all">Toutes les priorités</option>
          <option value="high">Urgent</option>
          <option value="medium">Normal</option>
          <option value="low">Faible</option>
        </select>

        <select
          className="px-3 py-2 border border-gray-200 rounded-lg"
          value={filters.assignee}
          onChange={(e) => updateFilters({ assignee: e.target.value })}
        >
          <option value="all">Tous les membres</option>
          <option value="unassigned">Non assigné</option>
          <option value="me">Mes tâches</option>
        </select>

        <button
          onClick={() => updateFilters({ sortBy: filters.sortBy === 'dueDate' ? 'priority' : 'dueDate' })}
          className="flex items-center px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
        >
          <SortAsc className="h-5 w-5 mr-2" />
          Trier par {filters.sortBy === 'dueDate' ? 'priorité' : 'date'}
        </button>
      </div>
    </div>
  );
}