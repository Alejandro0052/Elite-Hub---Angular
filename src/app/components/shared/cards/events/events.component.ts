import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-events',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './events.component.html',
})
export class EventsComponent {
	@Input() href: string = '';
	@Input({ required: true }) image!: string;
	@Input({ required: true }) title!: string;
	@Input() content: string = '';
	@Input({ required: true }) time!: string;
	@Input({ required: true }) date!: string;
}
