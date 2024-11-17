import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true, 
  templateUrl: './login.component.html',
  imports: [FormsModule] 
})
export class LoginComponent {
  login(formularioUser: NgForm): void {
    if (formularioUser.valid) {
      const { email, password } = formularioUser.value;
      console.log('Formulario enviado:', { email, password });
    } else {
      alert('Formulario inválido. Completa todos los campos.');
    }
  }
}
