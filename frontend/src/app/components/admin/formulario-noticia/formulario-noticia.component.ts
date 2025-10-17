// src/app/components/admin/formulario-noticia/formulario-noticia.component.ts
import { Component, signal, output, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Noticia, NoticiasService } from '../../../services/noticias.service';

@Component({
  selector: 'app-formulario-noticia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="formulario" class="formulario-noticia">
      <h2>{{ noticia() ? 'Editar Noticia' : 'Nueva Novedad' }}</h2>

      <!-- Título -->
      <div class="campo">
        <label for="titulo">Título *</label>
        <input
          id="titulo"
          type="text"
          formControlName="titulo"
          placeholder="Ingrese el título"
          [class.error]="formulario.get('titulo')?.invalid && formulario.get('titulo')?.touched">
        @if (formulario.get('titulo')?.invalid && formulario.get('titulo')?.touched) {
          <div class="mensaje-error">
            @if (formulario.get('titulo')?.errors?.['required']) {
              <span>El título es requerido</span>
            }
            @if (formulario.get('titulo')?.errors?.['minlength']) {
              <span>Mínimo 5 caracteres</span>
            }
          </div>
        }
      </div>

      <!-- Descripción -->
      <div class="campo">
        <label for="descripcion">Descripción *</label>
        <textarea
          id="descripcion"
          formControlName="descripcion"
          rows="4"
          placeholder="Ingrese la descripción"
          [class.error]="formulario.get('descripcion')?.invalid && formulario.get('descripcion')?.touched"></textarea>
        @if (formulario.get('descripcion')?.invalid && formulario.get('descripcion')?.touched) {
          <div class="mensaje-error">
            @if (formulario.get('descripcion')?.errors?.['required']) {
              <span>La descripción es requerida</span>
            }
            @if (formulario.get('descripcion')?.errors?.['minlength']) {
              <span>Mínimo 10 caracteres</span>
            }
          </div>
        }
      </div>

      <!-- Fecha -->
      <div class="campo">
        <label for="fecha">Fecha *</label>
        <input
          id="fecha"
          type="date"
          formControlName="fecha"
          [class.error]="formulario.get('fecha')?.invalid && formulario.get('fecha')?.touched">
      </div>

      <!-- Tipo de Novedad -->
      <div class="campo">
        <label for="tipo">Tipo novedad *</label>
        <select id="tipo" formControlName="tipo">
          @for (tipo of tiposNoticia; track tipo.valor) {
            <option [value]="tipo.valor">{{ tipo.label }}</option>
          }
        </select>
      </div>

      <!-- Carga de documento -->
      <div class="campo">
        <label>Carga de documento</label>
        <div
          class="area-upload"
          (drop)="onSoltarArchivo($event)"
          (dragover)="onDragOver($event)"
          [class.drag-over]="false">
          <input
            type="file"
            #fileInput
            (change)="onArchivoSeleccionado($event)"
            accept=".docx,.pdf,.jpeg,.jpg,.png,.txt"
            hidden>
          
          @if (!archivoSeleccionado()) {
            <div class="upload-placeholder">
              <i class="icono-upload">📁</i>
              <p>Elija un archivo o arrástrelo y suéltelo aquí</p>
              <small>docx, pdf, jpeg, txt – Hasta 50MB</small>
              <button type="button" (click)="fileInput.click()" class="btn-seleccionar">
                Seleccionar archivo
              </button>
            </div>
          }

          @if (archivoSeleccionado()) {
            <div class="archivo-seleccionado">
              @if (vistaPreviaArchivo()) {
                <img [src]="vistaPreviaArchivo()" alt="Vista previa" class="vista-previa">
              }
              <div class="info-archivo">
                <strong>{{ archivoSeleccionado()?.name }}</strong>
                <span>{{ (archivoSeleccionado()?.size || 0) / 1024 / 1024 | number:'1.2-2' }} MB</span>
              </div>
              <button type="button" (click)="archivoSeleccionado.set(null)" class="btn-eliminar">
                ×
              </button>
            </div>
          }
        </div>
      </div>

      <!-- Tecnicatura -->
      <div class="campo">
        <label for="tecnicatura">Tecnicatura</label>
        <select id="tecnicatura" formControlName="tecnicatura">
          <option value="">Seleccione una tecnicatura</option>
          @for (tec of tecnicaturas; track tec) {
            <option [value]="tec">{{ tec }}</option>
          }
        </select>
      </div>

      <!-- Botones de acción -->
      <div class="acciones">
        <button
          type="button"
          (click)="guardarBorrador()"
          [disabled]="estaEnviando()"
          class="btn btn-borrador">
          Guardar como borrador
        </button>
        
        <button
          type="button"
          (click)="subirNovedad()"
          [disabled]="estaEnviando() || formulario.invalid"
          class="btn btn-primary">
          {{ estaEnviando() ? 'Subiendo...' : 'Subir novedad' }}
        </button>
      </div>
    </form>
  `,
  styleUrls: ['./formulario-noticia.component.scss']
})
export class FormularioNoticiaComponent implements OnInit {
  noticia = input<Noticia | null>(null);
  guardadoExitoso = output<void>();
  
  formulario: FormGroup;
  archivoSeleccionado = signal<File | null>(null);
  vistaPreviaArchivo = signal<string | null>(null);
  estaEnviando = signal(false);

  tiposNoticia = [
    { valor: 'institucional', label: 'Anuncio Institucional' },
    { valor: 'academico', label: 'Noticia Académica' },
    { valor: 'evento', label: 'Evento' },
    { valor: 'general', label: 'Noticia General' }
  ];

  tecnicaturas = [
    'Tecnicatura en Desarrollo de Software',
    'Tecnicatura en Administración',
    'Tecnicatura en Turismo',
    'Tecnicatura en Diseño'
  ];

  constructor(
    private fb: FormBuilder,
    private noticiasService: NoticiasService
  ) {
    // ✅ CORREGIDO: Usar FormGroup tipado correctamente
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      fecha: ['', Validators.required],
      tipo: ['institucional', Validators.required],
      tecnicatura: [''],
      estado: ['publicado']
    });
  }

  ngOnInit() {
    const noticiaActual = this.noticia();
    if (noticiaActual) {
      this.cargarDatosFormulario(noticiaActual);
    } else {
      this.establecerValoresPorDefecto();
    }
  }

  private establecerValoresPorDefecto(): void {
    this.formulario.patchValue({
      fecha: new Date().toISOString().split('T')[0],
      tipo: 'institucional'
    });
  }

  private cargarDatosFormulario(noticia: Noticia): void {
    this.formulario.patchValue({
      titulo: noticia.titulo,
      descripcion: noticia.descripcion,
      fecha: noticia.fecha.toISOString().split('T')[0],
      tipo: noticia.tipo,
      tecnicatura: noticia.tecnicatura,
      estado: noticia.estado
    });
  }

  onArchivoSeleccionado(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const archivo = input.files[0];
      
      const tiposPermitidos = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png', 'text/plain'];
      if (!tiposPermitidos.includes(archivo.type)) {
        alert('Tipo de archivo no permitido');
        return;
      }

      if (archivo.size > 50 * 1024 * 1024) {
        alert('El archivo no puede ser mayor a 50MB');
        return;
      }

      this.archivoSeleccionado.set(archivo);

      if (archivo.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          this.vistaPreviaArchivo.set(reader.result as string);
        };
        reader.readAsDataURL(archivo);
      }
    }
  }

  onSoltarArchivo(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      const input = document.createElement('input');
      input.type = 'file';
      input.files = event.dataTransfer.files;
      this.onArchivoSeleccionado({ target: input } as any);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  async guardarBorrador(): Promise<void> {
    await this.enviarFormulario('borrador');
  }

  async subirNovedad(): Promise<void> {
    await this.enviarFormulario('publicado');
  }

  private async enviarFormulario(estado: 'borrador' | 'publicado'): Promise<void> {
    if (this.formulario.invalid) {
      this.marcarCamposInvalidos();
      return;
    }

    this.estaEnviando.set(true);

    try {
      console.log('Guardando noticia...', this.formulario.value, estado);
      // Simular guardado
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.guardadoExitoso.emit();
      this.limpiarFormulario();
      alert(estado === 'borrador' ? 'Guardado como borrador' : 'Noticia publicada exitosamente');
      
    } catch (error) {
      console.error('Error al guardar noticia:', error);
      alert('Error al guardar la noticia');
    } finally {
      this.estaEnviando.set(false);
    }
  }

  private marcarCamposInvalidos(): void {
    Object.keys(this.formulario.controls).forEach(key => {
      const control = this.formulario.get(key);
      if (control?.invalid) {
        control.markAsTouched();
      }
    });
  }

  private limpiarFormulario(): void {
    this.formulario.reset();
    this.archivoSeleccionado.set(null);
    this.vistaPreviaArchivo.set(null);
    this.establecerValoresPorDefecto();
  }
}