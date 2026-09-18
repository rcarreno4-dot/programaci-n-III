# 📊 Monitor de Uso del Sistema - Documentación

## 📁 Estructura del Proyecto

```
Clase 8 sistemas/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y diseño
├── script.js           # Lógica y funcionalidad
└── README.md           # Este archivo
```

---

## 🎯 Descripción General

Aplicación web que monitorea en **tiempo real** el uso de recursos del sistema:
- **CPU**: Uso del procesador
- **Memoria RAM**: Uso de la memoria
- **Disco Duro**: Espacio utilizado
- **Red**: Estado de conexión

Incluye:
- ✅ Dashboard interactivo con 4 monitores
- ✅ Gráfico dinámico del histórico de CPU
- ✅ Estados de alerta (Óptimo, Advertencia, Crítico)
- ✅ Controles para iniciar, pausar y reiniciar
- ✅ Actualización automática cada 2 segundos

---

## 📄 Archivos del Proyecto

### 1. **index.html** - Estructura HTML
**Ubicación:** `Clase 8 sistemas/index.html`

**Contenido:**
- Meta tags para UTF-8 y responsive design
- Enlace a `styles.css` para los estilos
- Estructura semántica con:
  - `<header>`: Título y descripción
  - `<div class="button-group">`: Botones de control
  - `<div class="grid">`: Grid con 4 tarjetas (CPU, Memoria, Disco, Red)
  - `<div class="chart-container">`: Contenedor del gráfico
  - `<footer>`: Información y timestamp
- Elemento `<canvas>` para el gráfico dinámico
- Enlace a `script.js` al final para funcionalidad

**Elementos principales:**
```html
<!-- Tarjetas de monitoreo -->
<div class="card cpu">
  <div class="card-icon">⚙️</div>
  <div class="card-title">CPU</div>
  <div class="progress-bar">
    <div class="progress-fill" id="cpuBar"></div>
  </div>
  <div class="value" id="cpuValue">0%</div>
  <div class="status" id="cpuStatus">Óptimo</div>
</div>
```

---

### 2. **styles.css** - Estilos y Diseño
**Ubicación:** `Clase 8 sistemas/styles.css`

**Secciones:**

#### 📐 Reset Global
```css
* { margin: 0; padding: 0; box-sizing: border-box; }
```
- Elimina márgenes y paddings por defecto
- Usa border-box para cálculos de tamaño más precisos

#### 🎨 Estilos de Body
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}
```
- Fondo degradado morado
- Altura mínima de viewport

#### 📦 Grid Layout
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```
- Sistema de 4 columnas responsive
- Se adapta a pantallas más pequeñas

#### 🎴 Tarjetas (Cards)
```css
.card {
    background: white;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```
- Efecto hover que eleva la tarjeta
- Sombras suaves

