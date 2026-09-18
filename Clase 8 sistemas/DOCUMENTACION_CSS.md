# 🎨 Documentación CSS - styles.css

## Introducción a CSS

CSS (Cascading Style Sheets) define los estilos visuales de la página HTML.
Propiedades: `propiedad: valor;`

---

## 📋 Tabla de Contenidos

1. [Reset Global](#reset-global)
2. [Body](#body)
3. [Container](#container)
4. [Header](#header)
5. [Grid Layout](#grid-layout)
6. [Cards](#cards)
7. [Barras de Progreso](#barras-de-progreso)
8. [Valores y Estados](#valores-y-estados)
9. [Chart Container](#chart-container)
10. [Footer](#footer)
11. [Botones](#botones)

---

## 🔄 Reset Global

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Explicación:

```
Selector:       *
├─ margin: 0;     → Elimina espacios externos
├─ padding: 0;    → Elimina espacios internos
└─ box-sizing: border-box;
                  → Incluye padding y border en el ancho/alto total
```

### ¿Por qué?
- Navegadores tienen estilos por defecto
- `box-sizing: border-box` facilita cálculos de ancho

### Ejemplo:
```css
/* Sin box-sizing: border-box */
div { width: 100px; padding: 10px; }  /* Ancho real: 120px */

/* Con box-sizing: border-box */
div { width: 100px; padding: 10px; box-sizing: border-box; }  /* Ancho real: 100px */
```

---

## 📦 Body

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}
```

### Propiedades:

| Propiedad | Valor | Explicación |
|-----------|-------|------------|
| `font-family` | 'Segoe UI', ... | Fuente principal (con fallbacks) |
| `background` | gradient | Fondo degradado |
| `min-height` | 100vh | Altura mínima = 100% viewport |
| `padding` | 20px | Espacio interno a los 4 lados |

### Gradient Explicado:

```css
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
│
├─ linear-gradient    → Tipo de gradiente (lineal)
├─ 135deg             → Ángulo (esquina inferior derecha)
├─ #667eea 0%         → Color inicial (morado claro)
└─ #764ba2 100%       → Color final (morado oscuro)
```

**Colores:**
- #667eea = Morado azulado
- #764ba2 = Morado rojizo

### Viewport Height (vh):

```
1vh = 1% de la altura del navegador

Ejemplos:
├─ min-height: 100vh    → Mínimo de altura = viewport completo
├─ min-height: 50vh     → Mínimo de altura = media pantalla
└─ min-height: 150vh    → Mínimo de altura = 1.5x pantalla
```

---

## 📐 Container

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
}
```

### Explicación:

| Propiedad | Valor | Explicación |
|-----------|-------|------------|
| `max-width` | 1200px | Ancho máximo |
| `margin` | 0 auto | 0px arriba/abajo, auto izquierda/derecha |

### Propósito:
- Limita ancho en pantallas grandes
- Centra el contenido horizontalmente
- `auto` calcula automáticamente márgenes iguales

### Efecto:
```
Pantalla grande (1600px)
┌─────────────────────────────────┐
│                                 │
│  ← margin auto →               │
│  ┌──────── 1200px ──────┐       │
│  │      contenido      │       │
│  │                     │       │
│  └─────────────────────┘       │
│  ← margin auto →               │
│                                 │
└─────────────────────────────────┘

Pantalla pequeña (900px)
┌──────────────────────┐
│  contenido (900px)  │
│                     │
└──────────────────────┘
```

---

## 🏷️ Header

```css
header {
    text-align: center;
    color: white;
    margin-bottom: 40px;
}

header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

### Selectores:

```css
header { }          /* Todos los header */
header h1 { }       /* Los h1 DENTRO de header */
```

### Propiedades:

| Propiedad | Valor | Explicación |
|-----------|-------|------------|
| `text-align` | center | Centra el texto |
| `color` | white | Texto blanco |
| `margin-bottom` | 40px | Espacio abajo |
| `font-size` | 2.5em | Tamaño 2.5 veces el tamaño base |
| `text-shadow` | 2px 2px... | Sombra de texto |

### Text Shadow Explicado:

```css
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
│           │   │   │   └─ Color (negro con 30% opacidad)
│           │   │   └─ Blur (difuminado)
│           │   └─ Desplazamiento Y
│           └─ Desplazamiento X
```

**Valores:**
- 2px a la derecha
- 2px hacia abajo
- 4px de difuminado
- Negro semitransparente

---

## 📊 Grid Layout

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-bottom: 30px;
}
```

### Explicación del Grid:

```css
display: grid;
```
- Activa layout de grid (tabla flexible)

```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```

**Desglose:**
```
repeat(auto-fit, minmax(280px, 1fr))
├─ repeat()        → Repite el patrón
├─ auto-fit        → Cantidad automática de columnas
├─ minmax()        → Mínimo y máximo para cada columna
├─ 280px           → Ancho mínimo de cada columna
└─ 1fr             → Ancho máximo (1 fracción = espacio disponible)
```

### Comportamiento Responsive:

```
Pantalla 1200px:  4 columnas (280px × 4 = 1120px)
┌────────┬────────┬────────┬────────┐
│ Card   │ Card   │ Card   │ Card   │
└────────┴────────┴────────┴────────┘

Pantalla 800px:   2 columnas (280px × 2 = 560px)
┌────────┬────────┐
│ Card   │ Card   │
├────────┼────────┤
│ Card   │ Card   │
└────────┴────────┘

Pantalla 400px:   1 columna (280px)
┌────────┐
│ Card   │
├────────┤
│ Card   │
├────────┤
│ Card   │
├────────┤
│ Card   │
└────────┘
```

### Gap:

```css
gap: 25px;
```
- Espacio entre columnas y filas: 25px

### Margin Bottom:

```css
margin-bottom: 30px;
```
- Espacio abajo del grid

---

## 🎴 Cards

```css
.card {
    background: white;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}
```

### Propiedades Básicas:

| Propiedad | Valor | Explicación |
|-----------|-------|------------|
| `background` | white | Fondo blanco |
| `border-radius` | 15px | Esquinas redondeadas |
| `padding` | 25px | Espacio interno |
| `box-shadow` | ... | Sombra de caja |

### Box Shadow Explicado:

```css
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
│           │ │  │   │   └─ Color (negro 20% opacidad)
│           │ │  │   └─ Blur (30px difuminado)
│           │ │  └─ Spread (0px, no se expande)
│           │ └─ Desplazamiento Y (10px abajo)
│           └─ Desplazamiento X (0px, centrado)
```

### Transition (Animación):

```css
transition: transform 0.3s ease, box-shadow 0.3s ease;
```

**Propiedades animadas:**
- `transform`: Transformación visual
- `box-shadow`: Sombra
- Duración: 0.3 segundos
- Timing: `ease` (inicio lento, fin lento)

### Efecto Hover:

```css
.card:hover {
    transform: translateY(-10px);      /* Sube 10px */
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);  /* Sombra más grande */
}
```

**Transform:**
```css
translateY(-10px)
└─ Mueve -10px en eje Y (hacia arriba)
```

**Resultado:** Card se eleva con sombra más dramática al pasar el mouse

### Card Titles e Icons:

```css
.card-title {
    font-size: 1.1em;
    color: #333;
    margin-bottom: 15px;
    font-weight: 600;
}

.card-icon {
    font-size: 2em;
    margin-bottom: 10px;
}
```

---

## 📊 Barras de Progreso

```css
.progress-bar {
    width: 100%;
    height: 10px;
    background: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    margin: 15px 0;
}

.progress-fill {
    height: 100%;
    border-radius: 5px;
    transition: width 0.3s ease;
}
```

### Estructura:

```html
<div class="progress-bar">              ← Contenedor (gris)
    <div class="progress-fill"></div>   ← Relleno (colorido)
</div>
```

```
progress-bar (100% ancho, gris)
┌──────────────────────────────┐
│ progress-fill (ancho dinámico)│
└──────────────────────────────┘
```

### Propiedades:

| Propiedad | Valor | Explicación |
|-----------|-------|------------|
| `width` | 100% | Ancho del contenedor |
| `height` | 10px | Alto de la barra |
| `background` | #e0e0e0 | Gris claro (fondo) |
| `overflow` | hidden | Recorta contenido que sale |

### Colores por Tipo:

```css
.cpu .progress-fill {
    background: linear-gradient(90deg, #ff6b6b, #ee5a6f);  /* Rojo */
}

.memory .progress-fill {
    background: linear-gradient(90deg, #4ecdc4, #44a7a8);  /* Cian */
}

.disk .progress-fill {
    background: linear-gradient(90deg, #f7b731, #ffa502);  /* Naranja */
}

.network .progress-fill {
    background: linear-gradient(90deg, #a29bfe, #6c5ce7);  /* Púrpura */
}
```

**Gradientes 90deg (izquierda a derecha):**
```
CPU:     rojo claro → rojo oscuro
Memoria: cian claro → cian oscuro
Disco:   naranja claro → naranja oscuro
Red:     púrpura claro → púrpura oscuro
```

---

## 💯 Valores y Estados

```css
.value {
    font-size: 2em;
    font-weight: bold;
    color: #667eea;
    margin: 10px 0;
}

.status {
    font-size: 0.9em;
    color: #666;
    margin-top: 10px;
}

.status.good {
    color: #27ae60;      /* Verde */
}

.status.warning {
    color: #f39c12;      /* Amarillo */
}

.status.critical {
    color: #e74c3c;      /* Rojo */
}
```

### Selectores de Clase:

```css
.status              /* Cualquier elemento con class="status" */
.status.good         /* status AND good (dos clases) */
.status.warning      /* status AND warning */
.status.critical     /* status AND critical */
```

### Ejemplo en HTML:

```html
<div class="status good">Óptimo</div>
<!-- color: #27ae60 (verde) -->

<div class="status warning">Advertencia</div>
<!-- color: #f39c12 (amarillo) -->

<div class="status critical">Crítico</div>
<!-- color: #e74c3c (rojo) -->
```

---

## 📈 Chart Container

```css
.chart-container {
    background: white;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
}

.chart-title {
    font-size: 1.3em;
    color: #333;
    margin-bottom: 20px;
    font-weight: 600;
}

canvas {
    max-width: 100%;
    height: auto;
}
```

### Propiedades Canvas:

```css
canvas {
    max-width: 100%;    /* Responde al ancho del contenedor */
    height: auto;       /* Altura automática */
}
```

---

## 🔚 Footer

```css
.footer {
    text-align: center;
    color: white;
    padding: 20px;
    font-size: 0.9em;
}
```

**Efecto:**
- Texto centrado
- Color blanco (contrasta con fondo morado)
- Tamaño de fuente 90% del normal

---

## 🔘 Botones

```css
button {
    background: white;
    color: #667eea;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

button:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
}

button:active {
    transform: translateY(0);
}
```

### Propiedades:

| Propiedad | Valor | Explicación |
|-----------|-------|------------|
| `background` | white | Fondo blanco |
| `color` | #667eea | Texto morado |
| `border` | none | Sin borde |
| `padding` | 12px 25px | 12px arriba/abajo, 25px izquierda/derecha |
| `cursor` | pointer | Cursor de mano al pasar |

### Estados del Botón:

```css
button { }           /* Estado normal */
button:hover { }     /* Al pasar el mouse */
button:active { }    /* Mientras se presiona */
```

### Efecto Hover:

```css
background: #f0f0f0;           /* Gris claro */
transform: translateY(-2px);   /* Sube 2px */
box-shadow: 0 7px 20px ...;   /* Sombra más grande */
```

### Efecto Active (presionar):

```css
transform: translateY(0);      /* Vuelve a posición original */
```

---

## 🌈 Paleta de Colores Completa

```css
Gradiente Background:
├─ #667eea (Morado azulado)
└─ #764ba2 (Morado rojizo)

Progreso:
├─ CPU:     #ff6b6b a #ee5a6f (Rojo)
├─ Memory:  #4ecdc4 a #44a7a8 (Cian)
├─ Disk:    #f7b731 a #ffa502 (Naranja)
└─ Network: #a29bfe a #6c5ce7 (Púrpura)

Estados:
├─ Good:    #27ae60 (Verde)
├─ Warning: #f39c12 (Amarillo)
└─ Critical:#e74c3c (Rojo)

Neutral:
├─ Fondo cards: white
├─ Texto principal: #333
├─ Texto secundario: #666
├─ Progreso vacío: #e0e0e0
└─ Valor: #667eea
```

---

## 📱 Responsive Breakpoints

```css
/* Sin media queries: usa grid automático */

Ancho mínimo columna: 280px

Pantalla grande (1400px):
└─ 5 columnas

Pantalla normal (1200px):
└─ 4 columnas

Pantalla tablet (768px):
└─ 2-3 columnas

Pantalla móvil (480px):
└─ 1 columna
```

---

## 🎯 Cascada CSS

**Orden de especificidad (menor a mayor):**

1. `elemento` (ej: `body`)
2. `.clase` (ej: `.card`)
3. `#id` (ej: `#cpuBar`)
4. `!important` (evitar)
5. `style=""` (inline)

**En este proyecto:**
```css
* { }                       /* Aplica a todo */
body { }                    /* Aplica a body */
.card { }                   /* Aplica a cards */
.card:hover { }             /* Aplica solo en hover */
.cpu .progress-fill { }     /* Específico para CPU */
```

---

## 💡 Trucos y Consejos

### 1. Agregar más colores
```css
.status.info {
    color: #3498db;  /* Azul claro */
}
```

### 2. Cambiar fuente
```css
body {
    font-family: 'Arial', sans-serif;  /* Más simple */
    font-family: 'Georgia', serif;     /* Más elegante */
}
```

### 3. Hacer el grid más apretado
```css
gap: 10px;  /* Menos espaciado */
```

### 4. Cards más grandes
```css
.card {
    padding: 40px;  /* Más interno */
}
```

### 5. Animación más lenta
```css
transition: all 0.5s ease;  /* 0.5s en vez de 0.3s */
```

---

**Última actualización:** 1 septiembre 2026
