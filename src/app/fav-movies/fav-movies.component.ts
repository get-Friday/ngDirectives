import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-movies',
  template: `
    <h1>Fav movies</h1>
    <ol>
      <li 
        *ngFor="let item of arrayList"
      >
        {{ item }}
      </li>
    </ol>
  `,
  styles: [
  ]
})
export class FavMoviesComponent implements OnInit {
  arrayList: String[] = ['Monty Python and the Holy Grail', 'Your name', 'A silent voice', 'The Truman show', 'Shrek']

  constructor() { }

  ngOnInit(): void {
  }

}
