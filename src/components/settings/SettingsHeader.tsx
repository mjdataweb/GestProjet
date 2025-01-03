import React from 'react';
import { useSettings } from '../../hooks/useSettings';

export function SettingsHeader() {
  const { activeSection } = useSettings();
  
  const sectionTitles = {
    profile: 'Profil',
    notifications: 'Notifications',
    preferences: 'Préférences',
    security: 'Sécurité',
  };

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
      <p className="text-gray-600 mt-2">
        {sectionTitles[activeSection]} - Gérez vos préférences et votre compte
      </p>
    </div>
  );
}