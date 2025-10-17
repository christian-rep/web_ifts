import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Agrega esta interfaz
export interface Noticia {
  id?: string;
  titulo: string;
  descripcion: string;
  fecha: Date;
  creadoPor: string;
  tipo: 'institucional' | 'academico' | 'evento' | 'general';
  archivo?: File | null;
  nombreArchivo?: string;
  estado: 'publicado' | 'borrador';
  tecnicatura?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  // Agrega esta signal para manejar el estado local
  private noticias = signal<Noticia[]>([]);
  private apiUrl = 'http://localhost:3000/api/noticias';

  constructor(private http: HttpClient) {}

  // Este método ya lo tienes - mantenlo
  getNoticias() {
    return this.http.get('/api/noticias');
  }

  // Agrega estos nuevos métodos:

  // Crear nueva noticia
  crearNoticia(noticia: FormData): Observable<Noticia> {
    return this.http.post<Noticia>(this.apiUrl, noticia);
  }

  // Guardar como borrador
  guardarBorrador(noticia: FormData): Observable<Noticia> {
    return this.http.post<Noticia>(`${this.apiUrl}/borrador`, noticia);
  }

  // Actualizar noticia
  actualizarNoticia(id: string, noticia: FormData): Observable<Noticia> {
    return this.http.put<Noticia>(`${this.apiUrl}/${id}`, noticia);
  }

  // Eliminar noticia
  eliminarNoticia(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método para obtener noticias desde la signal (opcional)
  getNoticiasSignal() {
    return this.noticias.asReadonly();
  }
}