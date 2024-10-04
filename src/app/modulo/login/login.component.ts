import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  
  users: any[] = [
    { usuario: '', password: '' }, 

  ];

  constructor(private router: Router) {}

  
  onSubmit() {
   
    const userExists = this.users.some(user => user.usuario === this.usuario && user.password === this.password);

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
