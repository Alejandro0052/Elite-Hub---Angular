import { ParametrosService } from './../../services/parametros/parametros.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-terminos-condiciones',
	standalone: true,
	imports: [],
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
