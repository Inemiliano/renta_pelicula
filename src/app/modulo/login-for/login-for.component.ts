import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-for',
  templateUrl: './login-for.component.html',
  styleUrls: ['./login-for.component.css'] // Corrige a styleUrls
})
export class LoginForComponent {
    nombre: string = '';
    apellido: string = '';
    usuario: string = '';
    password: string = '';
  
    constructor(private router: Router) {} 
  
    onSubmit() {
      const newUser = {
        nombre: this.nombre,
        apellido: this.apellido,
        usuario: this.usuario,
        password: this.password,
      };
  
      // Guardar el nuevo usuario en localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
  
      // Limpiar los campos
      this.nombre = '';
      this.apellido = '';
      this.usuario = '';
      this.password = '';
  
      this.router.navigate(['/login']);
    }
  
    captureNombre(event: Event) {
      this.nombre = (event.target as HTMLInputElement).value;
    }
  
    captureApellido(event: Event) {
      this.apellido = (event.target as HTMLInputElement).value;
    }
  
    captureUsuario(event: Event) {
      this.usuario = (event.target as HTMLInputElement).value;
    }
  
    capturePassword(event: Event) {
      this.password = (event.target as HTMLInputElement).value;
    }
}

