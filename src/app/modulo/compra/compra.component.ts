import { Component } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {

  // Creamos un objeto para almacenar los datos
  datosRenta: { nombre: string; fechaRenta: string; tiempoRenta: string } = {
    nombre: '',
    fechaRenta: '',
    tiempoRenta: '1'
  };

  // Métodos para actualizar cada campo al escribir en los inputs
  actualizarNombre(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.datosRenta.nombre = inputElement.value;
  }

  actualizarFechaRenta(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.datosRenta.fechaRenta = inputElement.value;
  }

  actualizarTiempoRenta(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.datosRenta.tiempoRenta = selectElement.value;
  }

  // Método para guardar los datos en localStorage
  guardarDatos() {
    localStorage.setItem('datosRenta', JSON.stringify(this.datosRenta));
    console.log('Datos guardados:', this.datosRenta);
    
    // Alerta para indicar que los datos han sido guardados
    alert('Datos guardados correctamente!');
  }
}

