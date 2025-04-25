import { Component } from '@angular/core';
import { ParametrosService } from '../../../services/parametros/parametros.service';

@Component({
	selector: 'app-contactenos',
	standalone: true,
	imports: [],
	templateUrl: './contactenos.component.html',
})
export class ContactenosComponent {
	public contactenos: string | null = null;

	constructor(public parametrosService: ParametrosService) {}

	ngOnInit(): void {
		this.parametrosService
			.getParametros()
			.then((response) => {
				this.contactenos = response[0].contactenos;
			})
			.catch((error) => console.error(error));
	}
}
