import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  template: `
    <img 
      *ngFor="let photo of arrayPhotos"
      src="{{ photo.url }}" 
      alt="{{ photo.description }}"
    >
  `,
  styles: [
  ]
})
export class PhotosComponent implements OnInit {
  arrayPhotos: any = [
 	 {
	    url: "https://via.placeholder.com/150?text=1",
	    description:"placeholder 1"
	  },
	  {
	    url: "https://via.placeholder.com/150?text=2",
	    description:"placeholder 2"
	  },
	  {
	    url: "https://via.placeholder.com/150?text=3",
	    description:"placeholder 3"
	  },
	  {
	    url: "https://via.placeholder.com/150?text=4",
	    description:"placeholder 4"
	  },
	  {
	    url: "https://via.placeholder.com/150?text=5",
	    description:"placeholder 5"
	  }
	]

  constructor() { }

  ngOnInit(): void {
  }

}
