import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { Observable, Subject, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // TODO:: Refactor this with State Management

  private tasks: Task[] = [];
  private tasksSubject = new Subject<Task[]>();

  constructor() {}

  getAllTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  getOneTask(taskId: number): Observable<Task> {
    const task = this.tasks.find((task) => task?.id === taskId);
    return of(task);
  }

  addTask(task: Task) {
    let newId = this.tasks?.length > 0 ? this.tasks?.length + 1 : 1;
    task.id = newId;
    this.tasks.push(task);
    this.tasksSubject.next([...this.tasks]);
  }

  updateTask(updatedTask: Task) {
    const taskIndex = this.tasks.findIndex(
      (task) => task?.id === updatedTask?.id
    );
    if (taskIndex < 0) return;
    
    this.tasks[taskIndex] = updatedTask;
    this.tasksSubject.next([...this.tasks]);
  }

  deleteTask(taskId: number) {
    const newTasks = this.tasks.filter((task) => task.id !== taskId);
    this.tasksSubject.next([...newTasks]);
  }

  updateCompletionStatus(taskId: number, status: boolean) {
    const taskIndex = this.tasks.findIndex((task) => task?.id === taskId);
    if (taskIndex < 0) return;

    this.tasks[taskIndex].completed = status;
    this.tasksSubject.next([...this.tasks]);
  }
}
