import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Task } from './models/task.model';
import { from } from 'rxjs';
import { deleteDoc, getFirestore } from 'firebase/firestore';
import { BaseApiService } from '../common/services/base.api.service';

export enum TASK_API {
  URL = '/Tasks',
  TABLE_NAME = 'Tasks',
}

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  constructor(private baseApiService: BaseApiService) {}

  getAllData() {
    return this.baseApiService.fetchAll(TASK_API.URL);
  }

  addTask(task: Task) {
    return this.baseApiService.post(task, TASK_API.URL);
  }

  updateTask(task: Task) {
    return this.baseApiService.update(task, task.id, TASK_API.TABLE_NAME);
  }

  deleteTask(taskId: string) {
    return this.baseApiService.delete(TASK_API.TABLE_NAME, taskId);
  }
}
