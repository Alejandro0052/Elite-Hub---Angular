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
				
				this.showToast('Inicio de sesión exitoso', 'success', 10000);
				this.router.navigate(['/home']).then(() => {

				});
			})
				.catch((error) => {
					this.showToast('Credenciales incorrectas', 'error', 10000);
				})
				.finally(() => {
					this.isLoading = false;
				});
		} else {
			console.log('Formulario inválido');
			
		}
	}


	showToast(message: string, type: 'success' | 'error' = 'success', duration: number = 10000): void {
	
		const toastElement = document.createElement('div');
		toastElement.style.position = 'fixed';
		toastElement.style.bottom = '16px';
		toastElement.style.right = '16px';
		toastElement.style.backgroundColor = type === 'error' ? '#f87171' : '#34d399'; 
		toastElement.style.color = 'white';
		toastElement.style.padding = '16px';
		toastElement.style.borderRadius = '8px';
		toastElement.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
		toastElement.style.opacity = '1'; 
		toastElement.style.transition = 'opacity 1s ease';
		toastElement.style.zIndex = '9999';
		toastElement.innerText = message;
		document.body.appendChild(toastElement);

		setTimeout(() => {
			toastElement.style.opacity = '0';
			setTimeout(() => {
				toastElement.remove();
			}, 500); 
		}, duration);
	}
}