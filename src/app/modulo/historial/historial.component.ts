import { Component, OnInit } from '@angular/core';

interface Renta {
  nombre: string;
  tipo: string;
  fechaRenta: string;
  fechaEntrega?: string; // Incluimos la propiedad fechaEntrega
  tiempoRenta: string;
  pelicula?: string;
  serie?: string;
  total?: string;
}

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  datosPeliculas: Renta[] = [];
  datosSeries: Renta[] = [];
  editar: boolean = false; // Estado de edición

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    const datosGuardados = localStorage.getItem('datosRenta');
    if (datosGuardados) {
      try {
        const datosArray = JSON.parse(datosGuardados) as Renta[];
        this.datosPeliculas = datosArray.filter(renta => renta.tipo === 'pelicula');
        this.datosSeries = datosArray.filter(renta => renta.tipo === 'serie');
      } catch (e) {
        console.error('Error al parsear los datos de localStorage:', e);
      }
    }
  }

  activarEdicion() {
    if (this.editar) {
      this.guardarDatos();
    }
    this.editar = !this.editar; // Cambia el estado de edición
  }

  actualizarCampo(renta: Renta, campo: string, event: Event) {
    const target = event.target as HTMLInputElement;
    const valor = target.value;
    if (campo === 'fechaEntrega') {
      renta[campo] = valor; // Actualiza fechaEntrega
    } else if (campo === 'fechaRenta') {
      renta[campo] = valor; // Actualiza fechaRenta
    }
    this.guardarDatos();
  }

  eliminarRenta(renta: Renta): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta renta?')) {
      this.datosPeliculas = this.datosPeliculas.filter(pelicula => pelicula !== renta);
      this.datosSeries = this.datosSeries.filter(serie => serie !== renta);
      this.guardarDatos();
      alert('Renta eliminada correctamente');
    }
  }

  guardarDatos() {
    const datosActualizados = [...this.datosPeliculas, ...this.datosSeries];
    localStorage.setItem('datosRenta', JSON.stringify(datosActualizados));
  }
}
