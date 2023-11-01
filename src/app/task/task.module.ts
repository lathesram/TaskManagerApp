import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditTaskComponent } from './view-tasks/view-task/view-task.component';
import { MaterialModule } from '../material/material.module';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { TaskRoutingModule } from './task-routing.module';
import { AddEditDialogComponent } from './add-edit-dialog/add-edit-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddEditTaskComponent, ViewTasksComponent, AddEditDialogComponent],
  imports: [MaterialModule, CommonModule, TaskRoutingModule, FormsModule],
})
export class TaskModule {}
