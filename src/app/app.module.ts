import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HamburguerComponent } from './hamburguer/hamburguer.component';

@NgModule({
  declarations: [
    AppComponent,
    HamburguerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
