import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { MaterialModule } from '../material/material.module';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [AddEditTaskComponent, ViewTasksComponent],
  imports: [MaterialModule, CommonModule, TaskRoutingModule],
})
export class TaskModule {}
