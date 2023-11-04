import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { AddEditDialogComponent } from '../../add-edit-dialog/add-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
})
export class AddEditTaskComponent {
  @Input() task: Task;

  constructor(
    private dialog: MatDialog,
    private taskService: TaskService,
    private snackBar: SnackBarService
  ) {}

  onEdit(id: number) {
    this.taskService.getOneTask(id).subscribe({
      next: (task) => {
        if (task) {
          const dialogRef = this.dialog.open(AddEditDialogComponent, {
            data: { task },
          });

          dialogRef.afterClosed().subscribe((task: Task) => {
            if (task.id) {
              this.taskService.updateTask(task);
            }
          });

        } else {
          this.snackBar.openSnackbar('Something wrong!');
        }
      },
      error: () => {
        this.snackBar.openSnackbar('Something wrong!');
      },
    });
  }

  onDelete(id: number) {
    if(id) {
      this.taskService.deleteTask(id);
    }
  }

  onCompletedClicked(id: number, completed: boolean) {
    if(id) {
      this.taskService.updateCompletionStatus(id, completed);
    }
  }
}
