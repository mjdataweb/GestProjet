import React from 'react';
import { useCalendar } from '../../hooks/useCalendar';
import { CalendarDay } from './CalendarDay';

export function CalendarGrid() {
  const { weeks, isToday, isCurrentMonth } = useCalendar();
  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="grid grid-cols-7 gap-px border-b">
        {weekDays.map(day => (
          <div
            key={day}
            className="py-2 text-center text-sm font-medium text-gray-700"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {weeks.map((week, weekIndex) =>
          week.map((date, dayIndex) => (
            <CalendarDay
              key={`${weekIndex}-${dayIndex}`}
              date={date}
              isToday={isToday(date)}
              isCurrentMonth={isCurrentMonth(date)}
            />
          ))
        )}
      </div>
    </div>
  );
}