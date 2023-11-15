import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Task } from '../../models/task.model';
import { AddEditDialogComponent } from '../../add-edit-dialog/add-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/common/services/snack-bar.service';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
})
export class AddEditTaskComponent implements OnChanges {
  @Input() task: Task;

  completed: boolean = false;

  constructor(
    private dialog: MatDialog,
    private taskService: TaskService,
    private snackBar: SnackBarService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.task.previousValue !== changes.task.currentValue) {
      this.completed = this.task.completed;
    }
  }

  onEdit(id: string) {
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

  onDelete(id: string) {
    if (id) {
      this.taskService.deleteTask(id);
    }
  }

  onCompletedClicked(id: string, completed: boolean) {
    if (id) {
      this.taskService.updateCompletionStatus(id, completed);
    }
  }
}
