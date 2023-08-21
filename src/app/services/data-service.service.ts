import { Router } from '@angular/router';
import { ChatBox } from '../models/ChatBox.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient,private rs : Router) { }
 
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
/**.pipe(
      catchError((err)=>{
        this.rs.navigate(['/chats/chat-not-found']);
        console.log('hi this is',err);
    // return this.http.put<ChatBox>('https://63f73071833c7c9c607e69f4.mockapi.io/api/data/ChatBoxGroups/'+data.id,data)
    // return this.http.get<ChatBox>(`https://63f73071833c7c9c607e69f4.mockapi.io/api/data/ChatBoxGroups/${id}`);
    // return this.http.delete<ChatBox>(`https://63f73071833c7c9c607e69f4.mockapi.io/api/data/ChatBoxGroups/${id}`)


        return of(undefined);
        // removeData$ = new Subject<ChatBox>();
        
        
  // modifyData$ = new Subject<ChatBox>();



  // deleteData(value : ChatBox){
  //   this.removeData$.next(value);
  // }

  // updateData(value : ChatBox){
  //   this.modifyData$.next(value);
  // }
  // getRemoveObservable(){
  //   return this.removeData$.asObservable();
  // }

  // getUpdateObservable(){
  //   return this.modifyData$.asObservable();
  // }
      })
    ) */
