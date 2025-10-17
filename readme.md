# Proyecto IFTS14

## Descripción
Sistema web para el Instituto de Formación Técnica Superior N°14.

## Estructura del Proyecto

```
proyecto-ifts/
├── backend/                 # API REST con Node.js
│   ├── controllers/        # Controladores de la API
│   ├── models/            # Modelos de datos
│   ├── routes/            # Rutas de la API
│   └── config/            # Configuración de base de datos
├── frontend/              # Aplicación Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/    # Componentes reutilizables
│   │   │   ├── pages/         # Páginas principales
│   │   │   ├── services/      # Servicios Angular
│   │   │   ├── core/          # Módulo core
│   │   │   ├── shared/        # Módulo compartido
│   │   │   └── features/      # Módulos de funcionalidades
│   │   ├── assets/         # Recursos estáticos
│   │   └── environments/   # Configuraciones de entorno
│   └── angular.json
├── docs/                  # Documentación
└── README.md
```

## Tecnologías

### Backend
- Node.js
- Express.js
- MySQL/MongoDB

### Frontend
- Angular 17+
- TypeScript
- SCSS
- Angular Material (opcional)

## Instalación

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
ng serve
```

## Desarrollo

El proyecto está estructurado de forma modular para facilitar el mantenimiento y escalabilidad.

### Módulos Principales
- **Core**: Componentes base (header, footer, navbar)
- **Shared**: Componentes reutilizables
- **Features**: Módulos de funcionalidades específicas
  - Institucional
  - Carreras
  - Noticias
  - Contacto
  - Autenticación

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request
