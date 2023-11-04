import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../models/task.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.scss'],
})
export class AddEditDialogComponent {
  taskForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required),
    createdAt: new FormControl(''),
    completed: new FormControl(false),
  });

  isEdit = false;

  constructor(
    public dialogRef: MatDialogRef<AddEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) {
    if (data?.task && data.task?.id) {
      this.isEdit = true;
      this.taskForm.setValue({
        id: data.task?.id.toString(),
        title: data.task?.title,
        description: data.task?.description,
        dueDate: data.task?.dueDate.toISOString(),
        createdAt: data.task?.createdAt.toISOString(),
        completed: data.task?.completed,
      });
    }
  }

  save() {
    if (this.taskForm.valid) {
      this.taskForm.controls.createdAt.setValue(
        new Date() as unknown as string
      );

      const task: Task = {
        id: this.taskForm?.controls?.id?.value
          ? this.taskForm?.controls?.id?.value
          : undefined,
        title: this.taskForm?.controls?.title?.value,
        description: this.taskForm?.controls?.description?.value,
        dueDate: new Date(this.taskForm?.controls?.dueDate?.value),
        createdAt: new Date(this.taskForm?.controls?.createdAt?.value),
        completed: this.taskForm?.controls?.completed?.value,
      };

      this.dialogRef.close(task);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
