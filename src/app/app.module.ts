import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdToolbarModule, MdCardModule, MdIconModule, MdMenuModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdIconModule,
    MdMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
