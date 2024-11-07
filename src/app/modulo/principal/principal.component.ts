import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
    constructor(private router:Router){

    }
    onCompras(){
      this.router.navigate(['/compra'])
    }
    onHistorial(){
      this.router.navigate(['/historial'])
    }
}
