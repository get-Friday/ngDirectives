import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-form",
	template: `
		<form (ngSubmit)="showInfo()" #form="ngForm">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" [(ngModel)]="username" />
			<label for="cpf">CPF</label>
			<input type="number" name="cpf" id="cpf" [(ngModel)]="cpf">
			<label for="birthday">Dia de aniversário</label>
			<input type="date" name="birthday" id="birthday" [(ngModel)]="birthday">
			<label for="password">Senha</label>
			<input type="password" name="password" id="password" [(ngModel)]="password">
			<button type="submit">Mostrar</button>
		</form>

		<br />
		<ol *ngIf="toShow">
			<li>{{ username }}</li>
			<li>{{ cpf }}</li>
			<li>{{ birthday }}</li>
			<li>{{ password }}</li>
		</ol>
	`,
	styles: [],
})
export class FormComponent implements OnInit {
	username: string = "";
	cpf: number = 0;
	birthday: number = 0;
	password: number = 0;
	toShow: boolean = false;

	constructor() {}

	ngOnInit(): void {}

	showInfo() {
		this.toShow = !this.toShow
	}
}
