import { useState } from 'react';

type SettingsSection = 'profile' | 'notifications' | 'preferences' | 'security';

interface NotificationSetting {
  label: string;
  description: string;
  enabled: boolean;
}

interface Preferences {
  language: string;
  theme: string;
  dateFormat: string;
}

export function useSettings() {
  const [activeSection, setActiveSection] = useState<SettingsSection>('profile');
  const [notifications, setNotifications] = useState<Record<string, NotificationSetting>>({
    taskAssigned: {
      label: 'Tâches assignées',
      description: 'Notifications lorsqu\'une nouvelle tâche vous est assignée',
      enabled: true,
    },
    taskUpdates: {
      label: 'Mises à jour des tâches',
      description: 'Notifications lors des modifications de vos tâches',
      enabled: true,
    },
    projectUpdates: {
      label: 'Mises à jour du projet',
      description: 'Notifications des changements importants du projet',
      enabled: true,
    },
    teamMessages: {
      label: 'Messages d\'équipe',
      description: 'Notifications des messages de l\'équipe',
      enabled: true,
    },
  });

  const [preferences, setPreferences] = useState<Preferences>({
    language: 'fr',
    theme: 'light',
    dateFormat: 'DD/MM/YYYY',
  });

  const updateNotificationSetting = (key: string, enabled: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [key]: { ...prev[key], enabled },
    }));
  };

  const updatePreference = (key: keyof Preferences, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    activeSection,
    setActiveSection,
    notifications,
    updateNotificationSetting,
    preferences,
    updatePreference,
  };
}