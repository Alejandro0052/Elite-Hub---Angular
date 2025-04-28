import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './header.component.html',
})
export class HeaderComponent {
	isLoggedIn: boolean = false; // Estado de autenticación
	username: string | null = ''; // Nombre de usuario

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		// Comprobar si el usuario está autenticado
		this.isLoggedIn = this.authService.isAuthenticated();
		// Si está autenticado, obtener el nombre de usuario
		if (this.isLoggedIn) {
			this.username = localStorage.getItem('username');
		}
	}

	logout() {
		this.authService.logout();
		this.showToast('Has cerrado sesión', 'error');
		window.location.reload();
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
