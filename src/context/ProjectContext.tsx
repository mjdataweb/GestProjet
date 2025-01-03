import React, { createContext, useContext, useState } from 'react';
import { Project, Task, User } from '../types';
import { sampleProject, sampleTeamMembers } from '../data/sampleData';

interface ProjectContextType {
  projects: Project[];
  currentUser: User;
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
  filterTasks: (status?: string, priority?: string, assignee?: string) => Task[];
  searchProjects: (query: string) => void;
  notifications: { id: string; message: string }[];
  markNotificationAsRead: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([sampleProject]);
  const [notifications, setNotifications] = useState([
    { id: '1', message: 'New task assigned to you' },
    { id: '2', message: 'Project deadline approaching' },
    { id: '3', message: 'Comment on your task' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const currentUser = sampleTeamMembers[0];

  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask = {
      ...task,
      id: Math.random().toString(36).substr(2, 9),
    };
    
    setProjects(projects.map(project => 
      project.id === task.projectId
        ? { ...project, tasks: [...project.tasks, newTask] }
        : project
    ));
  };

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    setProjects(projects.map(project => ({
      ...project,
      tasks: project.tasks.map(task =>
        task.id === taskId ? { ...task, ...updates } : task
      ),
    })));
  };

  const deleteTask = (taskId: string) => {
    setProjects(projects.map(project => ({
      ...project,
      tasks: project.tasks.filter(task => task.id !== taskId),
    })));
  };

  const filterTasks = (status?: string, priority?: string, assignee?: string) => {
    let filteredTasks = projects[0].tasks;

    if (status && status !== 'all') {
      filteredTasks = filteredTasks.filter(task => task.status === status);
    }
    if (priority && priority !== 'all') {
      filteredTasks = filteredTasks.filter(task => task.priority === priority);
    }
    if (assignee === 'assigned') {
      filteredTasks = filteredTasks.filter(task => task.assignee?.id === currentUser.id);
    } else if (assignee === 'unassigned') {
      filteredTasks = filteredTasks.filter(task => !task.assignee);
    }

    return filteredTasks;
  };

  const searchProjects = (query: string) => {
    setSearchQuery(query);
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <ProjectContext.Provider value={{
      projects,
      currentUser,
      addTask,
      updateTask,
      deleteTask,
      filterTasks,
      searchProjects,
      notifications,
      markNotificationAsRead,
    }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}