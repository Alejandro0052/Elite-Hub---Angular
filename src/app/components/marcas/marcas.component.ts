import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
    standalone: true,
    selector: 'app-marcas',
    templateUrl: './marcas.component.html',
    imports: [CommonModule, HttpClientModule], 
  })
  
export class MarcasComponent implements OnInit {
  marcas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerMarcas();
  }

  obtenerMarcas(): void {
    this.http.get('http://127.0.0.1:8000/api/marcas/').subscribe(
      (data: any) => {
        console.log('Datos recibidos del backend:', data);
        this.marcas = data.map((marca: any) => ({
          imagen_de_perfil: `http://127.0.0.1:8000${marca.imagen_de_perfil}`, 
          nombreCompleto: `${marca.usuario.first_name} ${marca.usuario.last_name}`,
          descripcion: marca.descripcion,
        }));
      },
      (error) => {
        console.error('Error al obtener los patrocinadores:', error);
      }
    );
  }
}
