import React from 'react';
import { SettingsHeader } from '../components/settings/SettingsHeader';
import { SettingsSidebar } from '../components/settings/SettingsSidebar';
import { SettingsContent } from '../components/settings/SettingsContent';

export function SettingsPage() {
  return (
    <div className="flex-1 ml-64 p-8">
      <div className="max-w-7xl mx-auto">
        <SettingsHeader />
        <div className="flex gap-8">
          <SettingsSidebar />
          <SettingsContent />
        </div>
      </div>
    </div>
  );
}