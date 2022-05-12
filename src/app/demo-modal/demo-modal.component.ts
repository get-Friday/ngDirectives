import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-demo-modal",
	template: `
		<div class="card">
			<a (click)="showModal = !showModal">Open Demo Modal</a>
		</div>

		<div class="modal" *ngIf="showModal">
			<div class="modal__content">
				<h1>Example modal</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minima
					libero veniam, modi corrupti doloremque repellendus vitae mollitia.
					Ipsum voluptatibus ea ab quos molestiae at expedita maiores dolore a
					corrupti!
				</p>
				<a class="modal__close" (click)="showModal = !showModal">&times;</a>
			</div>
		</div>
	`,
	styleUrls: ['./demo-modal.component.scss'],
})
export class DemoModalComponent implements OnInit {
  showModal: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
