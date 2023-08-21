import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatListItemComponent } from './chat-list-item/chat-list-item.component';
import { ChatConversationComponent } from './chat-conversation/chat-conversation.component';
import { WelcomeChatComponent } from './welcome-chat/welcome-chat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { ChatNotFoundComponent } from './chat-not-found/chat-not-found.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatListItemComponent,
    ChatConversationComponent,
    WelcomeChatComponent,
    PageNotFoundComponent,
    ChatNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
