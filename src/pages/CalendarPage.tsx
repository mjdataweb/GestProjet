import React from 'react';
import { CalendarHeader } from '../components/calendar/CalendarHeader';
import { CalendarGrid } from '../components/calendar/CalendarGrid';
import { CalendarSidebar } from '../components/calendar/CalendarSidebar';

export function CalendarPage() {
  return (
    <div className="flex-1 ml-64 p-8">
      <div className="max-w-7xl mx-auto">
        <CalendarHeader />
        <div className="flex gap-6">
          <div className="flex-1">
            <CalendarGrid />
          </div>
          <CalendarSidebar />
        </div>
      </div>
    </div>
  );
}