import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
    standalone: true,
    selector: 'app-deportistas',
    templateUrl: './deportistas.component.html',
    imports: [CommonModule, HttpClientModule], 
  })
  
export class DeportistasComponent implements OnInit {
  deportistas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerDeportistas();
  }

  obtenerDeportistas(): void {
    this.http.get('http://127.0.0.1:8000/api/deportistas/').subscribe(
      (data: any) => {
        console.log('Datos recibidos del backend:', data);
        this.deportistas = data.map((deportista: any) => ({
          imagen_de_perfil: `http://127.0.0.1:8000${deportista.imagen_de_perfil}`, 
          nombreCompleto: `${deportista.usuario.first_name} ${deportista.usuario.last_name}`,
          deporte: deportista.deporte,
          descripcion: deportista.descripcion,
        }));
      },
      (error) => {
        console.error('Error al obtener los patrocinadores:', error);
      }
    );
  }
}
