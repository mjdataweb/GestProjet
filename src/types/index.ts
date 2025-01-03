export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignee: User | null;
  dueDate: string;
  projectId: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  teamMembers: User[];
  tasks: Task[];
  createdAt: string;
}