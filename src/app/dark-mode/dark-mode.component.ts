import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-dark-mode",
	template: `
		<div 
      class="container"
      [ngStyle]="{
        'background-color': modeOn ? 'black' : 'white',
        'color': modeOn ? 'white' : 'black'
      }"
    >
			<div class="content">
				<h1>Example dark mode</h1>
				<h3>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus autem
					unde recusandae vero porro fuga velit. Aut labore deleniti magnam
					libero quibusdam in est vitae ea unde. Possimus, odio aliquam?
				</h3>
			</div>
			<button class="card card-small" (click)="modeOn = !modeOn">Dark mode</button>
		</div>
	`,
	styleUrls: ['./dark-mode.component.scss'],
})
export class DarkModeComponent implements OnInit {
  modeOn: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
