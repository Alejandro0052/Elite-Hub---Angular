import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { API_ENDPOINTS } from '../../../config/api-endpoints';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private apiUrl = environment.apiUrl;

	constructor() {}

	// Método para el login
	async login(email: string, password: string): Promise<any> {
		const body = { email, password };
		try {
			const response = await axios.post(
				`${this.apiUrl}${API_ENDPOINTS.AUTH.REGISTER_NUTRICIONISTAS}`,
				body,
			);
			console.log(response);
			if (response.data.token) {
				localStorage.setItem('authToken', response.data.token); // Guarda el token en el localStorage
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
		return localStorage.getItem('authToken');
	}

	// Método para verificar si el usuario está autenticado
	isAuthenticated(): boolean {
		return !!this.getToken();
	}

	// Método para cerrar sesión
	logout(): void {
		localStorage.removeItem('authToken');
	}
}
