import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './register.component.html',
})
export class RegisterComponent {
	constructor(public authService: AuthService) {}

	async registerNutricionista(formulario: any) {
		if (formulario.valid) {
			const formData = {
				usuario: {
					username: formulario.value.username,
					first_name: formulario.value.first_name,
					last_name: formulario.value.last_name,
					direccion: formulario.value.location,
					edad: formulario.value.age,
					password: formulario.value.password,
				},
				especialidad: formulario.value.especialidad,
			};

			this.authService
				.registerNutricionista(formData)
				.then((response) => console.log(response))
				.catch((error) => console.error(error));
		} else {
			console.log('Formulario inválido');
		}
	}
}
