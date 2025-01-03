import React from 'react';
import { Layout, Users, CheckSquare, Calendar, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Tableau de bord', icon: Layout, href: '/' },
  { name: 'Équipe', icon: Users, href: '/team' },
  { name: 'Tâches', icon: CheckSquare, href: '/tasks' },
  { name: 'Calendrier', icon: Calendar, href: '/calendar' },
  { name: 'Paramètres', icon: Settings, href: '/settings' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex flex-col w-64 bg-gray-900 text-white h-screen fixed">
      <div className="p-4">
        <h1 className="text-2xl font-bold">GestProjet</h1>
      </div>
      <nav className="flex-1 mt-6">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
              location.pathname === item.href ? 'bg-gray-800 text-white' : ''
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}