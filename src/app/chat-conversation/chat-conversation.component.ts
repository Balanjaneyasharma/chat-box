import { DataServiceService } from '../services/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatBox } from '../models/ChatBox.model';
import { Messages } from '../models/message.model';
import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, LowerCasePipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-chat-conversation',
    templateUrl: './chat-conversation.component.html',
    styleUrls: ['./chat-conversation.component.css'],
    standalone: true,
    imports: [NgIf, NgFor, FormsModule, LowerCasePipe, DatePipe]
})
export class ChatConversationComponent implements OnInit{
  groupName = 'Anonymous Group';
  data ! : ChatBox;
  self : boolean = false;
  id !: string;
  today: Date = new Date();
  message : string='';
  constructor(private ar : ActivatedRoute,private rs : Router,private ds : DataServiceService) { }
  
  ngOnInit(){
    console.log('on init');
    this.ar.paramMap.pipe(
      switchMap((p) => {
        console.log('on paramap: ',p);
        this.message='';
        return  this.ds.getSingleData(p.get('id') as string);
      }),
    ).subscribe({
      next:(value) => {
        console.log('on Contact: ',value);
        this.data = value;
      },
      error:(err)=>{
        console.log('on ErrorContact: ',err);

        this.rs.navigate(['/chats/chat-not-found']);
      },
      complete:()=>{}
    })
  }

  onClick(){
    if(this.message.trim().length!=0){
      let x = new Messages(this.message,this.self);
      if(!(this.data.messages)){
        this.data.messages = [];
      }
      this.data.messages.push(x);
      let user = this.self ? 'You' : 'Anonymous';
      this.data.recentActivity = user + " : "+ this.message;
      // console.log(this.data.recentActivity);
      this.data.lastModified = x.createdAt;
      // console.log(this.data.messages);
      this.ds.updateDataToServer(this.data).pipe(
        switchMap(()=>this.ds.getData())
      ).subscribe((data)=>{
        this.ds.updateDateStorage(data);
      });
      this.message='';

    }
    
  }

  toogle(){
    this.self = !this.self;
  }
  compare(date : Date){
    let required = new Date(date);
    return this.today.toDateString() === required.toDateString();
  }

  delete(){
    if(confirm('Are you sure want to delete the group '+this.data.name)){
      this.ds.deleteDataFromServer(this.data.id).pipe(
        switchMap(()=>this.ds.getData())
      ).subscribe((value)=>{
        this.ds.updateDateStorage(value);
        this.rs.navigate(['/chats']);

      });
    }
  }
}
