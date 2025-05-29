import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';


@Component({
    standalone: true,
    selector: 'app-patrocinador',
    templateUrl: './patrocinadores.component.html',
    imports: [CommonModule, HttpClientModule,RouterLink], 
  })
  
export class PatrocinadoresComponent implements OnInit {
  patrocinadores: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerPatrocinadores();
  }

  obtenerPatrocinadores(): void {
    this.http.get('http://127.0.0.1:8000/api/patrocinadores/').subscribe(
      (data: any) => {
        console.log('Datos recibidos del backend:', data);
        this.patrocinadores = data.map((patrocinador: any) => ({
          imagen_de_perfil: `http://127.0.0.1:8000${patrocinador.imagen_de_perfil}`, 
          nombreCompleto: `${patrocinador.usuario.first_name} ${patrocinador.usuario.last_name}`,
          deportistas_interes: patrocinador.deportistas_interes,
          descripcion: patrocinador.descripcion,
        }));
      },
      (error) => {
        console.error('Error al obtener los patrocinadores:', error);
      }
    );
  }
}
