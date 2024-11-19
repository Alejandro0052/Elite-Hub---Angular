import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-deportistas',
    templateUrl: './deportistas.component.html',
   // styleUrls: ['./deportistas.component.css'],
    imports: [CommonModule], // Asegúrate de incluir CommonModule
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
        this.deportistas = data;
      },
      (error) => {
        console.error('Error al obtener los deportistas:', error);
      }
    );
  }
}
