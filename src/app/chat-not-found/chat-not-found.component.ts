import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chat-not-found',
    templateUrl: './chat-not-found.component.html',
    styleUrls: ['./chat-not-found.component.css'],
    standalone: true
})
export class ChatNotFoundComponent implements OnInit {

  title='Chat Not Found';
  message = 'Selected chat is not availaible'
  constructor(private ar :Router){}

  ngOnInit(): void {
    if(this.ar.url.includes('page-not-found')){
      this.title = '404-page not found';
      this.message = 'The url you are looking doesnot exist'
    }
  }
  

}
