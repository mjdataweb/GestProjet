import React from 'react';
import { Plus } from 'lucide-react';
import { useTaskModal } from '../../hooks/useTaskModal';

export function TaskHeader() {
  const { openModal } = useTaskModal();

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tâches</h1>
        <p className="text-gray-600 mt-2">Gérez et suivez vos tâches en cours</p>
      </div>
      
      <button
        onClick={openModal}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Plus className="h-5 w-5 mr-2" />
        Nouvelle tâche
      </button>
    </div>
  );
}