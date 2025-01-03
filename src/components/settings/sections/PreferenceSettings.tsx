import React from 'react';
import { useSettings } from '../../../hooks/useSettings';

export function PreferenceSettings() {
  const { preferences, updatePreference } = useSettings();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Préférences</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Langue</label>
          <select
            value={preferences.language}
            onChange={(e) => updatePreference('language', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Thème</label>
          <select
            value={preferences.theme}
            onChange={(e) => updatePreference('theme', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="light">Clair</option>
            <option value="dark">Sombre</option>
            <option value="system">Système</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Format de date</label>
          <select
            value={preferences.dateFormat}
            onChange={(e) => updatePreference('dateFormat', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="DD/MM/YYYY">31/12/2024</option>
            <option value="MM/DD/YYYY">12/31/2024</option>
            <option value="YYYY-MM-DD">2024-12-31</option>
          </select>
        </div>
      </div>
    </div>
  );
}