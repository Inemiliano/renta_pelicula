import { Component, OnInit } from '@angular/core';

interface Renta {
  nombre: string;
  tipo: string; // 'pelicula', 'serie', 'suscripcion'
  fechaRenta: string;
  fechaEntrega?: string; // Incluimos la propiedad fechaEntrega
  tipoSuscripcion?: string; // Agregado para suscripciones
  metodoPago?: string; // Agregado para el método de pago
  total?: string;
}

interface Suscripcion {
  nombre: string;
  fecha: string; // Fecha de suscripción
  tipoSuscripcion: string; // Tipo de suscripción
  metodoPago: string; // Método de pago
}

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  datosPeliculas: Renta[] = [];
  datosSeries: Renta[] = [];
  datosSuscripciones: Renta[] = []; // Agregado para suscripciones
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
    this.cargarSuscripciones();
  }

  cargarSuscripciones() {
    const suscripcionesGuardadas: Suscripcion[] = JSON.parse(localStorage.getItem('suscripciones') || '[]');
    this.datosSuscripciones = suscripcionesGuardadas.map((suscripcion) => ({
      nombre: suscripcion.nombre,
      fechaRenta: suscripcion.fecha,
      tipoSuscripcion: suscripcion.tipoSuscripcion,
      metodoPago: suscripcion.metodoPago,
      tipo: 'suscripcion', // Aseguramos que el tipo sea 'suscripcion'
    }));
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
      this.datosSuscripciones = this.datosSuscripciones.filter(suscripcion => suscripcion !== renta); // Elimina suscripciones
      this.guardarDatos();
      alert('Renta eliminada correctamente');
    }
  }

  guardarDatos() {
    const datosActualizados = [...this.datosPeliculas, ...this.datosSeries, ...this.datosSuscripciones];
    localStorage.setItem('datosRenta', JSON.stringify(datosActualizados));
  }
}
