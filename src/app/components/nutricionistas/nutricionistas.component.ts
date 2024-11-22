import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
    standalone: true,
    selector: 'app-nutricionistas',
    templateUrl: './nutricionistas.component.html',
    imports: [CommonModule, HttpClientModule], 
  })
  
export class NutricionistasComponent implements OnInit {
  nutricionistas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerNutricionistas();
  }

  obtenerNutricionistas(): void {
    this.http.get('http://127.0.0.1:8000/api/nutricionistas/').subscribe(
      (data: any) => {
        console.log('Datos recibidos del backend:', data);
        this.nutricionistas = data.map((nutricionista: any) => ({
          imagen_de_perfil: `http://127.0.0.1:8000${nutricionista.imagen_de_perfil}`, 
          nombreCompleto: `${nutricionista.usuario.first_name} ${nutricionista.usuario.last_name}`,
          descripcion: nutricionista.descripcion,
        }));
      },
      (error) => {
        console.error('Error al obtener los patrocinadores:', error);
      }
    );
  }
}
