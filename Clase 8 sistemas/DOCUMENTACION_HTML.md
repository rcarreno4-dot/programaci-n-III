# 📄 Documentación HTML - index.html

## Estructura General del Documento

```html
<!DOCTYPE html>                    <!-- Declara versión HTML5 -->
<html lang="es">                   <!-- Idioma español -->
<head>...</head>                   <!-- Metadatos -->
<body>...</body>                   <!-- Contenido -->
</html>
```

---

## 📋 Sección HEAD

### Meta Tags

```html
<meta charset="UTF-8">
```
- Define la codificación de caracteres
- Permite usar caracteres especiales y acentos
- **Importante**: Debe ser la primera etiqueta meta

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Hace la página responsive (adaptable a móviles)
- `width=device-width`: Ancho = ancho del dispositivo
- `initial-scale=1.0`: Escala inicial 100%

### Title

```html
<title>Monitor de Uso del Sistema</title>
```
- Aparece en la pestaña del navegador
- Importante para SEO

### CSS Externo

```html
<link rel="stylesheet" href="styles.css">
```
- Vincula el archivo de estilos CSS
- `rel="stylesheet"`: Indica que es una hoja de estilos
- `href="styles.css"`: Ruta del archivo CSS

---

## 🎨 Sección BODY

### 1. Container Principal

```html
<div class="container">
    <!-- Todo el contenido va aquí -->
</div>
```
- Div con clase `container`
- Limita ancho máximo a 1200px
- Centra contenido en la página

### 2. Encabezado (Header)

```html
<header>
    <h1>📊 Monitor de Sistema</h1>
    <p>Panel de control en tiempo real</p>
</header>
```

**Elementos:**
- `<header>`: Tag semántico para encabezado
- `<h1>`: Título principal (solo uno por página)
- `<p>`: Párrafo descriptivo

**Estilos aplicados:**
- Color blanco (text-align: center)
- Sombra de texto (text-shadow)
- Margen inferior de 40px

### 3. Grupo de Botones

```html
<div class="button-group">
    <button onclick="iniciarMonitor()">▶️ Iniciar Monitor</button>
    <button onclick="detenerMonitor()">⏸️ Pausar</button>
    <button onclick="limpiarDatos()">🔄 Reiniciar</button>
</div>
```

**Botones:**

| Botón | Función | Llama |
|-------|---------|-------|
| ▶️ Iniciar | Comienza monitor | `iniciarMonitor()` |
| ⏸️ Pausar | Detiene actualizaciones | `detenerMonitor()` |
| 🔄 Reiniciar | Borra datos | `limpiarDatos()` |

**Atributo `onclick`:**
- Ejecuta función JavaScript cuando se hace clic
- `onclick="iniciarMonitor()"` llama la función del script.js

### 4. Grid de Tarjetas (Cards)

```html
<div class="grid">
    <div class="card cpu">
        <div class="card-icon">⚙️</div>
        <div class="card-title">CPU</div>
        <div class="progress-bar">
            <div class="progress-fill" id="cpuBar" style="width: 0%"></div>
        </div>
        <div class="value" id="cpuValue">0%</div>
        <div class="status" id="cpuStatus">Óptimo</div>
    </div>
    
    <!-- Similar para memory, disk, network -->
</div>
```

#### Estructura de cada Card:

```
┌─ .card.cpu ──────────────────────┐
│                                   │
│  .card-icon           ⚙️          │
│  .card-title          CPU         │
│  .progress-bar        [████     ] │
│  .value               85%         │
│  .status (class)      Óptimo ✅   │
│                                   │
└───────────────────────────────────┘
```

#### Elementos dentro de cada Card:

```html
<div class="card-icon">⚙️</div>
```
- Icono emoji (⚙️ CPU, 💾 Memoria, 💿 Disco, 🌐 Red)

```html
<div class="card-title">CPU</div>
```
- Nombre del recurso a monitorear

```html
<div class="progress-bar">
    <div class="progress-fill" id="cpuBar" style="width: 0%"></div>
</div>
```
- Barra de progreso con dos niveles:
  - `.progress-bar`: Contenedor gris de fondo
  - `.progress-fill`: Barra de color que se llena
- `id="cpuBar"`: Identificador único para modificar desde JavaScript
- `style="width: 0%"`: Ancho inicial 0%

```html
<div class="value" id="cpuValue">0%</div>
```
- Muestra el porcentaje (ej: "85%")
- `id="cpuValue"`: Para actualizar desde JavaScript

```html
<div class="status" id="cpuStatus">Óptimo</div>
```
- Muestra estado actual
- Clases dinámicas: `good`, `warning`, `critical`

#### Las 4 Tarjetas:

```html
<!-- 1. CPU -->
<div class="card cpu">
    <div class="card-icon">⚙️</div>
    <div class="card-title">CPU</div>
    <!-- ... -->
</div>

<!-- 2. Memoria RAM -->
<div class="card memory">
    <div class="card-icon">💾</div>
    <div class="card-title">Memoria RAM</div>
    <!-- ... -->
</div>

<!-- 3. Disco Duro -->
<div class="card disk">
    <div class="card-icon">💿</div>
    <div class="card-title">Disco Duro</div>
    <!-- ... -->
</div>

<!-- 4. Conexión Red -->
<div class="card network">
    <div class="card-icon">🌐</div>
    <div class="card-title">Conexión Red</div>
    <!-- ... -->
</div>
```

### 5. Contenedor del Gráfico

```html
<div class="chart-container">
    <div class="chart-title">📈 Histórico de Uso de CPU</div>
    <canvas id="myChart" width="400" height="100"></canvas>
</div>
```

**Elementos:**

