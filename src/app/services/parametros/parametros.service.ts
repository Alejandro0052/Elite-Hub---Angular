import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';
import { API_ENDPOINTS } from '../../../config/api-endpoints';

@Injectable({
	providedIn: 'root',
})
export class ParametrosService {
	private apiUrl = environment.apiUrl;

	constructor() {}

	async getParametros(): Promise<any> {
		try {
			const response = await axios.get(
				`${this.apiUrl}${API_ENDPOINTS.PARAMETROS.PARAMETROS}`,
			);
			return response.data;
		} catch (error) {
			console.error('Error al obtener los parametros:', error);
			throw error;
		}
	}
}
