import { Component, Input } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
	selector: 'app-stats',
	standalone: true,
	imports: [CountUpModule],
	templateUrl: './stats.component.html',
})
export class StatsComponent {
	@Input() startValue: number = 0;
	@Input({ required: true }) endValue!: number;
	@Input() text: string = '';
	@Input() faIcon: string = '';
}
