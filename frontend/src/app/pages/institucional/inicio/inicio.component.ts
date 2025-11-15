import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Autoridad {
  nombre: string;
  apellido: string;
  cargo: string;
  email: string;
}

interface Profesor {
  nombre: string;
  imagen: string;
  biografia: string;
}

interface InstagramPost {
  permalink: string;
  imageUrl: string;
  caption: string;
}

@Component({
  selector: 'app-institucional-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InstitucionalInicioComponent {
  readonly profesoresPorPagina = 5;
  currentSlide = 0;
  profesorSeleccionado: Profesor | null = null;

  autoridades: Autoridad[] = [
    {
      nombre: 'Dr. M. Marcelo',
      apellido: 'Canetti',
      cargo: 'Rector',
      email: 'rectoria@ifts14.edu.ar'
    }
  ];

  instagramPosts: InstagramPost[] = [
    {
      permalink: 'https://www.instagram.com/p/DQq-YLcjq-P/',
      imageUrl: 'https://instagram.faep27-1.fna.fbcdn.net/v/t51.2885-15/573019703_17900038074300485_5040604525116929049_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08_tt6&_nc_ht=instagram.faep27-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QGZxspuhyfi5nH_QgN2Pk4qpa_EoAW7euTm6PMKvsJp7KTwd33O8RYb4tD_WESTEShuPTDc5mpwsVJO1rL5Yly8&_nc_ohc=UE7SOG1ioLEQ7kNvwEj_O8M&_nc_gid=4F9FFA9cSSzAEFzR2d5bLQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfgvSXl47l-sFxU4Whu4LZ91R2b19XKu5m6Gm8mlN_LSqA&oe=691B181F&_nc_sid=8b3546',
      caption: '¿Cómo programar para vivir seguros? Te invitamos a la clase abierta sobre programación aplicada a la seguridad ferroviaria.'
    },
    {
      permalink: 'https://www.instagram.com/p/DQonw-NjsgJ/',
      imageUrl: 'https://instagram.faep27-1.fna.fbcdn.net/v/t51.2885-15/573101179_17899944051300485_2785754130961452808_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08_tt6&_nc_ht=instagram.faep27-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QGZxspuhyfi5nH_QgN2Pk4qpa_EoAW7euTm6PMKvsJp7KTwd33O8RYb4tD_WESTEShuPTDc5mpwsVJO1rL5Yly8&_nc_ohc=aSlPn-rjdjcQ7kNvwFS0rJf&_nc_gid=4F9FFA9cSSzAEFzR2d5bLQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfgNHkOY5jDVG8lRTfgmQ4XqhxQm6Y4NsGg0sedZ_-_4IQ&oe=691B1416&_nc_sid=8b3546',
      caption: 'Reunión informativa con la UdelaCiudad: articulación de carreras IT para potenciar tu perfil profesional.'
    },
    {
      permalink: 'https://www.instagram.com/p/DQb32SkDiqu/',
      imageUrl: 'https://instagram.faep27-1.fna.fbcdn.net/v/t51.2885-15/573171931_17899421190300485_3765977738826590834_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08_tt6&_nc_ht=instagram.faep27-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QGZxspuhyfi5nH_QgN2Pk4qpa_EoAW7euTm6PMKvsJp7KTwd33O8RYb4tD_WESTEShuPTDc5mpwsVJO1rL5Yly8&_nc_ohc=PSO0uJmCRX8Q7kNvwHoYOTA&_nc_gid=4F9FFA9cSSzAEFzR2d5bLQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfhFiXNASUtIIElPJ5lm-qqEJr9WbDfmu1CkFMs9-iATiw&oe=691AF6E6&_nc_sid=8b3546',
      caption: 'Clase abierta #28: gestión de emprender en Argentina junto al Dr. Carlos G. López y el Ing. Horacio Núñez Villamayor.'
    },
    {
      permalink: 'https://www.instagram.com/p/DQb3kvJDsvX/',
      imageUrl: 'https://instagram.faep27-1.fna.fbcdn.net/v/t51.2885-15/572196975_17899421004300485_6852846911024505820_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08_tt6&_nc_ht=instagram.faep27-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QGZxspuhyfi5nH_QgN2Pk4qpa_EoAW7euTm6PMKvsJp7KTwd33O8RYb4tD_WESTEShuPTDc5mpwsVJO1rL5Yly8&_nc_ohc=qxEoLsjWZRUQ7kNvwGQL2ko&_nc_gid=4F9FFA9cSSzAEFzR2d5bLQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Afj2F2F955K4vAu9KNPowwn2V26mUNK5xEBIspdekLc7Vg&oe=691B19F5&_nc_sid=8b3546',
      caption: 'Clase abierta #27: visualización y clasificación de datos multidimensionales con Python.'
    },
    {
      permalink: 'https://www.instagram.com/p/DQT2jKJDrYQ/',
      imageUrl: 'https://instagram.faep27-1.fna.fbcdn.net/v/t51.2885-15/571693318_17899087248300485_1830751014786183079_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08_tt6&_nc_ht=instagram.faep27-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QGZxspuhyfi5nH_QgN2Pk4qpa_EoAW7euTm6PMKvsJp7KTwd33O8RYb4tD_WESTEShuPTDc5mpwsVJO1rL5Yly8&_nc_ohc=qEfkniy53LIQ7kNvwEdoebp&_nc_gid=4F9FFA9cSSzAEFzR2d5bLQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfimubKWSobMYfUkC5wL5WQhypdVpJCxh-4TvRnT2GfltQ&oe=691B0693&_nc_sid=8b3546',
      caption: 'Clase abierta #26: monitoreo del estado de carga en baterías de litio, con foco en soluciones desde sistemas embebidos.'
    }
  ];

  private readonly profesoresData: Array<{ nombre: string; archivo?: string; biografia: string }> = [
    {
      nombre: 'Pablo Jos\u00E9 Carlos Alonso Castillo',
      archivo: 'ALONSO CASTILLO, Pablo J..webp',
      biografia: 'Ingeniero Electricista (UBA). Licenciado en Ciencias F\u00EDsicas (UBA). Profesor Universitario (UMSA). Especialista en Sistemas Embebidos (UBA). Consultor T\u00E9cnico en CNEA. Experiencia en espectrometr\u00EDa de movilidad i\u00F3nica, automatizaci\u00F3n y rob\u00F3tica, data loggers aut\u00F3nomos, hardware/firmware/software para seguridad de datos, IoT y Bluetooth. Miembro IEEE (Computaci\u00F3n, Automatizaci\u00F3n y Rob\u00F3tica).'
    },
    {
      nombre: 'Sebasti\u00E1n Eduardo Barani',
      archivo: 'BARANI, Sebasti\u00E1n.webp',
      biografia: 'T\u00E9cnico Superior en Rob\u00F3tica (IFTS 14). T\u00E9cnico responsable en Telecom con foco en infraestructura y soporte de redes.'
    },
    {
      nombre: 'V\u00EDctor Manuel Belaunde',
      archivo: 'BELANUDE, V\u00EDctor Manuel.webp',
      biografia: 'Analista en Sistemas (SFT 172). Licenciado en Sistemas de Informaci\u00F3n (Universidad de Lomas de Zamora). Especialista en Sistemas Embebidos (UBA). Profesor en el IFTS 14 y gerente de operaciones en Ecosistemas S.R.L.'
    },
    {
      nombre: 'Jorge Luis Bertani',
      archivo: 'BERTANI, Jorge.webp',
      biografia: 'T\u00E9cnico Superior en Rob\u00F3tica (IFTS 14). Programador y QA en Zoo Logic S.A., especializado en plataformas de gesti\u00F3n industrial.'
    },
    {
      nombre: 'Carlos Alberto Fuentes',
      archivo: 'FUENTES, Carlos Alberto.webp',
      biografia: 'Ingeniero Electricista (UTN). MBA (IDEA). Ingeniero en asuntos energ\u00E9ticos en el sector p\u00FAblico y privado. Profesor de educaci\u00F3n superior t\u00E9cnica y secretario de la Fundaci\u00F3n A.M.P.E.R.E.S.'
    },
    {
      nombre: 'Adri\u00E1n Domingo Gagliardi',
      archivo: 'GAGLIARDI, Adri\u00E1n .webp',
      biografia: 'T\u00E9cnico Superior en Energ\u00EDa, orientaci\u00F3n Industrial (IFTS 14). Profesional en IGARRET A S.A.C.I. con experiencia en mantenimiento y eficiencia energ\u00E9tica.'
    },
    {
      nombre: 'Luc\u00EDa Celeste Gallardo',
      archivo: 'GALLARDO, Luc\u00EDa Celeste.webp',
      biografia: 'Arquitecta (UNDAV). Participa en proyectos de arquitectura sustentable y dise\u00F1o de espacios educativos.'
    },
    {
      nombre: 'Edgardo Garc\u00EDa Hermelo',
      archivo: 'GARC\u00CDA HERMELO, Edgardo.webp',
      biografia: 'Ingeniero Electr\u00F3nico (UBA) y t\u00E9cnico electr\u00F3nico. Jefe de producci\u00F3n en PUMP Control. Profesor en la UNGS y en educaci\u00F3n t\u00E9cnica superior.'
    },
    {
      nombre: 'Claudio Ra\u00FAl Giorgis',
      archivo: 'GIORGIS, Claudio.webp',
      biografia: 'T\u00E9cnico Superior en Rob\u00F3tica (IFTS 14). Licenciado en Gesti\u00F3n de Automatizaci\u00F3n y Rob\u00F3tica (UNLa). T\u00E9cnico en Autotrol S.A. con experiencia en control de procesos.'
    },
    {
      nombre: 'Hern\u00E1n G\u00F3mez Molino',
      archivo: 'GOMEZ MOLINO, Hern\u00E1n.webp',
      biografia: 'Ingeniero en Electr\u00F3nica (UTN-FRH). Especialista en Sistemas Embebidos (FIUBA). Ingeniero de desarrollo en CENADIF.'
    },
    {
      nombre: 'Germ\u00E1n Guillermo G\u00F3mez Riera',
      archivo: 'G\u00D3MEZ RIERA, Germ\u00E1n.webp',
      biografia: 'Licenciado en Trabajo Social (UNLa) y profesor universitario (Kennedy). T\u00E9cnico Superior en Seguridad Social (CEN 9). Especialista en orientaci\u00F3n vocacional y educativa (UNTREF, en curso). Supervisor en ANSES.'
    },
    {
      nombre: 'Eduardo Dami\u00E1n Granzella',
      archivo: 'GRANZELLA, Eduardo.webp',
      biografia: 'Ingeniero Electr\u00F3nico (UTN-FRBA/FRH). T\u00E9cnico electr\u00F3nico (EDET N\u00B05) y T\u00E9cnico Superior en T\u00E9cnicas Digitales (CENT N\u00B042). Docente en UTN-FRBA y desarrollador de firmware en Se\u00F1alco Sudamericana.'
    },
    {
      nombre: 'Mariano Mart\u00EDn Groppa',
      archivo: 'GROPPA, Mariano.webp',
      biografia: 'T\u00E9cnico Superior en Rob\u00F3tica (IFTS 14) y t\u00E9cnico en electr\u00F3nica. Se desempe\u00F1a en proyectos de automatizaci\u00F3n industrial.'
    },
    {
      nombre: 'Pablo Alberto Iaria',
      archivo: 'IARIA, Pablo.webp',
      biografia: 'Licenciado en Ciencias F\u00EDsicas (UBA). Investigador en INTI y ex director de proyecto CNEA/CONAE (sat\u00E9lites SAC-D Aquarius y SAOCOM). Especialista en rob\u00F3tica (Universidad de Tsukuba, Jap\u00F3n). Profesor en UCA y UNSAM. Consultor para INVAP, Ford, TAMSE, entre otros.'
    },
    {
      nombre: 'Carlos Guillermo L\u00F3pez',
      archivo: 'LOPEZ, Carlos Guillermo.webp',
      biografia: 'Abogado (UBA). Profesor adjunto en la Facultad de Ciencias Econ\u00F3micas (UBA) y profesional en ejercicio.'
    },
    {
      nombre: 'Ana Clara Petrelli',
      archivo: 'PETRELLI, Ana Clara.webp',
      biografia: 'Mag\u00EDster en Administraci\u00F3n P\u00FAblica (UBA). Licenciada en Relaciones Internacionales (USAL). Docente en UNLaM e IFTS 17. Oficial de proyectos PNUD en Canciller\u00EDa Argentina.'
    },
    {
      nombre: 'Maximiliano Javier Petroff',
      biografia: 'Ingeniero Electr\u00F3nico y profesor en disciplinas industriales. T\u00E9cnico universitario en electr\u00F3nica (UTN-RFA). Amplia experiencia en desarrollo tecnol\u00F3gico ferroviario. Gerente de Ingenier\u00EDa de Operaciones y Mantenimiento en Metro de Santiago (Chile).'
    },
    {
      nombre: 'Fernando Javier Pillon',
      archivo: 'PILLON, Fernando.webp',
      biografia: 'Ingeniero Qu\u00EDmico (UBA). Especialista en Din\u00E1micas de Sistemas (UPC). Auditor l\u00EDder ISO 9001 y auditor interno ISO 17025.'
    },
    {
      nombre: 'Flavio Augusto Pons',
      archivo: 'PONS, Flavio.webp',
      biografia: 'T\u00E9cnico Superior en Energ\u00EDa, orientaci\u00F3n Industrial (IFTS 14) y t\u00E9cnico en electr\u00F3nica. Gerente de Territorio en FPT Argentina.'
    },
    {
      nombre: 'Gustavo Adri\u00E1n Prieto',
      archivo: 'PRIETO, Gustavo Adri\u00E1n.webp',
      biografia: 'Licenciado en Sistemas (CAECE). Especialista en Criptograf\u00EDa y Seguridad Teleinform\u00E1tica (UNDEF). Maestr\u00EDa en Ciberdefensa (UNDEF). Profesor en el IFTS 14 y encargado de an\u00E1lisis y testeo en la Armada Argentina.'
    },
    {
      nombre: 'Daniel Fabi\u00E1n Rodr\u00EDguez',
      archivo: 'RODRIGUEZ, Daniel.webp',
      biografia: 'Licenciado en Ciencias F\u00EDsicas (UBA). Doctor en Ciencia y Tecnolog\u00EDa, menci\u00F3n F\u00EDsica (UNSAM). Investigador senior en CNEA y profesor en FIUBA.'
    },
    {
      nombre: 'Esteban Andr\u00E9s Salvia',
      archivo: 'SALVIA,.webp',
      biografia: 'Profesor para la ense\u00F1anza primaria y profesor de geograf\u00EDa (J. V. Gonz\u00E1lez). Licenciado en Ciencias de la Educaci\u00F3n (Escuela Superior de Guerra).'
    },
    {
      nombre: 'Sebasti\u00E1n Fausto Schvartz',
      archivo: 'SCHVARTZ, Sebasti\u00E1n.webp',
      biografia: 'T\u00E9cnico Superior en Energ\u00EDa (IFTS 14) y t\u00E9cnico en electr\u00F3nica. Docente en nivel medio y superior t\u00E9cnica.'
    },
    {
      nombre: 'Sandra Patricia Tejerina',
      archivo: 'TEJERINA, Sandra.webp',
      biografia: 'Profesora en Disciplinas Industriales (INSPT-UTN) y T\u00E9cnica Superior en Electr\u00F3nica (INSPT-UTN). Docente en nivel superior t\u00E9cnico.'
    },
    {
      nombre: 'Germ\u00E1n Vel\u00E1rdez',
      archivo: 'VELARDEZ, Germ\u00E1n sin ed.webp',
      biografia: 'Ingeniero Electr\u00F3nico. Especialista en Sistemas Embebidos (FIUBA). Desarrollador de firmware en micro y nanotecnolog\u00EDas.'
    },
    {
      nombre: 'Pablo Luciano Verna Muras',
      archivo: 'VERNA MURAS, Pablo L..webp',
      biografia: 'T\u00E9cnico Superior en Eficiencia Energ\u00E9tica (IFTS 14). Presidente de la Fundaci\u00F3n AMP\u00C9RES y socio gerente de Economic-On (soluciones operativas).'
    },
    {
      nombre: 'Mauro Zanier',
      archivo: 'ZANIER, Mauro.webp',
      biografia: 'Biograf\u00EDa en actualizaci\u00F3n.'
    }
  ];

  profesores: Profesor[] = this.profesoresData.map(({ nombre, archivo, biografia }) => ({
    nombre,
    biografia,
    imagen: archivo ? encodeURI(`/assets/images/profesores/${archivo}`) : ''
  }));

  get totalSlides(): number {
    return this.profesores.length > 0 ? Math.ceil(this.profesores.length / this.profesoresPorPagina) : 0;
  }

  get profesoresVisibles(): Profesor[] {
    const inicio = this.currentSlide * this.profesoresPorPagina;
    return this.profesores.slice(inicio, inicio + this.profesoresPorPagina);
  }

  get indicadoresCarrusel(): number[] {
    return Array.from({ length: this.totalSlides }, (_, index) => index);
  }

  avanzarProfesores(): void {
    if (this.totalSlides === 0) {
      return;
    }

    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  retrocederProfesores(): void {
    if (this.totalSlides === 0) {
      return;
    }

    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  irASlide(indice: number): void {
    if (indice >= 0 && indice < this.totalSlides) {
      this.currentSlide = indice;
    }
  }

  abrirBiografia(profesor: Profesor): void {
    this.profesorSeleccionado = profesor;
  }

  cerrarBiografia(): void {
    this.profesorSeleccionado = null;
  }

  obtenerIniciales(nombre: string): string {
    return nombre
      .split(' ')
      .filter(parte => parte.length > 0)
      .slice(0, 2)
      .map(parte => (parte[0] ?? '').toUpperCase())
      .join('');
  }

  trackByInstagram(_: number, post: InstagramPost): string {
    return post.permalink;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.profesorSeleccionado) {
      this.cerrarBiografia();
    }
  }

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
