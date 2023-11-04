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

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  constructor(private firestore: Firestore) {}

  getAllData() {
    const collectionRef = collection(getFirestore(), '/Tasks');
    return collectionData(collectionRef, { idField: 'id' });
  }

  addTask(task: Task) {
    const collectionRef = collection(getFirestore(), '/Tasks');
    return from(addDoc(collectionRef, task));
  }

  updateTask(task: Task) {
    const docInstance = doc(getFirestore(), 'Tasks', String(task.id));
    const updateData = { ...task };
    return from(updateDoc(docInstance, updateData));
  }

  deleteTask(taskId: string) {
    const docInstance = doc(getFirestore(), 'Tasks', taskId);
    return from(deleteDoc(docInstance));
  }
}
