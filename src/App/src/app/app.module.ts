import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessageComponent } from './components/message/message.component';
import { RoomSelectorComponent } from './components/room-selector/room-selector.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageMainComponent,
    MenuComponent,
    MessageComponent,
    RoomSelectorComponent,
    ChatHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
