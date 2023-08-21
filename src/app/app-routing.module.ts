import { ChatNotFoundComponent } from './chat-not-found/chat-not-found.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeChatComponent } from './welcome-chat/welcome-chat.component';
import { ChatConversationComponent } from './chat-conversation/chat-conversation.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : '', redirectTo :'/chats',pathMatch : 'full'},
  {
    path : 'chats',
    component : ChatListComponent,
    children : [
      {
        path : '',
      //   redirectTo:'welcome',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'welcome',
        component : WelcomeChatComponent
      },
      {
        path : 'chat-not-found',
        component : ChatNotFoundComponent
      },
      {
        path : ':id',
        component : ChatConversationComponent
      }
         
    ],
    
  },
  {
    path:'page-not-found',
    component :ChatNotFoundComponent
  },
  {
    path : '**',
    redirectTo :'/page-not-found'
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
