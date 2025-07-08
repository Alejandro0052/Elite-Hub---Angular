import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';
import { API_ENDPOINTS } from '../../../config/api-endpoints';

@Injectable({
	providedIn: 'root',
})
export class TestimonialsService {
	private apiUrl = environment.apiUrl;

	constructor() {}

	async getTestimonials(): Promise<any[]> {
	try {
		const response = await axios.get(
			`${this.apiUrl}${API_ENDPOINTS.TESTIMONIOS.GET_ALL}`,
		);

		// Adaptamos los campos al formato esperado por el componente
		return response.data.map((item: any) => ({
			image: item.testimonio_imagen.startsWith('http')
				? item.testimonio_imagen
				: `${this.apiUrl}${item.testimonio_imagen}`,
			text: item.descripcion,
		}));
	} catch (error) {
		console.error('Error al obtener testimonios:', error);
		throw error;
	}
  }
}
