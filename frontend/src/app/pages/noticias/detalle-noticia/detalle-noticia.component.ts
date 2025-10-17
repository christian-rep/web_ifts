import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="noticia-container">
      <h1>Detalle de Noticia #{{ id() }}</h1>
      <div class="noticia-content">
        <p>Esta es una noticia de ejemplo con ID: <strong>{{ id() }}</strong></p>
        <p>En una implementación real, aquí se cargaría el contenido de la noticia desde el backend.</p>
        <div class="actions">
          <a routerLink="/">← Volver al inicio</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .noticia-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    .noticia-content {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid #e9ecef;
    }
    .actions {
      margin-top: 2rem;
    }
    a {
      color: #007bff;
      text-decoration: none;
      padding: 0.5rem 1rem;
      background: #e3f2fd;
      border-radius: 4px;
      display: inline-block;
    }
    a:hover {
      background: #bbdefb;
    }
  `]
})
export class DetalleNoticiaComponent {
  // ✅ Nueva forma en v19 - Input binding directo de la ruta
  id = input.required<string>();
}
