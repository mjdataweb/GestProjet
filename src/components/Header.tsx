import React from 'react';
import { Bell, Search } from 'lucide-react';
import { useProject } from '../context/ProjectContext';

export function Header() {
  const { currentUser, notifications, markNotificationAsRead, searchProjects } = useProject();

  return (
    <header className="bg-white shadow-sm mb-8 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-600 mt-2">Bienvenue, {currentUser.name}! 👋</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              onChange={(e) => searchProjects(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="relative group">
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-600 hover:text-gray-900 transition-colors" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </button>
            
            {notifications.length > 0 && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="px-4 py-2 hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span className="text-sm text-gray-700">{notification.message}</span>
                    <button
                      onClick={() => markNotificationAsRead(notification.id)}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      Ignorer
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
          />
        </div>
      </div>
    </header>
  );
}