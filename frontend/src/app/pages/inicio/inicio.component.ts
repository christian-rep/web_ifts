import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="inicio-container">
      <h1>Bienvenido a IFTS14</h1>
      <p>Instituto de Formación Técnica Superior N°14</p>
      
      <!-- Sección de Novedades Flash -->
      <section class="novedades-flash">
        <div class="section-header">
          <h2>Novedades Flash</h2>
          <span class="flash-indicator">EN VIVO</span>
        </div>
        <div class="flash-content">
          <div class="flash-tweet urgent">
            <div class="tweet-header">
              <div class="tweet-avatar"></div>
              <div class="tweet-info">
                <div class="tweet-author">IFTS14 Oficial</div>
                <div class="tweet-time">hace 2h</div>
              </div>
            </div>
            <div class="tweet-content">
              <p><strong>URGENTE:</strong> Inscripciones abiertas para el segundo cuatrimestre. Hasta el 15 de agosto - Cupos limitados</p>
            </div>
            <div class="tweet-actions">
              <span class="action">12</span>
              <span class="action">8</span>
              <span class="action">24</span>
            </div>
          </div>
          
          <div class="flash-tweet">
            <div class="tweet-header">
              <div class="tweet-avatar"></div>
              <div class="tweet-info">
                <div class="tweet-author">IFTS14 Oficial</div>
                <div class="tweet-time">hace 4h</div>
              </div>
            </div>
            <div class="tweet-content">
              <p><strong>NUEVA CARRERA:</strong> Tecnicatura en Desarrollo de Software. Inicio de clases: Septiembre 2024</p>
            </div>
            <div class="tweet-actions">
              <span class="action">15</span>
              <span class="action">12</span>
              <span class="action">31</span>
            </div>
          </div>
          
          <div class="flash-tweet">
            <div class="tweet-header">
              <div class="tweet-avatar"></div>
              <div class="tweet-info">
                <div class="tweet-author">IFTS14 Oficial</div>
                <div class="tweet-time">hace 6h</div>
              </div>
            </div>
            <div class="tweet-content">
              <p>Ceremonia de egresados 2024 - Viernes 20 de diciembre en el Auditorio principal</p>
            </div>
            <div class="tweet-actions">
              <span class="action">8</span>
              <span class="action">5</span>
              <span class="action">18</span>
            </div>
          </div>
          
          <div class="flash-tweet">
            <div class="tweet-header">
              <div class="tweet-avatar"></div>
              <div class="tweet-info">
                <div class="tweet-author">IFTS14 Oficial</div>
                <div class="tweet-time">hace 1d</div>
              </div>
            </div>
            <div class="tweet-content">
              <p>Nuevos horarios de consulta para estudiantes. Lunes a viernes de 9:00 a 17:00</p>
            </div>
            <div class="tweet-actions">
              <span class="action">6</span>
              <span class="action">3</span>
              <span class="action">14</span>
            </div>
          </div>
          
          <div class="flash-tweet">
            <div class="tweet-header">
              <div class="tweet-avatar"></div>
              <div class="tweet-info">
                <div class="tweet-author">IFTS14 Oficial</div>
                <div class="tweet-time">hace 2d</div>
              </div>
            </div>
            <div class="tweet-content">
              <p>Nuestros estudiantes ganaron el primer lugar en la competencia nacional de programación</p>
            </div>
            <div class="tweet-actions">
              <span class="action">22</span>
              <span class="action">18</span>
              <span class="action">45</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección de Contenido del Instituto -->
      <section class="contenido-instituto">
        <div class="section-header">
          <h2>Contenido del Instituto</h2>
        </div>
        <div class="instituto-content">
          <div class="content-card">
            <div class="card-icon"></div>
            <div class="card-content">
              <h3>Nuestras Carreras</h3>
              <p>Descubre las tecnicaturas que ofrecemos y sus planes de estudio</p>
              <a routerLink="/carreras" class="btn-link">Ver carreras</a>
            </div>
          </div>
          <div class="content-card">
            <div class="card-icon"></div>
            <div class="card-content">
              <h3>Autoridades</h3>
              <p>Conoce al equipo directivo y administrativo del instituto</p>
              <a routerLink="/institucional/autoridades" class="btn-link">Ver autoridades</a>
            </div>
          </div>
          <div class="content-card">
            <div class="card-icon"></div>
            <div class="card-content">
              <h3>Historia</h3>
              <p>Conoce la trayectoria y evolución de nuestro instituto</p>
              <a routerLink="/institucional/historia" class="btn-link">Ver historia</a>
            </div>
          </div>
          <div class="content-card">
            <div class="card-icon"></div>
            <div class="card-content">
              <h3>Noticias</h3>
              <p>Mantente informado con las últimas novedades</p>
              <a routerLink="/noticias" class="btn-link">Ver noticias</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    // Variables de colores (igual que estudiantes y carreras)
    $color-primary: #2c5aa0;
    $color-secondary: #1e3a5f;
    $color-accent: #00a8e8;
    $color-background: #f8f9fa;
    $color-text: #333333;
    $color-white: #ffffff;
    $color-border: #e0e0e0;

    .inicio-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    h1 {
      color: $color-text;
      text-align: center;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    /* Estilos para las secciones */
    section {
      margin: 3rem 0;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #e9ecef;
    }
    
    .section-header h2 {
      color: $color-text;
      margin: 0;
      font-size: 1.8rem;
      font-weight: 600;
    }
    
    /* Estilos para Novedades Flash */
    .novedades-flash {
      background: linear-gradient(135deg, $color-primary 0%, $color-secondary 100%);
      color: $color-white;
    }
    
    .flash-indicator {
      background: $color-accent;
      color: $color-white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: bold;
      font-size: 0.9rem;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.7; }
      100% { opacity: 1; }
    }
    
    .flash-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      max-width: 100%;
    }
    
    /* Grid específico para hasta 5 elementos por fila */
    @media (min-width: 1600px) {
      .flash-content {
        grid-template-columns: repeat(5, 1fr);
      }
    }
    
    @media (min-width: 1200px) and (max-width: 1599px) {
      .flash-content {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    @media (min-width: 900px) and (max-width: 1199px) {
      .flash-content {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (min-width: 600px) and (max-width: 899px) {
      .flash-content {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    .flash-tweet {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      padding: 1.5rem;
      color: #333;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .flash-tweet:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    .flash-tweet.urgent {
      border-left: 4px solid #ff4757;
      background: rgba(255, 71, 87, 0.05);
    }
    
    .tweet-header {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
    
    .tweet-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      margin-right: 0.75rem;
    }
    
    .tweet-info {
      flex: 1;
    }
    
    .tweet-author {
      font-weight: bold;
      color: #333;
      font-size: 0.9rem;
    }
    
    .tweet-time {
      color: #666;
      font-size: 0.8rem;
    }
    
    .tweet-content {
      margin-bottom: 1rem;
    }
    
    .tweet-content p {
      margin: 0;
      line-height: 1.4;
      font-size: 0.95rem;
      color: #333;
    }
    
    .tweet-actions {
      display: flex;
      gap: 1rem;
      padding-top: 0.5rem;
      border-top: 1px solid #eee;
    }
    
    .action {
      color: #666;
      font-size: 0.85rem;
      cursor: pointer;
      transition: color 0.3s ease;
    }
    
    .action:hover {
      color: #1da1f2;
    }
    
    /* Estilos para Contenido del Instituto */
    .contenido-instituto {
      background: $color-background;
      border: 1px solid $color-border;
    }
    
    .instituto-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    
    .content-card {
      background: $color-white;
      padding: 2rem;
      border-radius: 8px;
      border: 1px solid $color-border;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .content-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .card-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .card-content h3 {
      color: $color-text;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }
    
    .card-content p {
      color: $color-text;
      margin-bottom: 1.5rem;
      line-height: 1.5;
      opacity: 0.8;
    }
    
    .btn-link {
      background: $color-primary;
      color: $color-white;
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 500;
      transition: background 0.3s ease;
    }
    
    .btn-link:hover {
      background: $color-secondary;
      text-decoration: none;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .inicio-container {
        padding: 1rem;
      }
      
      section {
        margin: 2rem 0;
        padding: 1.5rem;
      }
      
      .section-header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
      
      .flash-item {
        flex-direction: column;
        text-align: center;
      }
      
      .flash-icon {
        margin-right: 0;
        margin-bottom: 0.5rem;
      }
      
      .instituto-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class InicioComponent {

}
