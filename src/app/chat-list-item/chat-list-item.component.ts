import { Component, Input, OnInit } from '@angular/core';
import { LowerCasePipe, DatePipe } from '@angular/common';
import { RouterLinkActive, RouterLink } from '@angular/router';

import { ChatBox } from '../models/ChatBox.model';

@Component({
    selector: 'app-chat-list-item',
    templateUrl: './chat-list-item.component.html',
    styleUrls: ['./chat-list-item.component.css'],
    standalone: true,
    imports: [RouterLinkActive, RouterLink, LowerCasePipe, DatePipe]
})
export class ChatListItemComponent implements OnInit{
  @Input('data') data !: ChatBox; 
  today = new Date();
  sameDate !: boolean ;
  ngOnInit(): void {
      let lastModified = new Date(this.data.lastModified);
      this.sameDate = this.today.toDateString() === lastModified.toDateString();
  }
  
    
}
