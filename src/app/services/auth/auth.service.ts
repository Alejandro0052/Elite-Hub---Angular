import { Injectable, signal } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { API_ENDPOINTS } from '../../../config/api-endpoints';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private apiUrl = environment.apiUrl;
	private currentUsername: string | null = localStorage.getItem('username');

	isAuthenticatedSignal = signal(this.isAuthenticated());
	usernameSignal = signal(this.currentUsername);

	constructor() {}

	async login(username: string, password: string): Promise<any> {
		const body = { username, password };
		try {
			const response = await axios.post(
				`${this.apiUrl}${API_ENDPOINTS.AUTH.LOGIN}`, // Todos los endpoints deben estar en config/api-endpoints.ts
				body,
			);
			if (response.data) {
				localStorage.setItem('access_token', response.data.access);
				localStorage.setItem('refresh_token', response.data.refresh);
				localStorage.setItem('username', response.data.username);
				this.isAuthenticatedSignal.set(true);
				this.usernameSignal.set(response.data.username);
			}
			return response.data;
		} catch (e: any) {
			let mensaje = 'Ocurrió un error inesperado.';
			if (e.message === 'Network Error' || e.code === 'ERR_NETWORK') {
				mensaje =
					'No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet.';
			} else if (e.response) {
				// El servidor respondió con un código fuera del rango 2xx
				switch (e.response.status) {
					case 400:
						mensaje =
							'Solicitud incorrecta. Verifica los datos ingresados.';
						break;
					case 401:
						mensaje =
							'Credenciales incorrectas. Por favor, intenta de nuevo.';
						break;
					case 500:
						mensaje =
							'Error interno del servidor. Intenta más tarde.';
						break;
					default:
						mensaje =
							'Error en la autenticación. Código: ' +
							e.response.status;
				}
			}
			console.error('Error en login:', e);
			throw new Error(mensaje);
		}
	}

	async registerUser(form: any): Promise<any> {
		try {
			const response = await axios.post(
				`${this.apiUrl}${API_ENDPOINTS.AUTH.REGISTER_USER}`,
				form,
			);
			if (response.data.token) {
				localStorage.setItem('access_token', response.data.token);
				localStorage.setItem('refresh_token', response.data.refresh);
				localStorage.setItem('username', response.data.username);
				this.isAuthenticatedSignal.set(true);
				this.usernameSignal.set(response.data.username);
			}
			return response.data;
		} catch (e: any) {
			let mensaje = 'Ocurrió un error inesperado.';
			if (e.message === 'Network Error' || e.code === 'ERR_NETWORK') {
				mensaje =
					'No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet.';
			} else if (e.response) {
				// El servidor respondió con un código fuera del rango 2xx
				switch (e.response.status) {
					case 400:
						mensaje =
							'Solicitud incorrecta. Verifica los datos ingresados.';
						break;
					case 401:
						mensaje =
							'Credenciales incorrectas. Por favor, intenta de nuevo.';
						break;
					case 500:
						mensaje =
							'Error interno del servidor. Intenta más tarde.';
						break;
					default:
						mensaje =
							'Error en la autenticación. Código: ' +
							e.response.status;
				}
			}
			console.error('Error en login:', e);
			throw new Error(mensaje);
		}
	}

	async registerNutricionista(form: any): Promise<any> {
		try {
			const response = await axios.post(
				`${this.apiUrl}${API_ENDPOINTS.AUTH.REGISTER_NUTRICIONISTAS}`,
				form,
			);
			if (response.data.token) {
				localStorage.setItem('access_token', response.data.token);
				localStorage.setItem('refresh_token', response.data.refresh);
				localStorage.setItem('username', response.data.username);
				this.isAuthenticatedSignal.set(true);
				this.usernameSignal.set(response.data.username);
			}
			return response.data;
		} catch (e: any) {
			let mensaje = 'Ocurrió un error inesperado.';
			if (e.message === 'Network Error' || e.code === 'ERR_NETWORK') {
				mensaje =
					'No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet.';
			} else if (e.response) {
				// El servidor respondió con un código fuera del rango 2xx
				switch (e.response.status) {
					case 400:
						mensaje =
							'Solicitud incorrecta. Verifica los datos ingresados.';
						break;
					case 401:
						mensaje =
							'Credenciales incorrectas. Por favor, intenta de nuevo.';
						break;
					case 500:
						mensaje =
							'Error interno del servidor. Intenta más tarde.';
						break;
					default:
						mensaje =
							'Error en la autenticación. Código: ' +
							e.response.status;
				}
			}
			console.error('Error en login:', e);
			throw new Error(mensaje);
		}
	}

	async registerPatrocinador(form: any): Promise<any> {
		try {
			const response = await axios.post(
				`${this.apiUrl}${API_ENDPOINTS.AUTH.REGISTER_PATROCINADORES}`,
				form,
			);
			if (response.data.token) {
				localStorage.setItem('access_token', response.data.token);
				localStorage.setItem('refresh_token', response.data.refresh);
				localStorage.setItem('username', response.data.username);
				this.isAuthenticatedSignal.set(true);
				this.usernameSignal.set(response.data.username);
			}
			return response.data;
		} catch (e: any) {
			let mensaje = 'Ocurrió un error inesperado.';
			if (e.message === 'Network Error' || e.code === 'ERR_NETWORK') {
				mensaje =
					'No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet.';
			} else if (e.response) {
				// El servidor respondió con un código fuera del rango 2xx
				switch (e.response.status) {
					case 400:
						mensaje =
							'Solicitud incorrecta. Verifica los datos ingresados.';
						break;
					case 401:
						mensaje =
							'Credenciales incorrectas. Por favor, intenta de nuevo.';
						break;
					case 500:
						mensaje =
							'Error interno del servidor. Intenta más tarde.';
						break;
					default:
						mensaje =
							'Error en la autenticación. Código: ' +
							e.response.status;
				}
			}
			console.error('Error en login:', e);
			throw new Error(mensaje);
		}
	}

	async registerMarcas(form: any): Promise<any> {
		try {
			const response = await axios.post(
				`${this.apiUrl}${API_ENDPOINTS.AUTH.REGISTER_MARCAS}`,
				form,
			);
			if (response.data.token) {
				localStorage.setItem('access_token', response.data.token);
				localStorage.setItem('refresh_token', response.data.refresh);
				localStorage.setItem('username', response.data.username);
				this.isAuthenticatedSignal.set(true);
				this.usernameSignal.set(response.data.username);
			}
			return response.data;
		} catch (e: any) {
			let mensaje = 'Ocurrió un error inesperado.';
			if (e.message === 'Network Error' || e.code === 'ERR_NETWORK') {
				mensaje =
					'No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet.';
			} else if (e.response) {
				// El servidor respondió con un código fuera del rango 2xx
				switch (e.response.status) {
					case 400:
						mensaje =
							'Solicitud incorrecta. Verifica los datos ingresados.';
						break;
					case 401:
						mensaje =
							'Credenciales incorrectas. Por favor, intenta de nuevo.';
						break;
					case 500:
						mensaje =
							'Error interno del servidor. Intenta más tarde.';
						break;
					default:
						mensaje =
							'Error en la autenticación. Código: ' +
							e.response.status;
				}
			}
			console.error('Error en login:', e);
			throw new Error(mensaje);
		}
	}

	// Método para obtener el token
	getToken(): string | null {
		return localStorage.getItem('access_token');
	}

	// Método para verificar si el usuario está autenticado
	isAuthenticated(): boolean {
		return !!localStorage.getItem('access_token');
	}

	getUsername(): string | null {
		return this.currentUsername;
	}

	// Método para cerrar sesión
	logout(): void {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		localStorage.removeItem('username');
		this.isAuthenticatedSignal.set(false);
		this.usernameSignal.set(null);
	}
}
