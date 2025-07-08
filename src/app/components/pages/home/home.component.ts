import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsComponent } from '../../shared/cards/news/news.component';
import { StatsComponent } from '../../shared/cards/stats/stats.component';
import { EventsComponent } from '../../shared/cards/events/events.component';
import { TestimonialsComponent } from 'app/components/shared/carousels/testimonials/testimonials.component';
import { TestimonialsService } from 'app/services/testimonials/testimonial.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
	standalone: true,
	selector: 'app-home',
	imports: [
		HttpClientModule, 
		RouterLink,
		NewsComponent,
		StatsComponent,
		EventsComponent,
		TestimonialsComponent,
	],
	templateUrl: './home.component.html',
})
export class HomeComponent {
	carouselTestimonials: { image: string; text: string }[] = [];

	constructor(private testimonialsService: TestimonialsService) {}

	async ngOnInit() {
		try {
			this.carouselTestimonials = await this.testimonialsService.getTestimonials();
		} catch (error) {
			console.error('Error cargando testimonios:', error);
		}
	}
}

