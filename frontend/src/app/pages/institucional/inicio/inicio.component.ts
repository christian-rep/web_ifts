import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Autoridad {
  nombre: string;
  apellido: string;
  cargo: string;
  email: string;
}

@Component({
  selector: 'app-institucional-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InstitucionalInicioComponent {
  
  autoridades: Autoridad[] = [
    {
      nombre: 'María Elena',
      apellido: 'Rodríguez',
      cargo: 'Directora General',
      email: 'directora@ifts14.edu.ar'
    },
    {
      nombre: 'Carlos Alberto',
      apellido: 'Fernández',
      cargo: 'Vicedirector Académico',
      email: 'vicedirector@ifts14.edu.ar'
    },
    {
      nombre: 'Ana Beatriz',
      apellido: 'González',
      cargo: 'Secretaria Académica',
      email: 'secretaria@ifts14.edu.ar'
    }
  ];

  descargarReglamento(): void {
    // Simulación de descarga
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Reglamento_Convivencia_IFTS14.pdf';
    link.click();
    alert('Iniciando descarga del Reglamento de Convivencia');
  }

  descargarProtocolos(): void {
    // Simulación de descarga
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Protocolos_Institucionales_IFTS14.pdf';
    link.click();
    alert('Iniciando descarga de los Protocolos Institucionales');
  }
}
