import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
    standalone: true,
    selector: 'app-patrocinador',
    templateUrl: './patrocinadores.component.html',
    styleUrls: ['./patrocinadores.component.css'],
    imports: [CommonModule, HttpClientModule], 
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
        // Transformar los datos aquí para usar solo lo necesario
        this.patrocinadores = data.map((patrocinador: any) => ({
          nombreCompleto: `${patrocinador.usuario.first_name} ${patrocinador.usuario.last_name}`,
          deportistas_interes: patrocinador.deportistas_interes,
        }));
      },
      (error) => {
        console.error('Error al obtener los patrocinadores:', error);
      }
    );
  }
}
