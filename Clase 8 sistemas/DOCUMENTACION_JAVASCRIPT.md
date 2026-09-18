# ⚙️ Documentación JavaScript - script.js

## Introducción a JavaScript

JavaScript es el lenguaje que da **interactividad** a las páginas web.
Este script maneja la lógica del monitor de sistema.

---

## 📋 Tabla de Contenidos

1. [Variables Globales](#variables-globales)
2. [Función obtenerDatos()](#función-obtenerDatos)
3. [Función getStatus()](#función-getStatus)
4. [Función actualizarUI()](#función-actualizarUI)
5. [Función dibujarGrafico()](#función-dibujarGrafico)
6. [Función iniciarMonitor()](#función-iniciarMonitor)
7. [Función detenerMonitor()](#función-detenerMonitor)
8. [Función limpiarDatos()](#función-limpiarDatos)
9. [Event Listener](#event-listener)
10. [Flujo de Ejecución](#flujo-de-ejecución)

---

## 🔧 Variables Globales

```javascript
let monitorActive = false;
let cpuHistory = [];
let memoryHistory = [];
let diskHistory = [];
let timeLabels = [];
```

### Explicación:

```javascript
let monitorActive = false;
│   │               │
│   │               └─ Valor inicial (apagado)
│   └─ Nombre de variable
└─ Declaración (let = variable que puede cambiar)
```

### Cada Variable:

| Variable | Tipo | Propósito |
|----------|------|----------|
| `monitorActive` | boolean | ¿Está ejecutándose el monitor? |
| `cpuHistory` | array | Últimos valores de CPU |
| `memoryHistory` | array | Últimos valores de Memoria |
| `diskHistory` | array | Últimos valores de Disco |
| `timeLabels` | array | Etiquetas de tiempo |

### Alcance (Scope):

```javascript
GLOBAL (archivo completo):
├─ let monitorActive      ← Accesible en todas las funciones
├─ let cpuHistory         ← Accesible en todas las funciones
└─ Funciones pueden leer y modificar

FUNCIONES:
└─ let nuevaVariable      ← Solo accesible dentro de la función
```

---

## 🔍 Función obtenerDatos()

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

### Desglose:

```javascript
function obtenerDatos()  {  }
│       │
│       └─ Nombre descriptivo
└─ Palabra clave para crear función
```

### Return (Retorna):

```javascript
return {
    cpu: 85,
    memory: 42,
    disk: 56,
    network: 23
}
```

Retorna un **objeto** con 4 propiedades.

### Math.random():

```javascript
Math.random()
├─ Genera número aleatorio entre 0 y 1
├─ Ejemplo: 0.4237, 0.9821, 0.1234
└─ Multiplicar × 100 = 0 a 100
```

### Math.floor():

```javascript
Math.floor()
├─ Redondea hacia abajo
├─ Ejemplos:
│  ├─ Math.floor(84.7) = 84
│  ├─ Math.floor(42.1) = 42
│  └─ Math.floor(99.9) = 99
└─ Convierte decimal a entero
```

### Ejemplo Completo:

```javascript
Math.floor(Math.random() * 100)

Paso 1: Math.random()       → 0.4237
Paso 2: × 100               → 42.37
Paso 3: Math.floor()        → 42
```

### Cómo se Usa:

```javascript
const datos = obtenerDatos();
console.log(datos.cpu);     // 85
console.log(datos.memory);  // 42
```

---

## 🚨 Función getStatus()

```javascript
function getStatus(percentage) {
    if (percentage < 50) {
        return { text: 'Óptimo', class: 'good' };
    }
    if (percentage < 75) {
        return { text: 'Advertencia', class: 'warning' };
    }
    return { text: 'Crítico', class: 'critical' };
}
```

### Explicación:

```
Entrada:  85  →  Función  →  Salida: { text: 'Crítico', class: 'critical' }
```

### Lógica:

```javascript
if (percentage < 50) {           // Si menor que 50%
    return { ..., class: 'good' };   // Retorna BUENO
}

if (percentage < 75) {           // Si menor que 75%
    return { ..., class: 'warning' }; // Retorna ADVERTENCIA
}

return { ..., class: 'critical' };   // Si no, retorna CRÍTICO
```

### Tabla de Decisión:

| Rango | Estado | Clase CSS | Color |
|-------|--------|-----------|-------|
| 0-49% | Óptimo | `good` | Verde |
| 50-74% | Advertencia | `warning` | Amarillo |
| 75-100% | Crítico | `critical` | Rojo |

### Ejemplo:

```javascript
getStatus(30)   // → { text: 'Óptimo', class: 'good' }
getStatus(60)   // → { text: 'Advertencia', class: 'warning' }
getStatus(90)   // → { text: 'Crítico', class: 'critical' }
```

---

## 🔄 Función actualizarUI()

```javascript
function actualizarUI(datos) {
    const ahora = new Date();
    document.getElementById('timestamp').textContent = 
        ahora.toLocaleTimeString('es-ES');
    
    // CPU
    document.getElementById('cpuBar').style.width = datos.cpu + '%';
    document.getElementById('cpuValue').textContent = datos.cpu + '%';
    let statusCPU = getStatus(datos.cpu);
    let elementCPU = document.getElementById('cpuStatus');
    elementCPU.textContent = statusCPU.text;
    elementCPU.className = 'status ' + statusCPU.class;
    
    // ... Similar para memory, disk, network ...
    
    // Guardar en historial
    cpuHistory.push(datos.cpu);
    if (cpuHistory.length > 12) {
        cpuHistory.shift();
    }
    
    dibujarGrafico();
}
```

### Desglose:

#### 1. Obtener Hora Actual

```javascript
const ahora = new Date();
│      │
│      └─ Objeto Date con hora/fecha actual
└─ const = constante (no cambia)

Ejemplo: Fri Sep 01 2026 14:30:45
```

#### 2. Convertir a Formato Legible

```javascript
ahora.toLocaleTimeString('es-ES')
│                       │
│                       └─ Español España
└─ Método que convierte a texto

Resultado: "14:30:45"
```

#### 3. Actualizar en HTML

```javascript
document.getElementById('timestamp').textContent = 
    ahora.toLocaleTimeString('es-ES');
│       │                  │
│       │                  └─ Contenido de texto
│       └─ Busca elemento con id="timestamp"
└─ Acceso al documento HTML
```

#### 4. Actualizar Barra de Progreso

```javascript
document.getElementById('cpuBar').style.width = datos.cpu + '%';
│                                 │    │
│                                 │    └─ Nuevo ancho
│                                 └─ Acceso a estilos CSS
```

**Ejemplo:**
```javascript
datos.cpu = 85;
element.style.width = 85 + '%';  // width: 85%
```

#### 5. Actualizar Valor Numérico

```javascript
document.getElementById('cpuValue').textContent = datos.cpu + '%';

Resultado en HTML: "85%"
```

#### 6. Obtener Estado

```javascript
let statusCPU = getStatus(datos.cpu);
// statusCPU = { text: 'Crítico', class: 'critical' }
```

#### 7. Actualizar Elemento Estado

```javascript
let elementCPU = document.getElementById('cpuStatus');
elementCPU.textContent = statusCPU.text;      // "Crítico"
elementCPU.className = 'status ' + statusCPU.class; 
// className = "status critical"
```

#### 8. Guardar en Historial

```javascript
cpuHistory.push(datos.cpu);     // Añade al final
// cpuHistory = [45, 52, 78, 85] → [45, 52, 78, 85, 72]

if (cpuHistory.length > 12) {
    cpuHistory.shift();  // Elimina el primero
    // [45, 52, 78, 85, 72] → [52, 78, 85, 72]
}
```

**Mantiene máximo 12 registros**

#### 9. Redibujar Gráfico

```javascript
dibujarGrafico();
```

Llama función para actualizar gráfico con nuevo historial.

### Flujo Visual:

```
Entrada: datos { cpu: 85, memory: 42, ... }
    ↓
Obtener hora
    ↓
Actualizar cada métrica:
├─ Barra de progreso (width)
├─ Valor (texto)
└─ Estado (clase CSS + texto)
    ↓
Guardar en historial (máx 12)
    ↓
Redibujar gráfico
    ↓
Fin
```

---

## 📈 Función dibujarGrafico()

```javascript
function dibujarGrafico() {
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    
    // Limpiar canvas
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar ejes
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, canvas.height - 40);
    ctx.lineTo(canvas.width - 20, canvas.height - 40);
    ctx.stroke();
    
    // Dibujar línea de CPU
    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < cpuHistory.length; i++) {
        const x = 40 + (i / (cpuHistory.length - 1 || 1)) * 
            (canvas.width - 60);
        const y = canvas.height - 40 - (cpuHistory[i] / 100) * 
            (canvas.height - 60);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Etiqueta
    ctx.fillStyle = '#ff6b6b';
    ctx.font = '12px Arial';
    ctx.fillText('CPU', 10, 30);
}
```

### Canvas API Explicada

#### 1. Acceder a Canvas

```javascript
const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');
│       │
│       └─ Context 2D (superficie para dibujar)
└─ Elemento canvas del HTML
```

#### 2. Limpiar Canvas

```javascript
ctx.fillStyle = 'white';   // Color: blanco
ctx.fillRect(0, 0, canvas.width, canvas.height);
// Dibuja rectángulo:
// ├─ x: 0
// ├─ y: 0
// ├─ ancho: canvas.width
// └─ alto: canvas.height
```

#### 3. Dibujar Ejes

```javascript
ctx.strokeStyle = '#ddd';   // Color gris
ctx.lineWidth = 1;          // Grosor 1px
ctx.beginPath();            // Comienza ruta
ctx.moveTo(40, 20);         // Mueve a (40, 20)
ctx.lineTo(40, canvas.height - 40);  // Línea hacia arriba
ctx.lineTo(canvas.width - 20, canvas.height - 40);  // Línea horizontal
ctx.stroke();               // Dibuja
```

**Visual:**
```
(40,20)
  │
  │ (línea vertical)
  │
(40, height-40)─────(width-20, height-40)
           (línea horizontal)
```

#### 4. Dibujar Línea de CPU

```javascript
for (let i = 0; i < cpuHistory.length; i++) {
    const x = 40 + (i / (cpuHistory.length - 1 || 1)) * 
        (canvas.width - 60);
    // Calcula posición X evenly spaced
    
    const y = canvas.height - 40 - (cpuHistory[i] / 100) * 
        (canvas.height - 60);
    // Calcula posición Y según valor (0-100)
    
    if (i === 0) ctx.moveTo(x, y);      // Primer punto
    else ctx.lineTo(x, y);               // Conecta puntos
}
ctx.stroke();                            // Dibuja la línea
```

**Ejemplo con cpuHistory = [50, 75, 60]:**

```
Height = 300, Width = 400

i=0: cpu=50
  x = 40 + (0/2) * 340 = 40
  y = 300 - 40 - (50/100)*260 = 170
  → moveTo(40, 170)

i=1: cpu=75
  x = 40 + (1/2) * 340 = 210
  y = 300 - 40 - (75/100)*260 = 45
  → lineTo(210, 45)

i=2: cpu=60
  x = 40 + (2/2) * 340 = 380
  y = 300 - 40 - (60/100)*260 = 104
  → lineTo(380, 104)

Resultado: línea conectando 3 puntos
```

#### 5. Etiqueta

```javascript
ctx.fillStyle = '#ff6b6b';  // Color rojo
ctx.font = '12px Arial';    // Tamaño y fuente
ctx.fillText('CPU', 10, 30); // Texto en posición (10, 30)
```

---

## ▶️ Función iniciarMonitor()

```javascript
function iniciarMonitor() {
    if (monitorActive) return;  // Previene duplicados
    monitorActive = true;       // Marca como activo
    const intervalo = setInterval(() => {
        if (!monitorActive) {
            clearInterval(intervalo);
            return;
        }
        actualizarUI(obtenerDatos());
    }, 2000);  // Cada 2000 milisegundos (2 segundos)
}
```

### setInterval Explicado:

```javascript
setInterval(función, intervalo)
├─ función   → Se ejecuta repetidamente
└─ intervalo → Milisegundos entre ejecuciones

Ejemplo: setInterval(() => {}, 2000)
├─ Ejecuta cada 2000ms
├─ = 2 segundos
└─ ∞ veces (infinito)
```

### Prevención de Duplicados:

```javascript
if (monitorActive) return;
// Si ya está activo, sale sin hacer nada
// Evita crear múltiples setInterval
```

### Flujo:

```
Llamada: iniciarMonitor()
    ↓
¿Activo? → Sí → Return (salir)
    ↓
    No
    ↓
monitorActive = true
    ↓
setInterval cada 2 segundos:
├─ obtenerDatos() → { cpu: 85, ... }
├─ actualizarUI(datos) → Actualiza DOM
└─ Si monitorActive = false, detiene
```

---

## ⏸️ Función detenerMonitor()

```javascript
function detenerMonitor() {
    monitorActive = false;
}
```

**Efecto:**
- Cambia `monitorActive` a `false`
- En el próximo ciclo de `setInterval`, detecta `!monitorActive` y limpia
- Se detiene suavemente sin errores

---

## 🔄 Función limpiarDatos()

```javascript
function limpiarDatos() {
    cpuHistory = [];
    memoryHistory = [];
    diskHistory = [];
    timeLabels = [];
    document.getElementById('cpuValue').textContent = '0%';
    document.getElementById('memoryValue').textContent = '0%';
    document.getElementById('diskValue').textContent = '0%';
    document.getElementById('networkValue').textContent = '0%';
}
```

### Acciones:

```javascript
cpuHistory = [];  // Vacía array
// De [50, 75, 60] → []
```

### Reinicia Valores Visuales:

```javascript
document.getElementById('cpuValue').textContent = '0%';
// Muestra "0%" en la página
```

---

## 🚀 Event Listener

```javascript
window.addEventListener('load', () => {
    iniciarMonitor();
});
```

### Explicación:

```javascript
window.addEventListener('load', () => {})
│      │              │     │
│      │              │     └─ Función que se ejecuta
│      │              └─ Evento (página cargada)
│      └─ Método de escucha
└─ Objeto ventana

Cuando la página carga completamente:
    ↓
Dispara evento 'load'
    ↓
Ejecuta función flecha () => {}
    ↓
Llama iniciarMonitor()
    ↓
Monitor comienza
```

### Arrow Function:

```javascript
() => { iniciarMonitor(); }
│   │  │
│   │  └─ Cuerpo (lo que hace)
│   └─ Parámetros (ninguno)
└─ Sintaxis arrow function
```

**Equivalente con function:**
```javascript
window.addEventListener('load', function() {
    iniciarMonitor();
});
```

---

## 📊 Flujo de Ejecución Completo

```
1. Página HTML carga
   ├─ Descarga styles.css
   └─ Descarga script.js

2. HTML se renderiza
   ├─ Crea elementos del DOM
   └─ Elementos tienen id="" para acceso

3. JavaScript se carga
   ├─ Define variables globales
   ├─ Define funciones
   └─ Espera eventos

4. window.addEventListener('load') se dispara
   └─ Ejecuta iniciarMonitor()

5. iniciarMonitor() activa
   ├─ Establece monitorActive = true
   └─ Crea setInterval cada 2 segundos:

6. Loop Infinito (cada 2 segundos):
   ├─ obtenerDatos() 
   │  └─ Retorna { cpu: 85, memory: 42, ... }
   │
   ├─ actualizarUI(datos)
   │  ├─ document.getElementById('cpuBar').style.width = '85%'
   │  ├─ document.getElementById('cpuValue').textContent = '85%'
   │  ├─ let status = getStatus(85)
   │  │  └─ Retorna { text: 'Crítico', class: 'critical' }
   │  ├─ Actualiza elemento status
   │  ├─ cpuHistory.push(85)
   │  └─ dibujarGrafico()
   │
   ├─ dibujarGrafico()
   │  ├─ Limpia canvas
   │  ├─ Dibuja ejes
   │  ├─ Dibuja línea CPU desde cpuHistory
   │  └─ Añade etiqueta
   │
   └─ Vuelve al inicio (2 segundos después)

7. Usuario hace clic en botón:
   ├─ onclick="detenerMonitor()" 
   ├─ monitorActive = false
   └─ Loop continúa pero se detiene suavemente

8. Usuario hace clic en Reiniciar:
   ├─ limpiarDatos()
   ├─ Vacía arrays
   ├─ Reinicia valores a 0%
   └─ Gráfico se limpia en siguiente ciclo
```

---

## 🔑 Conceptos Clave

### Variables (let, const):

```javascript
let x = 5;        // Puede cambiar
x = 10;           // ✓ Válido

const y = 5;      // No puede cambiar
y = 10;           // ✗ Error
```

### Funciones:

```javascript
function nombre(parámetros) {
    // Código
    return resultado;
}

resultado = nombre(argumentos);
```

### Arrays:

```javascript
let arr = [1, 2, 3];
arr.push(4);       // [1, 2, 3, 4]
arr.shift();       // [2, 3, 4] (elimina primero)
arr.length;        // 3
```

### Objetos:

```javascript
let obj = {
    cpu: 85,
    memory: 42
};

obj.cpu;           // 85
obj['memory'];     // 42
```

### DOM (Document Object Model):

```javascript
document.getElementById('id');        // Busca por id
element.textContent = 'texto';        // Cambia texto
element.style.width = '50%';          // Cambia estilos
element.className = 'nueva-clase';    // Cambia clases CSS
```

### Canvas:

```javascript
ctx.fillStyle = 'color';        // Color de relleno
ctx.strokeStyle = 'color';      // Color de línea
ctx.fillRect(x, y, w, h);       // Rectángulo
ctx.beginPath();                // Comienza ruta
ctx.moveTo(x, y);               // Mueve punto
ctx.lineTo(x, y);               // Línea a punto
ctx.stroke();                   // Dibuja línea
ctx.fillText('texto', x, y);    // Texto
```

---

## 🐛 Debugging (Resolución de Problemas)

### Ver en consola:

```javascript
console.log(datos);             // Imprime objeto
console.log('CPU:', datos.cpu); // Imprime con etiqueta
console.error('Error!');        // Imprime error
```

### Abrir consola del navegador:
- **Chrome/Firefox/Edge**: F12 → Console
- Ver mensajes de error
- Ejecutar código directamente

### Ejemplo:

```javascript
function obtenerDatos() {
    const datos = { cpu: 85, memory: 42 };
    console.log('Datos:', datos);
    return datos;
}
```

**En consola:**
```
Datos: { cpu: 85, memory: 42 }
```

---

## ✅ Checklist de Funcionamiento

- ✓ Variables globales declaradas
- ✓ Funciones definidas correctamente
- ✓ Event listener en 'load'
- ✓ setInterval actualizando cada 2 segundos
- ✓ DOM elementos encontrados por id
- ✓ Canvas dibuja correctamente
- ✓ Botones llaman funciones correctas

---

## 📚 Referencias

- [MDN - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [MDN - setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

---

**Última actualización:** 1 septiembre 2026
