import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss'],
})
export class AddEditTaskComponent implements OnInit, OnChanges {
  @Input() task: Task;

  ngOnInit(): void {
    console.log(this.task);
  }

  ngOnChanges() {
    console.log(this.task);
  }
}
