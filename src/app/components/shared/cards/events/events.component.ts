import { Component, Input } from '@angular/core';
import { NgIf, NgForOf, CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgForOf, NgIf,CommonModule],
  templateUrl: './events.component.html',
})
export class EventsComponent {
  @Input({ required: true }) items: {
    image: string;
    title: string;
    description: string;
    date: string;
  }[] = [];
}