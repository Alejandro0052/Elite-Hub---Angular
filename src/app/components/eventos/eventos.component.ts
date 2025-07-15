import { Component, Input } from '@angular/core';
import { NgIf, NgForOf, CommonModule } from '@angular/common'; 
import { EventosService } from 'app/services/eventos/eventos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgForOf, NgIf,CommonModule, RouterLink],
  templateUrl: './eventos.component.html',
})
export class EventosComponent {
  @Input({ required: true }) items: {
    image: string;
    title: string;
    description: string;
    date: string;
  }[] = [];

  eventos: {
    image: string;
    title: string;
    description: string;
    date: string;
  }[] = [];

  constructor(private eventosService: EventosService) {}

  async ngOnInit() {
    try {
      this.eventos = await this.eventosService.getEventos();
    } catch (error) {
      console.error('Error cargando eventos:', error);
    }
  }


}

