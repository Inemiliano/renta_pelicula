import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface User {
  nombre: string;
  apellido: string;
  usuario: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Asegúrate de que el nombre sea styleUrls
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Recuperar los usuarios desde localStorage
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    // Verificar el contenido de users
    console.log(users); 

    const userExists = users.some(user => user.usuario === this.usuario && user.password === this.password);

    if (userExists) {
      this.router.navigate(['/principal']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  captureUsuario(event: Event) {
    this.usuario = (event.target as HTMLInputElement).value;
  }

  capturePassword(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }
}
