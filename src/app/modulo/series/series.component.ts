import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  constructor(private router:Router){

  }
  onCompras(){
    this.router.navigate(['/compra'])
  }
  onHistorial(){
    this.router.navigate(['/historial'])
  }
}


