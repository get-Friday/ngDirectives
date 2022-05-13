import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-form",
	template: `
		<form (ngSubmit)="showInfo()" #form="ngForm">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" [(ngModel)]="username" />
			<label for="cpf">CPF</label>
			<input type="number" name="cpf" id="cpf" [(ngModel)]="cpf" required>
			<label for="birthday">Dia de aniversário</label>
			<input type="date" name="birthday" id="birthday" [(ngModel)]="birthday" max="31" min="1">
			<label for="password">Senha</label>
			<input type="password" name="password" id="password" [(ngModel)]="password" required>
			<button type="submit" [disabled]="!form.form.valid">Mostrar</button>
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
	username: string;
	cpf: Number;
	birthday: number;
	password: number;
	toShow: boolean = false;

	constructor() {}

	ngOnInit(): void {}

	showInfo() {
		this.toShow = !this.toShow
	}
}
