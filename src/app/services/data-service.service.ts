import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ChatBox } from '../models/ChatBox.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private http = inject(HttpClient);
  private rs = inject(Router);
 
  dataStorage$ = new BehaviorSubject<ChatBox[]>([]);
  private apiUrl = 'https://63f73071833c7c9c607e69f4.mockapi.io/api/data/ChatBoxGroups'

  getDataStorageObservable(){
    return this.dataStorage$.asObservable();
  }

  updateDateStorage(value : ChatBox[]){
    this.dataStorage$.next(value);
  }
 
  getData(){
    return this.http.get<ChatBox[]>(this.apiUrl);
  }
  postData(body : ChatBox){
    return this.http.post<ChatBox>(this.apiUrl,body)
  }
  getSingleData(id : string){
    return this.http.get<ChatBox>(`${this.apiUrl}/${id}`);
  }
  updateDataToServer(data : ChatBox){
    return this.http.put<ChatBox>(`${this.apiUrl}/${data.id}`,data);
  }
  deleteDataFromServer(id : string){
    return this.http.delete<ChatBox>(`${this.apiUrl}/${id}`);
  }
}