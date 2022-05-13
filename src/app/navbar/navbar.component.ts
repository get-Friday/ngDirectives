import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-navbar",
	template: `
		<nav>
			<header class="d-flex justify-content-center py-3">
				<ul class="nav nav-pills">
					<li class="nav-item">
						<a
							class="nav-link active"
							aria-current="page"
							(click)="page = 'home'"
							>Home</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" (click)="page = 'precos'">Preços</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" (click)="page = 'info'">Informações</a>
					</li>
				</ul>
			</header>
		</nav>
		<div [ngSwitch]="page">
			<h2 *ngSwitchDefault>Estou na página HOME</h2>
			<h2 *ngSwitchCase="'precos'">Estou na página PREÇOS</h2>
			<h2 *ngSwitchCase="'info'">Estou na página INFORMAÇÕES</h2>
		</div>
	`,
	styles: [],
})
export class NavbarComponent implements OnInit {
	page: string;

	constructor() {}

	ngOnInit(): void {}
}
