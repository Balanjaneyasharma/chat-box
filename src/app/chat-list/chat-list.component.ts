import { switchMap } from 'rxjs';
import { ChatBox } from '../models/ChatBox.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { RouterOutlet } from '@angular/router';
import { ChatListItemComponent } from '../chat-list-item/chat-list-item.component';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-chat-list',
    templateUrl: './chat-list.component.html',
    styleUrls: ['./chat-list.component.css'],
    standalone: true,
    imports: [NgFor, NgIf, ChatListItemComponent, RouterOutlet, TitleCasePipe]
})
export class ChatListComponent implements OnInit{
  constructor(private http : HttpClient,private ds : DataServiceService){}
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
    console.log(this.storage);
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
              console.log(999);
              this.ds.updateDateStorage(value)
            });
      }
      
    }
    else alert('Invalid Group Name')
    
  }
  searchData(value:string){
    console.log(value);
    this.searchText = value.toLowerCase();
  }

}
