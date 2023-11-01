import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-add-edit-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.scss'],
})
export class AddEditDialogComponent {
  title: string;
  description: string;
  id: string;

  constructor(
    public dialogRef: MatDialogRef<AddEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {
    if (data && data?.id?.length > 0) {
      this.id = data.id;
      this.description = data.description;
      this.title = data.title;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {}

  cancel() {
    this.dialogRef.close();
  }
}
