import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, /*AppRoutingModule*/ ],
  declarations: [ AppComponent, HelloComponent, DvdListComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})





export class AppModule { }
