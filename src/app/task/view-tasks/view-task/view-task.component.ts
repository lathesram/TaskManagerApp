import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { AddEditDialogComponent } from '../../add-edit-dialog/add-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
})
export class AddEditTaskComponent {
  @Input() task: Task;

  constructor(private dialog: MatDialog) {}

  onEdit(id: string) {
    this.dialog.open(AddEditDialogComponent);
  }

  onDelete(id: string) {}
}
