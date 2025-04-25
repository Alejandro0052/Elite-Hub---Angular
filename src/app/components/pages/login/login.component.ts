import { Component } from '@angular/core';
import {
	FormGroup,
	ReactiveFormsModule,
	FormControl,
	Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [RouterLink, ReactiveFormsModule],
	templateUrl: './login.component.html',
})
export class LoginComponent {
	isLoading: boolean = false;
	loginForm!: FormGroup;

	constructor(
		private authService: AuthService,
		private router: Router,
	) {}

	ngOnInit() {
		this.initializeLoginForm();
	}

	initializeLoginForm() {
		this.loginForm = new FormGroup({
			username: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
		});
	}

	public login() {
		if (this.loginForm.valid) {
			this.isLoading = true;

			this.authService
				.login(
					this.loginForm.value.username,
					this.loginForm.value.password,
				)
				.then((response) => {
					this.showToast(
						`Bienvenido de nuevo ${response.username}`,
						'success',
					);
					this.router.navigate(['/']);
				})
				.catch((e) => {
					this.showToast(e.message, 'error');
				})
				.finally(() => {
					this.isLoading = false;
				});
		} else {
			this.loginForm.markAllAsTouched();
			this.showToast(
				'Hay un error en el formulario, por favor valida todos los campos',
				'error',
			);
		}
	}

	showToast(
		message: string,
		type: 'success' | 'error' = 'success',
		duration: number = 5000,
	): void {
		const toastElement = document.createElement('div');
		toastElement.style.position = 'fixed';
		toastElement.style.bottom = '16px';
		toastElement.style.right = '16px';
		toastElement.style.backgroundColor =
			type === 'error' ? '#f87171' : '#34d399';
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
			toastElement.remove();
		}, duration);
	}
}
