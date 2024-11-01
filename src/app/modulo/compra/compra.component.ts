import { Component } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  nombre: string = '';
  tipoSeleccionado: string = ''; 
  fechaRenta: string = '';
  tiempoRenta: string = '1';

  seleccionarTipo(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoSeleccionado = selectElement.value;
  }

  actualizarNombre(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.nombre = inputElement.value;
  }

  actualizarFechaRenta(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.fechaRenta = inputElement.value;
  }

  actualizarTiempoRenta(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.tiempoRenta = selectElement.value;
  }

  guardarDatos() {
  
    const datosExistentes = localStorage.getItem('datosRenta');

   
    let datosArray = [];

    if (datosExistentes) {
      try {
        datosArray = JSON.parse(datosExistentes);
        
      
        if (!Array.isArray(datosArray)) {
          datosArray = [datosArray];
        }
      } catch (e) {
        console.error('Error al parsear los datos existentes:', e);
      }
    }

    
    const nuevoRenta = {
      nombre: this.nombre,
      tipo: this.tipoSeleccionado,
      fechaRenta: this.fechaRenta,
      tiempoRenta: this.tiempoRenta,
      
    };

    datosArray.push(nuevoRenta);

    
    localStorage.setItem('datosRenta', JSON.stringify(datosArray));

    console.log('Datos guardados:', datosArray);
    alert('Datos guardados correctamente!');
  }
}

