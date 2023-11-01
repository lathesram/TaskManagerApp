import { Component } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss'],
})
export class ViewTasksComponent {
  demoTask: Task = {
    id: '1',
    title: 'Title',
    description: 'Description',
    dueDate: new Date(),
    createdAt: new Date(),
    createdBy: 'Lathes',
    completed: false,
  };
}
