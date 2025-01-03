import React from 'react';
import { useSettings } from '../../hooks/useSettings';
import { ProfileSettings } from './sections/ProfileSettings';
import { NotificationSettings } from './sections/NotificationSettings';
import { PreferenceSettings } from './sections/PreferenceSettings';
import { SecuritySettings } from './sections/SecuritySettings';

export function SettingsContent() {
  const { activeSection } = useSettings();

  const sections = {
    profile: <ProfileSettings />,
    notifications: <NotificationSettings />,
    preferences: <PreferenceSettings />,
    security: <SecuritySettings />,
  };

  return (
    <div className="flex-1">
      {sections[activeSection]}
    </div>
  );
}