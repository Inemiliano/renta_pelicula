import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-suscp',
  templateUrl: './login-suscp.component.html',
  styleUrls: ['./login-suscp.component.css']
})
export class LoginSuscpComponent implements OnInit {

  nombre: string = '';
  fecha: string = new Date().toISOString().substring(0, 10);
  tipoSuscripcion: string = '';
  metodoPago: string = '';
  mensajeGuardado: boolean = false;
  suscripcionesGuardadas: any[] = [];

  suscripciones = [
    { value: 'individual', label: 'Individual' },
    { value: 'duo', label: 'Duo' },
    { value: 'familiar', label: 'Familiar' },
    { value: 'estudiante', label: 'Estudiante' },
  ];

  ngOnInit() {
    this.cargarSuscripciones();
  }

  onSubmit(event: Event) {
    event.preventDefault();

    console.log("Nombre:", this.nombre);
    console.log("Fecha:", this.fecha);
    console.log("Tipo de Suscripción:", this.tipoSuscripcion);
    console.log("Método de Pago:", this.metodoPago);

    if (!this.nombre.trim() || !this.fecha.trim() || !this.tipoSuscripcion.trim() || !this.metodoPago.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const formData = {
      nombre: this.nombre,
      fecha: this.fecha,
      tipoSuscripcion: this.tipoSuscripcion,
      metodoPago: this.metodoPago
    };

    let suscripcionesGuardadas = JSON.parse(localStorage.getItem('suscripciones') || '[]');
    suscripcionesGuardadas.push(formData);
    localStorage.setItem('suscripciones', JSON.stringify(suscripcionesGuardadas));
    this.suscripcionesGuardadas = suscripcionesGuardadas;

    // Alerta de éxito
    window.alert("Suscripción guardada con éxito!");

    // Mostrar el mensaje de guardado visualmente también, si lo prefieres
    this.mensajeGuardado = true;
    setTimeout(() => {
      this.mensajeGuardado = false;
    }, 3000);

    this.resetForm();
  }

  cargarSuscripciones() {
    this.suscripcionesGuardadas = JSON.parse(localStorage.getItem('suscripciones') || '[]');
  }

  resetForm() {
    this.nombre = '';
    this.fecha = new Date().toISOString().substring(0, 10);
    this.tipoSuscripcion = '';
    this.metodoPago = '';
  }

  onNombreChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.nombre = target.value;
  }

  onFechaChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.fecha = target.value;
  }

  onTipoSuscripcionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.tipoSuscripcion = target.value;
  }

  onMetodoPagoChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.metodoPago = target.value;
  }
}

