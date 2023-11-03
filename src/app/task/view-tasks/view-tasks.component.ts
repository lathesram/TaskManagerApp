import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { AddEditDialogComponent } from '../add-edit-dialog/add-edit-dialog.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss'],
})
export class ViewTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private dialog: MatDialog, private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  onAdd() {
    const dialogRef = this.dialog.open(AddEditDialogComponent);

    dialogRef.afterClosed().subscribe((task: Task) => {
      this.taskService.addTask(task);
    });
  }
}