```html
<div class="chart-title">📈 Histórico de Uso de CPU</div>
```
- Título del gráfico
- Icono de gráfica

```html
<canvas id="myChart" width="400" height="100"></canvas>
```
- Elemento HTML5 Canvas (lienzo para dibujar)
- `id="myChart"`: Identificador para acceder desde JavaScript
- `width="400" height="100"`: Dimensiones en píxeles
- El gráfico se dibuja dinámicamente con JavaScript

### 6. Footer (Pie de página)

```html
<div class="footer">
    <p>🕐 Última actualización: <span id="timestamp">--:--:--</span></p>
    <p>© 2026 - Monitor de Sistema</p>
</div>
```

**Elementos:**

```html
<span id="timestamp">--:--:--</span>
```
- Muestra la hora actual
- Se actualiza cada 2 segundos desde JavaScript
- Inicialmente "--:--:--"

```html
<p>© 2026 - Monitor de Sistema</p>
```
- Copyright y nombre del proyecto

---

## 🔗 JavaScript Externo

```html
<script src="script.js"></script>
```

**Ubicado al final de body:**
- Se carga después del HTML
- Permite que el DOM esté listo antes de ejecutar
- Mejora el rendimiento de carga

---

## 🆔 IDs Utilizados en HTML

| ID | Elemento | Usado por JavaScript |
|-------|----------|---------------------|
| `cpuBar` | Progress bar CPU | Actualiza width |
| `cpuValue` | Valor CPU % | Actualiza texto |
| `cpuStatus` | Estado CPU | Actualiza clase CSS |
| `memoryBar` | Progress bar Memoria | Actualiza width |
| `memoryValue` | Valor Memoria % | Actualiza texto |
| `memoryStatus` | Estado Memoria | Actualiza clase CSS |
| `diskBar` | Progress bar Disco | Actualiza width |
| `diskValue` | Valor Disco % | Actualiza texto |
| `diskStatus` | Estado Disco | Actualiza clase CSS |
| `networkBar` | Progress bar Red | Actualiza width |
| `networkValue` | Valor Red % | Actualiza texto |
| `networkStatus` | Estado Red | Actualiza clase CSS |
| `myChart` | Canvas | Dibuja gráfico |
| `timestamp` | Hora actual | Actualiza hora |

---

## 🏗️ Diagrama de Estructura

```
html
├── head
│   ├── meta (charset)
│   ├── meta (viewport)
│   ├── title
│   └── link (styles.css)
│
└── body
    ├── div.container
    │   ├── header
    │   │   ├── h1
    │   │   └── p
    │   │
    │   ├── div.button-group
    │   │   ├── button (onclick="iniciarMonitor()")
    │   │   ├── button (onclick="detenerMonitor()")
    │   │   └── button (onclick="limpiarDatos()")
    │   │
    │   ├── div.grid
    │   │   ├── div.card.cpu
    │   │   │   ├── div.card-icon
    │   │   │   ├── div.card-title
    │   │   │   ├── div.progress-bar
    │   │   │   │   └── div.progress-fill#cpuBar
    │   │   │   ├── div.value#cpuValue
    │   │   │   └── div.status#cpuStatus
    │   │   │
    │   │   ├── div.card.memory
    │   │   │   └── (similar a cpu)
    │   │   │
    │   │   ├── div.card.disk
    │   │   │   └── (similar a cpu)
    │   │   │
    │   │   └── div.card.network
    │   │       └── (similar a cpu)
    │   │
    │   ├── div.chart-container
    │   │   ├── div.chart-title
    │   │   └── canvas#myChart
    │   │
    │   └── div.footer
    │       ├── p (con span#timestamp)
    │       └── p (copyright)
    │
    └── script (src="script.js")
```

---

## 🎯 Flujo de Interacción

```
Usuario abre index.html
    ↓
Navegador interpreta HTML
    ↓
Carga estilos de styles.css
    ↓
Renderiza estructura visual
    ↓
Carga script.js
    ↓
window.addEventListener('load') se dispara
    ↓
iniciarMonitor() comienza
    ↓
Cada 2 segundos:
├─ obtenerDatos()
├─ actualizarUI()
├─ getStatus()
├─ Modifica elementos HTML (ids)
└─ dibujarGrafico()
```

---

## 📱 Atributos Importantes

### Atributo `id`
- Identifica elementos únicos
- Se usa desde JavaScript con `document.getElementById()`
- No puede haber dos elementos con el mismo `id`

### Atributo `class`
- Agrupa elementos para estilos CSS
- Pueden ser múltiples: `class="card cpu"`
- Se usan para aplicar estilos genéricos

### Atributo `onclick`
- Ejecuta JavaScript al hacer clic
- Alternativa a event listeners
- Menos recomendado que Event Listeners

### Atributo `style`
- Estilos inline (en el HTML)
- Ejemplo: `style="width: 50%"`
- Se modifica desde JavaScript

---

## ✅ Validación

Este HTML es válido HTML5:
- ✅ DOCTYPE correcto
- ✅ Meta tags necesarios
- ✅ Estructura semántica
- ✅ IDs únicos
- ✅ Atributos válidos

---

## 🔧 Cómo Modificar

### Cambiar colores de iconos:
```html
<div class="card-icon">⚙️</div>
<!-- Reemplazar emoji -->
```

### Añadir nueva métrica:
```html
<div class="card temperatura">
    <div class="card-icon">🌡️</div>
    <div class="card-title">Temperatura</div>
    <!-- Copiar estructura de otras tarjetas -->
</div>
```

### Cambiar títulos:
```html
<h1>Mi Monitor Personalizado</h1>
```

---

**Última actualización:** 1 septiembre 2026
