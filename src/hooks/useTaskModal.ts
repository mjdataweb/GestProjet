import { useState } from 'react';
import { useProject } from '../context/ProjectContext';
import { Task } from '../types';

export function useTaskModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { addTask } = useProject();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (taskData: Omit<Task, 'id'>) => {
    addTask(taskData);
    closeModal();
  };

  return {
    isOpen,
    openModal,
    closeModal,
    handleSubmit,
  };
}