import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { Observable, from } from 'rxjs';
import { Task } from 'src/app/task/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class BaseApiService {
  // Adding the observable type as unknown, due to the complication within the firebase
  constructor() {}

  fetchAll(url: string): Observable<unknown> {
    const collectionRef = collection(getFirestore(), url);
    return collectionData(collectionRef, { idField: 'id' });
  }

  post<T>(payload: T, url: string) {
    const collectionRef = collection(getFirestore(), url);
    return from(addDoc(collectionRef, payload));
  }

  update<T>(payload: T, id: string, tableName: string) {
    const docInstance = doc(getFirestore(), tableName, id);
    return from(updateDoc(docInstance, payload as unknown));
  }

  delete(tableName: string, id: string) {
    const docInstance = doc(getFirestore(), tableName, id);
    return from(deleteDoc(docInstance));
  }
}
