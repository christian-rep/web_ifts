import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioNoticiaComponent } from '../formulario-noticia/formulario-noticia.component';
import { ListaNoticiasAdminComponent } from '../lista-noticias-admin/lista-noticias-admin.component';

@Component({
  selector: 'app-panel-noticias',
  standalone: true,
  imports: [CommonModule, FormularioNoticiaComponent, ListaNoticiasAdminComponent],
  template: `
    <div class="panel-noticias">
      <header class="header-panel">
        <h1>Panel de Control - Noticias</h1>
        @if (vistaActual() === 'lista') {
          <button (click)="mostrarFormulario()" class="btn-nueva-noticia">
            + Nueva Noticia
          </button>
        } @else {
          <button (click)="volverALista()" class="btn-volver">
            ← Volver al listado
          </button>
        }
      </header>

      <main class="contenido-panel">
        @if (vistaActual() === 'lista') {
          <app-lista-noticias-admin
            (editarNoticia)="mostrarFormulario($event)">
          </app-lista-noticias-admin>
        } @else {
          <app-formulario-noticia
            [noticia]="noticiaAEditar()"
            (guardadoExitoso)="onGuardadoExitoso()">
          </app-formulario-noticia>
        }
      </main>
    </div>
  `,
  styles: [`
    .panel-noticias { padding: 1rem; }
    .header-panel { 
      display: flex; 
      justify-content: space-between; 
      align-items: center;
      margin-bottom: 2rem;
    }
    .btn-nueva-noticia, .btn-volver {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class PanelNoticiasComponent {
  vistaActual = signal<'lista' | 'formulario'>('lista');
  noticiaAEditar = signal<any>(null);

  mostrarFormulario(noticia?: any): void {
    this.noticiaAEditar.set(noticia || null);
    this.vistaActual.set('formulario');
  }

  volverALista(): void {
    this.vistaActual.set('lista');
    this.noticiaAEditar.set(null);
  }

  onGuardadoExitoso(): void {
    this.volverALista();
  }
}