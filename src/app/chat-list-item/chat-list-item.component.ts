import { ChatListComponent } from './../chat-list/chat-list.component';
import { ChatBox } from '../models/ChatBox.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list-item',
  templateUrl: './chat-list-item.component.html',
  styleUrls: ['./chat-list-item.component.css']
})
export class ChatListItemComponent implements OnInit{
  @Input('data') data !: ChatBox; 
  today = new Date();
  sameDate !: boolean ;
  ngOnInit(): void {
      let lastModified = new Date(this.data.lastModified);
      if(this.today.toDateString() === lastModified.toDateString()){
        this.sameDate = true;
      }
      else this.sameDate = false;
      
    
  
    // console.log(this.data.id);
  }
  
    
}
