import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="header">
      <div class="container">
        <h1 class="logo">
          <a routerLink="/">IFTS14</a>
        </h1>
        <nav class="nav">
          <a routerLink="/" class="nav-link">Inicio</a>
          <a routerLink="/noticias/1" class="nav-link">Noticias</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: #2c3e50;
      color: white;
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .nav {
      display: flex;
      gap: 2rem;
    }
    .nav-link {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    .nav-link:hover {
      background: rgba(255,255,255,0.1);
    }
  `]
})
export class HeaderComponent {

}
