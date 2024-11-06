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
			const response = await axios.post(`${this.apiUrl}`, body);
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
	async register(email: string, password: string): Promise<any> {
		const body = { email, password };
		try {
			const response = await axios.post(`${this.apiUrl}/register`, body);
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
