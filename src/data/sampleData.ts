import { Project, User } from '../types';

export const sampleTeamMembers: User[] = [
  {
    id: '1',
    name: 'Sophie Martin',
    email: 'sophie@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Thomas Bernard',
    email: 'thomas@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Marie Dubois',
    email: 'marie@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

export const sampleProject: Project = {
  id: '1',
  name: 'Projet E-commerce',
  description: 'Développement d\'une plateforme e-commerce moderne avec React et Node.js',
  teamMembers: sampleTeamMembers,
  tasks: [
    {
      id: '1',
      title: 'Configuration du projet',
      description: 'Mettre en place l\'environnement de développement initial',
      status: 'completed',
      priority: 'high',
      assignee: sampleTeamMembers[0],
      dueDate: '2024-03-20',
      projectId: '1',
    },
    {
      id: '2',
      title: 'Design de l\'interface',
      description: 'Créer les maquettes UI/UX pour l\'application',
      status: 'in-progress',
      priority: 'medium',
      assignee: sampleTeamMembers[1],
      dueDate: '2024-03-25',
      projectId: '1',
    },
    {
      id: '3',
      title: 'Intégration API',
      description: 'Implémenter les appels API REST',
      status: 'todo',
      priority: 'high',
      assignee: sampleTeamMembers[2],
      dueDate: '2024-03-30',
      projectId: '1',
    },
  ],
  createdAt: '2024-03-15',
};