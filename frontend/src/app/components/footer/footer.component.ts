import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 IFTS14 - Instituto de Formación Técnica Superior N°14</p>
        <p>Desarrollado con Angular 19</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #34495e;
      color: white;
      padding: 2rem 0;
      text-align: center;
      margin-top: auto;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    p {
      margin: 0.5rem 0;
    }
  `]
})
export class FooterComponent {

}
