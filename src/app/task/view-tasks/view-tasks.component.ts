import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { AddEditDialogComponent } from '../add-edit-dialog/add-edit-dialog.component';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss'],
})
export class ViewTasksComponent {
  constructor(private dialog: MatDialog) {}
  tasks: Task[] = [
    {
      id: '1',
      title: 'Title',
      description: 'Description',
      dueDate: new Date(),
      createdAt: new Date(),
      createdBy: 'Lathes',
      completed: false,
    },
    {
      id: '1',
      title: 'Title',
      description: 'Description',
      dueDate: new Date(),
      createdAt: new Date(),
      createdBy: 'Lathes',
      completed: false,
    },
  ];

  onAdd() {
    this.dialog.open(AddEditDialogComponent);
  }
}
