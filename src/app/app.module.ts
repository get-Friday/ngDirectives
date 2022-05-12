import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HamburguerComponent } from './hamburguer/hamburguer.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { FavMoviesComponent } from './fav-movies/fav-movies.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HamburguerComponent,
    DarkModeComponent,
    FavMoviesComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
