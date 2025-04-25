import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-news',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './news.component.html',
})
export class NewsComponent {
	@Input() href: string = '';
	@Input({ required: true }) image!: string;
	@Input({ required: true }) title!: string;
	@Input() content: string = '';
	@Input({ required: true }) date!: string;
}
