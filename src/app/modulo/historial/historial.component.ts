import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  datosRenta: any[] = []; 

  ngOnInit(): void {
    
    const datosGuardados = localStorage.getItem('datosRenta');
    if (datosGuardados) {
      this.datosRenta.push(JSON.parse(datosGuardados)); // Agregamos los datos a la lista
    }
  }
}
