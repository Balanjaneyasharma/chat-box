import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';

@Component({
    selector: 'app-chat-not-found',
    templateUrl: './chat-not-found.component.html',
    styleUrls: ['./chat-not-found.component.css'],
    standalone: true
})
export class ChatNotFoundComponent implements OnInit {

  private ar = inject(Router);

  title='Chat Not Found';
  message = 'Selected chat is not available';

  ngOnInit(): void {
    if(this.ar.url.includes('page-not-found')){
      this.title = '404-page not found';
      this.message = 'The url you are looking doesnot exist'
    }
  }
  

}
