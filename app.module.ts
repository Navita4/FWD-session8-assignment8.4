import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from './user.component';
import {UsermyuserService} from './Service/user-myuserservice';
import {LoggingService} from './Service/logging.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsermyuserService,LoggingService],// call service global
  bootstrap: [UserComponent]
})
export class AppModule { }
