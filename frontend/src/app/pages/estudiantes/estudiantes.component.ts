import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent {
  seccionActiva = signal<string>('horarios');
  carreraSeleccionada = signal<string>('');

  toggleSeccion(seccion: string): void {
    if (this.seccionActiva() === seccion) {
      this.seccionActiva.set('');
    } else {
      this.seccionActiva.set(seccion);
    }
  }

  cambiarCarrera(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.carreraSeleccionada.set(select.value);
  }

  descargarDocumento(tipo: string): void {
    console.log(`Descargando documento: ${tipo}`);
    // Lógica para descargar documentos
    alert(`Iniciando descarga de ${tipo}`);
  }

  verGuia(event: Event): void {
    event.preventDefault();
    alert('Abriendo guía de uso del aula virtual');
  }

  contactarSoporte(event: Event): void {
    event.preventDefault();
    alert('Redirigiendo a soporte técnico');
  }

  solicitarBeca(): void {
    alert('Redirigiendo al formulario de becas');
  }

  solicitarTutoria(): void {
    alert('Solicitando tutoría académica');
  }

  solicitarOrientacion(): void {
    alert('Solicitando orientación vocacional');
  }

  solicitarContencion(): void {
    alert('Contactando con el área de contención psicológica');
  }
}