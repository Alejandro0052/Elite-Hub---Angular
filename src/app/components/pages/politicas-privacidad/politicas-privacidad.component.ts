import { ParametrosService } from 'app/services/parametros/parametros.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-politicas-privacidad',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './politicas-privacidad.component.html',
})
export class PoliticasPrivacidadComponent {
	public politica_tratamiento_datos: string | null = null;

	constructor(public parametrosService: ParametrosService) {}

	ngOnInit(): void {
		this.parametrosService
			.getParametros()
			.then((response) => {
				this.politica_tratamiento_datos =
					response[0].politica_tratamiento_datos;
			})
			.catch((error) => console.error(error));
	}
}
