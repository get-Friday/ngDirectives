import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HamburguerComponent } from './hamburguer/hamburguer.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { FavMoviesComponent } from './fav-movies/fav-movies.component';
import { PhotosComponent } from './photos/photos.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HamburguerComponent,
    DarkModeComponent,
    FavMoviesComponent,
    PhotosComponent,
    DemoModalComponent,
    FormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
