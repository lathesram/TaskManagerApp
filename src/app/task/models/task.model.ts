export interface Task {
  id: string; // Unique identifier for the task (auto-generated by Firebase).
  title: string; // Title of the task.
  description: string; // Description or details of the task.
  dueDate: Date; // Due date and time for the task.
  createdAt: Date; // Timestamp when the task was created.
  createdBy: string; // User ID of the task creator.
  assignedTo: string; // User ID of the person assigned to the task (if applicable).
  completed: boolean; // Indicates whether the task is completed or not.
}
