import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ProjectDashboard } from './components/ProjectDashboard';
import { TeamPage } from './pages/TeamPage';
import { TasksPage } from './pages/TasksPage';
import { CalendarPage } from './pages/CalendarPage';
import { SettingsPage } from './pages/SettingsPage';
import { ProjectProvider } from './context/ProjectContext';

export function App() {
  return (
    <ProjectProvider>
      <Router>
        <div className="flex bg-gray-50 min-h-screen">
          <Sidebar />
          <Routes>
            <Route path="/" element={<ProjectDashboard />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </Router>
    </ProjectProvider>
  );
}