import React from 'react';
import { TeamOverview } from '../components/team/TeamOverview';
import { TeamMembers } from '../components/team/TeamMembers';
import { TeamStats } from '../components/team/TeamStats';
import { TeamCalendar } from '../components/team/TeamCalendar';

export function TeamPage() {
  return (
    <div className="flex-1 ml-64 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Gestion d'équipe</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <TeamOverview />
          <div className="lg:col-span-2">
            <TeamStats />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TeamMembers />
          </div>
          <TeamCalendar />
        </div>
      </div>
    </div>
  );
}