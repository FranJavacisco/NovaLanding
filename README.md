# Nova Landing - Sitio Web de Smartwatch

![Captura de pantalla 2024-11-28 233210](https://github.com/user-attachments/assets/cec2179e-59e5-44d0-8f71-de3691cd6178)

## 📝 Descripción
Nova Landing es una landing page moderna y dinámica diseñada para la presentación de smartwatches premium. El proyecto implementa las últimas características de Angular 17, presentando un diseño elegante y responsive que destaca las características del producto tecnológico.

## 🚀 Características Principales
- Diseño moderno y minimalista enfocado en smartwatches
- Navegación responsive con menú adaptativo
- Carrusel de 5 imágenes del smartwatch con transiciones suaves
- Menú móvil con animaciones
- Sección de características con efectos visuales interactivos
- Optimizado para todos los dispositivos

## 🛠 Tecnologías Utilizadas
- **Angular 17**
  - Standalone Components
  - Nueva sintaxis de control de flujo (@for, @if)
  - Componentes autónomos
  
- **TailwindCSS**
  - Sistema de diseño responsive
  - Efectos y animaciones personalizadas
  - Glassmorphism y efectos modernos

- **TypeScript**
  - Programación orientada a objetos
  - Tipado fuerte
  - Interfaces claras

## 📂 Estructura del Proyecto
```
NovaLanding/
├── src/
│   ├── app/
│   │   └── app.component.ts    # Componente principal standalone
│   ├── assets/
│   │   ├── hero-1.png         # Imagen principal del smartwatch
│   │   ├── hero-2.png         # Segunda vista del smartwatch
│   │   ├── hero-3.png         # Vista de características
│   │   ├── hero-4.png         # Vista de funcionalidades
│   │   └── hero-5.png         # Vista detallada
│   └── styles.css             # Estilos globales y configuración Tailwind
└── tailwind.config.js         # Configuración de Tailwind
```

## ⚙️ Funcionalidades Detalladas

### 1. Carrusel Principal
- 5 imágenes del smartwatch mostrando diferentes ángulos y características
- Rotación automática cada 5 segundos
- Controles manuales e indicadores de posición
- Transiciones suaves entre imágenes

### 2. Navegación Adaptativa
- Menú desktop con efectos hover
- Menú móvil con animación de despliegue
- Interfaz intuitiva y accesible

### 3. Sección de Características
- Tres cards interactivas destacando:
  - Calidad Premium
  - Diseño Ergonómico
  - Duración de Batería
- Animaciones en hover
- Iconos dinámicos

## 🎨 Diseño y Efectos Visuales
- **Esquema de Colores**
  - Fondo oscuro moderno
  - Acentos brillantes
  - Efectos de cristal (glassmorphism)

- **Sistema de Animaciones**
  - Entrada suave de elementos
  - Efectos hover interactivos
  - Transiciones del carrusel
  - Animaciones de la navegación móvil

## 💻 Instalación y Uso
```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Instalar dependencias
npm install

# Instalar TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Iniciar servidor de desarrollo
ng serve
```

## 🔧 Configuración Principal
```typescript
// app.component.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule]
})

export class AppComponent implements OnInit {
  // Configuración del carrusel
  carouselImages = [
    'assets/hero-1.png',
    'assets/hero-2.png',
    'assets/hero-3.png',
    'assets/hero-4.png',
    'assets/hero-5.png'
  ];
  // ... resto de la configuración
}
```

## 📱 Diseño Responsive
- Mobile First
- Optimizado para:
  - Móviles (< 768px)
  - Tablets (768px - 1024px)
  - Desktop (> 1024px)

## 🔄 Características de Desarrollo
- Código limpio y comentado
- Implementación modular
- Fácil de mantener y escalar

## 👥 Contribución
1. Fork del repositorio
2. Crear rama: `git checkout -b nueva-caracteristica`
3. Commit: `git commit -m 'Agregar nueva característica'`
4. Push: `git push origin nueva-caracteristica`
5. Pull Request

## 📄 Licencia
Este proyecto está bajo la Licencia MIT

---
Desarrollado con ❤️ usando Angular 17 y TailwindCSS
