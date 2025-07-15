import { ParametrosService } from 'app/services/parametros/parametros.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-quienes-somos',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './quienes-somos.component.html',
})
export class QuienesSomosComponent {
	public quienes_somos: string | null = null;

	constructor(public parametrosService: ParametrosService) {}

	ngOnInit(): void {
		this.parametrosService
			.getParametros()
			.then((response) => {
				this.quienes_somos = response[0].quienes_somos;
			})
			.catch((error) => console.error(error));
	}
}
