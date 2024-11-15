import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './register.component.html',
})
export class RegisterComponent {
	isLoading: boolean = false;

	constructor(
		private authService: AuthService,
		private router: Router,
	) {}

	registerUser(formulario: any) {
		if (formulario.valid) {
			this.isLoading = true;
			const formData = {
				usuario: {
					username: formulario.value.username,
					first_name: formulario.value.first_name,
					last_name: formulario.value.last_name,
					email: formulario.value.email,
					direccion: formulario.value.direccion,
					edad: formulario.value.edad,
					password: formulario.value.password,
				},
				deporte: formulario.value.deporte,
				descripcion: formulario.value.descripcion,
			};

			this.authService
				.registerUser(formData)
				.then((response) => {
					this.showToast(response.message);
					this.router.navigate(['/']);
				})
				.catch((error) => console.error(error))
				.finally(() => {
					this.isLoading = false;
				});
		} else {
			console.log('Formulario inválido');
		}
	}

	registerNutricionista(formulario: any) {
		if (formulario.valid) {
			this.isLoading = true;
			const formData = {
				usuario: {
					username: formulario.value.username,
					first_name: formulario.value.first_name,
					last_name: formulario.value.last_name,
					email: formulario.value.email,
					direccion: formulario.value.direccion,
					edad: formulario.value.edad,
					password: formulario.value.password,
				},
				especialidad: formulario.value.especialidad,
			};

			this.authService
				.registerNutricionista(formData)
				.then((response) => {
					this.showToast(response.message);
					this.router.navigate(['/']);
				})
				.catch((error) => console.error(error))
				.finally(() => {
					this.isLoading = false;
				});
		} else {
			console.log('Formulario inválido');
		}
	}

	registerPatrocinador(formulario: any) {
		if (formulario.valid) {
			this.isLoading = true;
			const formData = {
				usuario: {
					username: formulario.value.username,
					first_name: formulario.value.first_name,
					last_name: formulario.value.last_name,
					email: formulario.value.email,
					direccion: formulario.value.direccion,
					edad: formulario.value.edad,
					password: formulario.value.password,
				},
				deporte_interes: formulario.value.deporteInteres,
			};

			this.authService
				.registerPatrocinador(formData)
				.then((response) => {
					this.showToast(response.message);
					this.router.navigate(['/']);
				})
				.catch((error) => console.error(error))
				.finally(() => {
					this.isLoading = false;
				});
		} else {
			console.log('Formulario inválido');
		}
	}

	registerMarcas(formulario: any) {
		if (formulario.valid) {
			this.isLoading = true;
			const formData = {
				usuario: {
					username: formulario.value.username,
					first_name: formulario.value.first_name,
					last_name: formulario.value.last_name,
					email: formulario.value.email,
					direccion: formulario.value.direccion,
					edad: formulario.value.edad,
					password: formulario.value.password,
				},
				razon_social: formulario.value.razon_social,
			};

			this.authService
				.registerMarcas(formData)
				.then((response) => {
					this.showToast(response.message);
					this.router.navigate(['/']);
				})
				.catch((error) => console.error(error))
				.finally(() => {
					this.isLoading = false;
				});
		} else {
			console.log('Formulario inválido');
		}
	}

	// Función para mostrar el toast
	showToast(message: string): void {
		const toastElement = document.createElement('div');
		toastElement.className =
			'fixed bottom-4 right-4 bg-accent text-white p-4 rounded-lg shadow-md';
		toastElement.innerText = message;

		document.body.appendChild(toastElement);

		setTimeout(() => {
			toastElement.remove();
		}, 3000);
	}
}
