import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { API_ENDPOINTS } from '../../../config/api-endpoints';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private apiUrl = environment.apiUrl;
	//private apiUrl = 'http://127.0.0.1:8000/api/register/';

	constructor() {}

	// Método para el login
	async login(email: string, password: string): Promise<any> {
		const body = { email, password };
		try {
			const response = await axios.post(
				`${this.apiUrl}${API_ENDPOINTS.AUTH.LOGIN}`,
				body,
			);
			console.log(response);
			if (response.data) {
				localStorage.setItem('access_token', response.data.access);
				localStorage.setItem('refresh_token', response.data.refresh);
				localStorage.setItem('username', response.data.username);
			}
			return response.data;
		} catch (error) {
			console.error('Error en login:', error);
			throw error;
		}
	}

	// Método para el registro
	async registerUser(form: any): Promise<any> {
		try {
			const response = await axios.post(
				`${this.apiUrl}${API_ENDPOINTS.AUTH.REGISTER_USER}`,
				form,
			);
			if (response.data.token) {
				localStorage.setItem('authToken', response.data.token); // Guarda el token en el localStorage
			}
			return response.data;
		} catch (error) {
			console.error('Error en registro:', error);
			throw error;
		}
	}

	async registerNutricionista(form: any): Promise<any> {
		try {
			const response = await axios.post(
				`${this.apiUrl}${API_ENDPOINTS.AUTH.REGISTER_NUTRICIONISTAS}`,
				form,
			);
			if (response.data.token) {
				localStorage.setItem('authToken', response.data.token); // Guarda el token en el localStorage
			}
			return response.data;
		} catch (error) {
			console.error('Error en registro:', error);
			throw error;
		}
	}

	async registerPatrocinador(form: any): Promise<any> {
		try {
			const response = await axios.post(
				`${this.apiUrl}${API_ENDPOINTS.AUTH.REGISTER_PATROCINADORES}`,
				form,
			);
			if (response.data.token) {
				localStorage.setItem('authToken', response.data.token); // Guarda el token en el localStorage
			}
			return response.data;
		} catch (error) {
			console.error('Error en registro:', error);
			throw error;
		}
	}

	async registerMarcas(form: any): Promise<any> {
		try {
			const response = await axios.post(
				`${this.apiUrl}${API_ENDPOINTS.AUTH.REGISTER_MARCAS}`,
				form,
			);
			if (response.data.token) {
				localStorage.setItem('authToken', response.data.token); // Guarda el token en el localStorage
			}
			return response.data;
		} catch (error) {
			console.error('Error en registro:', error);
			throw error;
		}
	}

	// Método para obtener el token
	getToken(): string | null {
		return localStorage.getItem('refresh_token');
	}

	// Método para verificar si el usuario está autenticado
	isAuthenticated(): boolean {
		return !!this.getToken();
	}

	// Método para cerrar sesión
	logout(): void {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		localStorage.removeItem('username');
	}
}