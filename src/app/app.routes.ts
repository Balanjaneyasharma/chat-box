// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/chats', pathMatch: 'full' },
  {
    path: 'chats',
    loadComponent: () =>
      import('./chat-list/chat-list.component').then(m => m.ChatListComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./welcome-chat/welcome-chat.component').then(m => m.WelcomeChatComponent),
      },
      {
        path: 'chat-not-found',
        loadComponent: () =>
          import('./chat-not-found/chat-not-found.component').then(m => m.ChatNotFoundComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./chat-conversation/chat-conversation.component').then(m => m.ChatConversationComponent),
      },
    ],
  },
  {
    path: 'page-not-found',
    loadComponent: () =>
      import('./chat-not-found/chat-not-found.component').then(m => m.ChatNotFoundComponent),
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
  },
];
