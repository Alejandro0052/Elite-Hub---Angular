import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';
import { API_ENDPOINTS } from '../../../config/api-endpoints';


@Injectable({
	providedIn: 'root',
})

export class NoticiasService {
	private apiUrl = environment.apiUrl;

	constructor() {}

	async getNoticias(): Promise<any[]> {
	try {
		const response = await axios.get(
			`${this.apiUrl}${API_ENDPOINTS.NOTICIAS.GET_ALL}`,
		);

		return response.data.map((item: any) => ({
			image: item.foto_noticia.startsWith('http')
				? item.foto_noticia
				: `${this.apiUrl}${item.foto_noticia}`,
			// title: item.titulo,
            // text: item.texto_noticia,
            // date: item.fecha,
		}));
	} catch (error) {
		console.error('Error al obtener noticias:', error);
		throw error;
	}
  }
}
