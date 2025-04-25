import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsComponent } from '../../shared/cards/news/news.component';
import { StatsComponent } from '../../shared/cards/stats/stats.component';
import { EventsComponent } from '../../shared/cards/events/events.component';
import { TestimonialsComponent } from 'app/components/shared/carousels/testimonials/testimonials.component';

@Component({
	standalone: true,
	selector: 'app-home',
	imports: [
		RouterLink,
		NewsComponent,
		StatsComponent,
		EventsComponent,
		TestimonialsComponent,
	],
	templateUrl: './home.component.html',
})
export class HomeComponent {
	carouselTestimonials: { image: string; text: string }[] = [
		{
			image: 'logo.jpeg',
			text: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		},
		{
			image: 'alliance.jpg',
			text: '2',
		},
		{
			image: 'logo.jpeg',
			text: '3',
		},
		{
			image: 'alliance.jpg',
			text: '4',
		},
	];
}
