import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { Observable, Subject, of } from 'rxjs';
import { TaskApiService } from './task.api.service';
import { SnackBarService } from '../services/snack-bar.service';
import { Timestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // TODO:: Refactor this with State Management

  private tasks: Task[] = [];
  private tasksSubject = new Subject<Task[]>();

  constructor(
    private taskApiService: TaskApiService,
    private snackbarService: SnackBarService
  ) {}

  getAllTasks(): Observable<Task[]> {
    this.taskApiService
      .getAllData()
      .pipe()
      .subscribe({
        next: (tasks: Task[]) => {
          this.tasks = tasks.map((res: Task) => {
            res.dueDate = new Timestamp(
              (res.dueDate as unknown as Timestamp).seconds,
              (res.dueDate as unknown as Timestamp).nanoseconds
            ).toDate();
            res.createdAt = new Timestamp(
              (res.createdAt as unknown as Timestamp).seconds,
              (res.createdAt as unknown as Timestamp).nanoseconds
            ).toDate();
            return res;
          });
          this.tasksSubject.next([...this.tasks]);
        },
      });
    return this.tasksSubject.asObservable();
  }

  getOneTask(taskId: string): Observable<Task> {
    const task = this.tasks.find((task) => task?.id === taskId);
    return of(task);
  }

  addTask(task: Task) {
    this.taskApiService.addTask(task).subscribe({
      next: () => {
        this.getAllTasks();
        this.snackbarService.openSnackbar('Task Added');
      },
      error: () => {
        this.snackbarService.openSnackbar('An Error Occurred');
      },
    });
  }

  updateTask(updatedTask: Task) {
    const taskIndex = this.tasks.findIndex(
      (task) => task?.id === updatedTask?.id
    );
    if (taskIndex < 0) return;

    this.taskApiService.updateTask(updatedTask).subscribe({
      next: () => {
        this.getAllTasks();
        this.snackbarService.openSnackbar('Task Updated');
      },
      error: (err) => {
        this.snackbarService.openSnackbar('An Error Occurred');
      },
    });
  }

  deleteTask(taskId: string) {
    this.taskApiService.deleteTask(taskId).subscribe({
      next: () => {
        this.getAllTasks();
        this.snackbarService.openSnackbar('Task Deleted');
      },
      error: (err) => {
        this.snackbarService.openSnackbar('An Error Occurred');
      },
    });
  }

  updateCompletionStatus(taskId: string, status: boolean) {
    const taskIndex = this.tasks.findIndex((task) => task?.id === taskId);
    if (taskIndex < 0) return;

    this.tasks[taskIndex].completed = status;
    this.updateTask(this.tasks[taskIndex]);
  }
}
