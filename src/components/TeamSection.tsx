import React from 'react';
import { User } from '../types';

interface TeamSectionProps {
  teamMembers: User[];
}

export function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Membres de l'équipe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
            <img
              src={member.avatar}
              alt={member.name}
              className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
            />
            <div className="ml-3">
              <h3 className="font-medium text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}