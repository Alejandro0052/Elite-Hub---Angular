import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsComponent } from '../../shared/cards/news/news.component';
import { StatsComponent } from '../../shared/cards/stats/stats.component';
import { EventsComponent } from '../../shared/cards/events/events.component';
import { TestimonialsComponent } from 'app/components/shared/carousels/testimonials/testimonials.component';
import { TestimonialsService } from 'app/services/testimonials/testimonial.service';
import { HttpClientModule } from '@angular/common/http';
import { EventosService } from 'app/services/eventos/eventos.service';

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
  carouselTestimonials: { image: string; text: string; title: string }[] = [];
  eventosLimitados: { image: string; title: string; description: string; date: string }[] = [];

  constructor(
    private testimonialsService: TestimonialsService,
    private eventosService: EventosService
  ) {}

  async ngOnInit() {
    try {
      this.carouselTestimonials = await this.testimonialsService.getTestimonials();
      const eventos = await this.eventosService.getEventos();
      this.eventosLimitados = eventos.slice(0, 4);
    } catch (error) {
      console.error('Error cargando datos:', error);
    }
  }
}


// eventos: any[] = [];

// ngOnInit(): void {
//   this.eventosService.getEventos().then((data) => {
//     this.eventos = data;
//   });
// }