#### 📊 Barras de Progreso
```css
.progress-bar { height: 10px; background: #e0e0e0; }
.progress-fill { transition: width 0.3s ease; }
```
- Cada tipo tiene su color:
  - CPU: Rojo (#ff6b6b)
  - Memoria: Cian (#4ecdc4)
  - Disco: Naranja (#f7b731)
  - Red: Púrpura (#a29bfe)

#### 🚨 Estados
```css
.status.good { color: #27ae60; }      /* Verde - Óptimo */
.status.warning { color: #f39c12; }   /* Amarillo - Advertencia */
.status.critical { color: #e74c3c; }  /* Rojo - Crítico */
```

#### 🔘 Botones
```css
button {
    background: white;
    transition: all 0.3s ease;
}
button:hover {
    transform: translateY(-2px);
}
```
- Efecto de elevación al pasar el mouse

---

### 3. **script.js** - Lógica y Funcionalidad
**Ubicación:** `Clase 8 sistemas/script.js`

**Variables Globales:**
```javascript
let monitorActive = false;      // Estado del monitor
let cpuHistory = [];            // Histórico de CPU
let memoryHistory = [];         // Histórico de Memoria
let diskHistory = [];           // Histórico de Disco
let timeLabels = [];            // Etiquetas de tiempo
```

#### 🔧 Funciones Principales

**1. `obtenerDatos()`**
```javascript
function obtenerDatos() {
    return {
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        disk: Math.floor(Math.random() * 100),
        network: Math.floor(Math.random() * 100)
    };
}
```
- Simula datos del sistema con números aleatorios (0-100)
- Retorna objeto con 4 propiedades

**2. `getStatus(percentage)`**
```javascript
function getStatus(percentage) {
    if (percentage < 50) return { text: 'Óptimo', class: 'good' };
    if (percentage < 75) return { text: 'Advertencia', class: 'warning' };
    return { text: 'Crítico', class: 'critical' };
}
```
- Retorna estado según el porcentaje
- Clasificación:
  - 0-49%: ✅ Óptimo (verde)
  - 50-74%: ⚠️ Advertencia (amarillo)
  - 75-100%: 🔴 Crítico (rojo)

**3. `actualizarUI(datos)`**
- Actualiza la interfaz con nuevos datos
- Pasos:
  1. Obtiene la hora actual
  2. Actualiza barra de progreso (width)
  3. Actualiza valor en porcentaje
  4. Actualiza estado (color y texto)
  5. Guarda datos en historial
  6. Limita historial a 12 registros
  7. Redibuja el gráfico

**4. `dibujarGrafico()`**
- Dibuja gráfico en elemento `<canvas>`
- Pasos:
  1. Limpia canvas (fondo blanco)
  2. Dibuja ejes (gris)
  3. Dibuja línea de CPU (rojo)
  4. Calcula posiciones X,Y basadas en datos
  5. Añade etiqueta "CPU"

**5. `iniciarMonitor()`**
```javascript
function iniciarMonitor() {
    if (monitorActive) return;
    monitorActive = true;
    const intervalo = setInterval(() => {
        actualizarUI(obtenerDatos());
    }, 2000);  // Cada 2 segundos
}
```
- Inicia actualización automática
- Evita duplicar intervalos

**6. `detenerMonitor()`**
```javascript
function detenerMonitor() {
    monitorActive = false;
}
```
- Pausa el monitor

**7. `limpiarDatos()`**
```javascript
function limpiarDatos() {
    cpuHistory = [];
    memoryHistory = [];
    diskHistory = [];
    timeLabels = [];
    // Reinicia valores a 0%
}
```
- Limpia historial
- Reinicia valores visuales

#### 🚀 Inicialización
```javascript
window.addEventListener('load', () => {
    iniciarMonitor();
});
```
- Inicia automáticamente al cargar la página

---

## 💻 Cómo Usar

### 1. **Abrir la aplicación**
- Abre `index.html` en cualquier navegador web
- O haz doble clic en el archivo

### 2. **Interactuar con los botones**
- **▶️ Iniciar Monitor**: Comienza la monitorización
- **⏸️ Pausar**: Detiene actualizaciones
- **🔄 Reiniciar**: Borra datos y gráfico

### 3. **Leer datos**
- Las barras de progreso muestran uso en tiempo real
- El color cambia según el estado
- Gráfico muestra histórico de CPU

---

## 🔄 Flujo de Datos

```
1. Página carga
    ↓
2. window.addEventListener('load') se dispara
    ↓
3. iniciarMonitor() inicia setInterval cada 2 segundos
    ↓
4. obtenerDatos() genera números aleatorios (simula sistema)
    ↓
5. actualizarUI() actualiza elementos del DOM
    ↓
6. getStatus() determina color según valor
    ↓
7. dibujarGrafico() redibuja canvas con historial
    ↓
8. Loop infinito hasta detenerMonitor()
```

---

## 🎨 Paleta de Colores

| Elemento | Color | Código |
|----------|-------|--------|
| Fondo gradiente | Púrpura | #667eea - #764ba2 |
| CPU | Rojo | #ff6b6b |
| Memoria | Cian | #4ecdc4 |
| Disco | Naranja | #f7b731 |
| Red | Púrpura | #a29bfe |
| Estado Óptimo | Verde | #27ae60 |
| Estado Advertencia | Amarillo | #f39c12 |
| Estado Crítico | Rojo | #e74c3c |

---

## 📱 Responsive Design

- **Móviles (<480px)**: 1 columna
- **Tablets (480-768px)**: 2 columnas
- **Desktops (>768px)**: 4 columnas

Usa `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`

---

## 🚀 Mejoras Futuras

- [ ] Conectar con datos reales del sistema (Node.js backend)
- [ ] Gráficos más complejos con Chart.js
- [ ] Exportar reportes en PDF
- [ ] Historial de datos a base de datos
- [ ] Alertas por email cuando uso crítico
- [ ] Tema oscuro/claro
- [ ] Más métricas (temperatura, procesos)

---

## 📝 Notas Técnicas

- **Datos**: Actualmente son simulados (números aleatorios)
- **Canvas**: Dibujado manualmente con Canvas API (sin librerías)
- **Actualización**: Cada 2 segundos (configurable)
- **Historial**: Máximo 12 registros
- **Compatible**: Chrome, Firefox, Safari, Edge (navegadores modernos)

---

## 👨‍💻 Autor

Proyecto educativo - Clase 8 Sistemas

**Fecha:** Septiembre 2026
