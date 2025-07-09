import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';
import { API_ENDPOINTS } from '../../../config/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  private apiUrl = environment.apiUrl;

  constructor() {}

  async getEventos(): Promise<any[]> {
    try {
      const response = await axios.get(
        `${this.apiUrl}${API_ENDPOINTS.EVENTOS.GET_ALL}`,
      );

      return response.data.map((item: any) => ({
        image: item.evento_imagen.startsWith('http')
          ? item.evento_imagen
          : `${this.apiUrl}${item.evento_imagen}`,
        title: item.titulo,
        description: item.descripcion,
        date: item.fecha,
      }));
    } catch (error) {
      console.error('Error al obtener eventos:', error);
      throw error;
    }
  }
}
