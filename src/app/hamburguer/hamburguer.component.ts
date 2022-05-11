import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-hamburguer",
	template: `
		<label [ngClass]="{'checked': check}">
			<div class="menu-hamb">
				<span class="hamburguer" (click)="check = !check"></span>
			</div>
		</label>

		<ul class="ul-mbl">
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Work</a></li>
		</ul>
	`,
	styleUrls: ['./hamburguer.component.scss']
})
export class HamburguerComponent implements OnInit {
  check: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
