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
				.catch((error) => {
					this.showToast(error, 'error');
				})
				.finally(() => {
					this.isLoading = false;
				});
		} else {
			console.log('Formulario inválido');
		}
	}

	// Función para mostrar el toast
	showToast(message: string, type: 'success' | 'error' = 'success'): void {
		const toastElement = document.createElement('div');

		// Establecer la clase base y el color de fondo según el tipo
		toastElement.className =
			'fixed bottom-4 right-4 text-white p-4 rounded-lg shadow-md';

		if (type === 'error') {
			toastElement.classList.add('bg-red-500'); // Color de fondo para errores
		} else {
			toastElement.classList.add('bg-green-500'); // Color de fondo para éxito
		}

		toastElement.innerText = message;

		document.body.appendChild(toastElement);

		// Eliminar el toast después de 3 segundos
		setTimeout(() => {
			toastElement.remove();
		}, 3000);
	}
}
