import { useProject } from '../context/ProjectContext';
import { Task } from '../types';

export function useTaskActions(task: Task) {
  const { updateTask, deleteTask } = useProject();

  const handleStatusChange = () => {
    const statuses: Task['status'][] = ['todo', 'in-progress', 'completed'];
    const currentIndex = statuses.indexOf(task.status);
    const nextStatus = statuses[(currentIndex + 1) % statuses.length];
    updateTask(task.id, { status: nextStatus });
  };

  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      deleteTask(task.id);
    }
  };

  return {
    handleStatusChange,
    handleDelete,
  };
}