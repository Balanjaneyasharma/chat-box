import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { switchMap } from 'rxjs';

import { ChatListItemComponent } from '../chat-list-item/chat-list-item.component';
import { ChatBox } from '../models/ChatBox.model';
import { DataServiceService } from '../services/data-service.service';

@Component({
    selector: 'app-chat-list',
    templateUrl: './chat-list.component.html',
    styleUrls: ['./chat-list.component.css'],
    standalone: true,
    imports: [ChatListItemComponent, RouterOutlet, TitleCasePipe]
})
export class ChatListComponent implements OnInit{
  
  private http = inject(HttpClient);
  private ds = inject(DataServiceService);

  storage !:ChatBox [];
  title :string = 'balu sharma';
  searchText : string ='';
  singleData!: ChatBox;
  
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.ds.getData().subscribe((value)=>{
      this.ds.updateDateStorage(value);
    });
    this.ds.getDataStorageObservable().subscribe(value=>{
      this.storage=value
      this.sortData();
      // this.singleData = this.storage[0];
      // this.singleData.id = '999'y
      ;
    });
  }
  sortData(){
    this.storage =this.storage.sort((a,b)=>{
      return new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime();
    })
  }
  addChat(){
    let x= prompt('Enter Group name') as string;
    
    if(x.trim().length!=0){
      if(x.length>25){
        alert('Name length must be less <= 25')
      }
      else{
        const body = new ChatBox(x);
        this.ds.postData(body).pipe(
          switchMap(()=>this.ds.getData())
           ).subscribe((value)=>{
              this.ds.updateDateStorage(value)
            });
      }
      
    }
    else alert('Invalid Group Name')
    
  }
  searchData(value:string){
    this.searchText = value.toLowerCase();
  }

}
