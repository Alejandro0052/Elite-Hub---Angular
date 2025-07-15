import { ParametrosService } from './../../services/parametros/parametros.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
	selector: 'app-terminos-condiciones',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './terminos-condiciones.component.html',
})
export class TerminosCondicionesComponent {
	public terminos_condiciones: string | null = null;

	constructor(public parametrosService: ParametrosService) {}

	ngOnInit(): void {
		this.parametrosService
			.getParametros()
			.then((response) => {
				this.terminos_condiciones = response[0].terminos_condiciones;
			})
			.catch((error) => console.error(error));
	}
}
