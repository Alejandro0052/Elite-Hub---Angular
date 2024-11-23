import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [RouterLink, FormsModule],
	templateUrl: './login.component.html',
})
export class LoginComponent {
	isLoading: boolean = false;

	constructor(
		private authService: AuthService,
		private router: Router,
	) {}

	login(formulario: any) {
		if (formulario.valid) {
			this.isLoading = true;

			this.authService
				.login(formulario.value.username, formulario.value.password)
				.then((response) => {
					this.showToast('Bienvenido, ' + formulario.value.username);
					this.router.navigate(['/']).then(() => {
						window.location.reload();
					});
				})
				.catch((error) => {
					this.showToast(
						error.response.data.non_field_errors,
						'error',
					);
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
