import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCalendar } from '../../hooks/useCalendar';

export function CalendarHeader() {
  const { currentDate, previousMonth, nextMonth } = useCalendar();

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Calendrier</h1>
        <p className="text-gray-600 mt-2">Planifiez et gérez vos échéances</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-white rounded-lg shadow-sm">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-gray-50 rounded-l-lg"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <span className="px-4 font-medium">
            {currentDate.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
          </span>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-50 rounded-r-lg"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}