import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';



@NgModule({
  declarations: [
    ViewTasksComponent,
    AddEditTaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
