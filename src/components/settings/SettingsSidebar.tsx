import React from 'react';
import { User, Bell, Settings, Shield } from 'lucide-react';
import { useSettings } from '../../hooks/useSettings';

export function SettingsSidebar() {
  const { activeSection, setActiveSection } = useSettings();

  const sections = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'preferences', label: 'Préférences', icon: Settings },
    { id: 'security', label: 'Sécurité', icon: Shield },
  ];

  return (
    <nav className="w-64">
      <div className="bg-white rounded-lg shadow-sm">
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`w-full flex items-center px-4 py-3 text-left ${
              activeSection === id
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Icon className="h-5 w-5 mr-3" />
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}