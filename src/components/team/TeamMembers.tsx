import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useProject } from '../../context/ProjectContext';
import { User } from '../../types';

export function TeamMembers() {
  const { projects } = useProject();
  const [selectedMember, setSelectedMember] = useState<User | null>(null);

  const handleMemberClick = (member: User) => {
    setSelectedMember(member);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Membres de l'équipe</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects[0].teamMembers.map((member) => (
          <div
            key={member.id}
            onClick={() => handleMemberClick(member)}
            className="flex items-start p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
            />
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.email}</p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <div className="flex items-center mr-4">
                  <Mail className="h-4 w-4 mr-1" />
                  Contact
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Paris, FR
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center mb-6">
              <img
                src={selectedMember.avatar}
                alt={selectedMember.name}
                className="h-16 w-16 rounded-full border-2 border-white shadow-sm"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">{selectedMember.name}</h3>
                <p className="text-gray-500">{selectedMember.email}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <span>+33 6 12 34 56 78</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                <span>Développeur Senior</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}