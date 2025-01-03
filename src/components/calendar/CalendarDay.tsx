import React from 'react';
import { useProject } from '../../context/ProjectContext';

interface CalendarDayProps {
  date: Date;
  isToday: boolean;
  isCurrentMonth: boolean;
}

export function CalendarDay({ date, isToday, isCurrentMonth }: CalendarDayProps) {
  const { projects } = useProject();
  const tasks = projects[0].tasks.filter(
    task => new Date(task.dueDate).toDateString() === date.toDateString()
  );

  return (
    <div
      className={`min-h-[120px] p-2 bg-white ${
        !isCurrentMonth ? 'text-gray-400' : ''
      }`}
    >
      <div className={`flex justify-between items-center ${
        isToday ? 'font-bold text-blue-600' : ''
      }`}>
        <span>{date.getDate()}</span>
        {tasks.length > 0 && (
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {tasks.length}
          </span>
        )}
      </div>
      <div className="mt-2 space-y-1">
        {tasks.map(task => (
          <div
            key={task.id}
            className="text-xs p-1 rounded truncate"
            style={{
              backgroundColor: task.priority === 'high' ? '#FEE2E2' : 
                             task.priority === 'medium' ? '#FEF3C7' : 
                             '#DBEAFE',
              color: task.priority === 'high' ? '#991B1B' :
                     task.priority === 'medium' ? '#92400E' :
                     '#1E40AF'
            }}
          >
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}