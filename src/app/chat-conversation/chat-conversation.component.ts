import { DataServiceService } from '../services/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatBox } from '../models/ChatBox.model';
import { Messages } from '../models/message.model';
import { Component, Input, OnInit, inject } from '@angular/core';
import { switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { LowerCasePipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-chat-conversation',
    templateUrl: './chat-conversation.component.html',
    styleUrls: ['./chat-conversation.component.css'],
    standalone: true,
    imports: [FormsModule, LowerCasePipe, DatePipe]
})
export class ChatConversationComponent implements OnInit{

  private ar = inject(ActivatedRoute);
  private rs = inject(Router);
  private ds = inject(DataServiceService);

  groupName = 'Anonymous Group';
  data ! : ChatBox;
  self : boolean = false;
  id !: string;
  today: Date = new Date();
  message : string='';

  /** Inserted by Angular inject() migration for backwards compatibility */
  
  ngOnInit(){
    this.ar.paramMap.pipe(
      switchMap((p) => {
        this.message='';
        return  this.ds.getSingleData(p.get('id') as string);
      }),
    ).subscribe({
      next:(value) => {
        this.data = value;
      },
      error:(err)=>{

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
      this.data.lastModified = x.createdAt;
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
