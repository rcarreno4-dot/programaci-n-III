# 🗺️ Mapa Visual del Proyecto

---

## 📊 Estructura General

```
┌─────────────────────────────────────────────────────┐
│              Monitor de Sistema                     │
│           Página Web Interactiva                    │
└─────────────────────────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
    ┌─────────┐       ┌─────────┐       ┌──────────┐
    │  HTML   │       │   CSS   │       │   JS     │
    │         │       │         │       │          │
    │Structure│       │ Estilos │       │ Lógica   │
    └─────────┘       └─────────┘       └──────────┘
        │                  │                  │
     index.html        styles.css         script.js
```

---

## 🎯 Componentes Principales

```
                     ┌─────────────────────┐
                     │   NAVEGADOR WEB     │
                     │   (Chrome, Firefox) │
                     └──────────┬──────────┘
                                │
                    ┌───────────────────────┐
                    │   index.html Carga    │
                    │   (Estructura DOM)    │
                    └──────────┬────────────┘
                               │
                ┌──────────────────────────────┐
                │   styles.css Carga           │
                │   (Estilos visuales)         │
                └──────────┬───────────────────┘
                           │
                ┌──────────────────────────────┐
                │   script.js Carga            │
                │   (Funciones JavaScript)     │
                └──────────┬───────────────────┘
                           │
                ┌──────────────────────────────┐
                │   window.addEventListener()  │
                │   → iniciarMonitor()         │
                └──────────┬───────────────────┘
                           │
              ┌────────────────────────────┐
              │  setInterval cada 2 seg    │
              │  Loop infinito             │
              └────────────────────────────┘
```

---

## 🏗️ Árbol del DOM (HTML)

```
html
│
└─ body
   │
   └─ div.container
      │
      ├─ header
      │  ├─ h1  ("📊 Monitor de Sistema")
      │  └─ p   ("Panel de control...")
      │
      ├─ div.button-group
      │  ├─ button (Iniciar)
      │  ├─ button (Pausar)
      │  └─ button (Reiniciar)
      │
      ├─ div.grid
      │  ├─ div.card.cpu
      │  │  ├─ div.card-icon    (⚙️)
      │  │  ├─ div.card-title   (CPU)
      │  │  ├─ div.progress-bar
      │  │  │  └─ div.progress-fill#cpuBar
      │  │  ├─ div.value#cpuValue      (0%)
      │  │  └─ div.status#cpuStatus    (Óptimo)
      │  │
      │  ├─ div.card.memory
      │  │  └─ (estructura similar)
      │  │
      │  ├─ div.card.disk
      │  │  └─ (estructura similar)
      │  │
      │  └─ div.card.network
      │     └─ (estructura similar)
      │
      ├─ div.chart-container
      │  ├─ div.chart-title   (📈 Histórico...)
      │  └─ canvas#myChart
      │
      └─ div.footer
         ├─ p (🕐 Última actualización...)
         └─ p (© 2026...)
```

---

## 🔄 Ciclo de Ejecución (Flujo Principal)

```
INICIO
  │
  ├─1─ Página carga (index.html)
  │      ├─ Descarga styles.css
  │      └─ Descarga script.js
  │
  ├─2─ HTML se renderiza
  │      └─ Crea estructura del DOM
  │
  ├─3─ JavaScript se ejecuta
  │      ├─ Define variables globales
  │      ├─ Define funciones
  │      └─ Define event listeners
  │
  ├─4─ window.addEventListener('load')
  │      │
  │      └─ iniciarMonitor()
  │
  ├─5─ monitorActive = true
  │
  ├─6─ setInterval cada 2000ms:
  │      │
  │      ├─ obtenerDatos()
  │      │  └─ { cpu: 85, memory: 42, ... }
  │      │
  │      ├─ actualizarUI(datos)
  │      │  ├─ Actualiza barra width
  │      │  ├─ Actualiza valor %
  │      │  ├─ getStatus() → estado
  │      │  ├─ Guarda en historial
  │      │  └─ Modifica DOM
  │      │
  │      └─ dibujarGrafico()
  │         └─ Redibuja canvas
  │
  ├─7─ Usuario hace clic en botón
  │      ├─ detenerMonitor() → monitorActive = false
  │      └─ O limpiarDatos() → vacía arrays
  │
  └─8─ Loop continúa hasta que cierre navegador
```

---

## 🧩 Funciones y Sus Relaciones

```
iniciarMonitor()
   │
   └─ setInterval cada 2seg
      │
      ├─ obtenerDatos()          ← Genera números random
      │  │
      │  └─ { cpu: 85, ... }
      │     │
      │     ├─ actualizarUI()    ← Actualiza interfaz
      │     │  │
      │     │  ├─ getStatus()    ← Determina color
      │     │  │  └─ 'critical'
      │     │  │
      │     │  └─ dibujarGrafico()  ← Redibuja canvas
      │     │     └─ cpuHistory[]
      │     │
      │     └─ detenerMonitor()  ← Pausa (onclick)
      │
      └─ limpiarDatos()          ← Reset (onclick)
         ├─ cpuHistory = []
         ├─ memoryHistory = []
         ├─ Reinicia valores UI
         └─ Próximo ciclo lo notar
```

---

## 📊 Estructura de Datos

```
VARIABLES GLOBALES:

monitorActive: false/true
    └─ ¿Está ejecutándose el monitor?

cpuHistory: [45, 52, 78, 85]
    └─ Últimos 12 valores de CPU

memoryHistory: [30, 35, 40, 42]
    └─ Últimos 12 valores de Memoria

diskHistory: [60, 62, 62, 63]
    └─ Últimos 12 valores de Disco

timeLabels: ['14:20', '14:22', '14:24']
    └─ Etiquetas de tiempo
```

---

## 🎨 Flujo de Estilos (CSS)

```
           ┌─────────────────┐
           │  * (Global)     │
           │  margin: 0      │
           │  padding: 0     │
           │  box-sizing     │
           └────────┬────────┘
                    │
           ┌────────v────────┐
           │  body           │
           │  background     │
           │  gradient       │
           └────────┬────────┘
                    │
        ┌──────────────────┐
        │                  │
        v                  v
    .container         .card
    max-width          background
    1200px             white
    centered           shadow
                       border-radius
                       
                       ├─ .card:hover
                       │  transform
                       │  shadow
                       │
                       └─ .progress-fill
                          width animate
                          background color
```

---

## 🎯 Interactividad (onclick)

```
Usuario Hace Clic
    │
    └─ onclick="iniciarMonitor()"
       ├─ monitorActive = true
       ├─ setInterval comienza
       └─ Datos se actualizan cada 2 seg
    
    └─ onclick="detenerMonitor()"
       └─ monitorActive = false
          └─ Loop se detiene suavemente
    
    └─ onclick="limpiarDatos()"
       ├─ Arrays vaciados
       ├─ Valores = 0%
       └─ Gráfico se limpia
```

---

## 📈 Proceso de Renderizado

```
HTML                CSS              JAVASCRIPT
│                   │                │
├─ Estructura       ├─ Colores       ├─ Variables
├─ Elementos        ├─ Tamaños       ├─ Funciones
├─ Atributos        ├─ Espaciado     ├─ Eventos
├─ IDs              ├─ Fuentes       ├─ DOM Access
└─ Clases           └─ Animaciones   └─ Lógica
   │                   │                │
   │                   │                │
   └─────────────────────────────────────
              │
              ▼
         NAVEGADOR
              │
         ┌────────────┐
         │  RENDERIZA │
         └────────────┘
              │
              ▼
       PÁGINA VISUAL
              │
         [Barras, Gráfico, Botones]
```

---

## 🔀 Estados de la Interfaz

```
Estado Inicial
    │
    ├─ Todas las métricas en 0%
    ├─ Estados: "Óptimo"
    ├─ Gráfico vacío
    └─ Monitor: Pausado
    
    ▼
    
[Usuario clica Iniciar]
    
    ▼
    
Estado Ejecutándose
    │
    ├─ Datos se actualizan cada 2 seg
    ├─ Barras se llenan/vacían
    ├─ Colores cambian
    ├─ Gráfico dibuja puntos
    └─ Monitor: Activo
    
    ▼
    
[Usuario clica Pausar]
    
    ▼
    
Estado Pausado
    │
    ├─ Datos congelados
    ├─ Última actualización mostrada
    ├─ Gráfico detiene
    └─ Monitor: Pausado
    
    ▼
    
[Usuario clica Reiniciar]
    
    ▼
    
Estado Limpio
    │
    ├─ Valores = 0%
    ├─ Historial = vacío
    ├─ Gráfico = limpio
    └─ Listo para nueva sesión
```

---

## 🌊 Canvas (Gráfico)

```
Canvas Element
│
├─ Contexto 2D
│  └─ ctx
│
├─ Dibuja
│  ├─ Fondo blanco
│  ├─ Ejes (gris)
│  └─ Línea CPU (rojo)
│     └─ Desde cpuHistory[]
│
└─ Resultado
   └─ Gráfico dinámico
```

Visualmente:
```
100% ┌──────────────────────
     │   /\    /\
 50% │  /  \  /  \
     │ /    \/    \
  0% └────────────────────
     0  2  4  6  8  10
          Tiempo
```

---

## 📱 Responsive Breakpoints

```
Desktop (1200px+)
┌─────────────────────────────────────────┐
│  [Card] [Card] [Card] [Card]           │
│  [──────────── Gráfico ──────────────] │
└─────────────────────────────────────────┘

Tablet (768px)
┌──────────────────────────┐
│  [Card] [Card]          │
│  [Card] [Card]          │
│  [─────  Gráfico  ─────] │
└──────────────────────────┘

Móvil (480px)
┌────────────┐
│   [Card]   │
│   [Card]   │
│   [Card]   │
│   [Card]   │
│ [Gráfico]  │
└────────────┘
```

---

## 🔐 Scope de Variables

```
GLOBAL (accesible desde cualquier función):
│
├─ let monitorActive
├─ let cpuHistory
├─ let memoryHistory
├─ let diskHistory
└─ let timeLabels

FUNCIONES:
│
├─ function obtenerDatos()
│  └─ const datos (solo aquí)
│
├─ function getStatus()
│  └─ const status (solo aquí)
│
└─ ... otras funciones ...
```

---

## 🎨 Cascada de Estilos

```
* { }
 └─ Aplica a TODO
    │
    ├─ body { }
    │  └─ Aplica a body
    │
    ├─ .container { }
    │  └─ Aplica a class="container"
    │
    ├─ .card { }
    │  └─ Aplica a todos los cards
    │
    ├─ .card.cpu { }
    │  └─ Aplica solo a CPU card
    │
    └─ .card:hover { }
       └─ Aplica al pasar mouse
```

**Especificidad (influencia):**
```
* < elemento < clase < #id < !important
```

---

## 📞 Ciclo Usuario

```
1. Usuario abre index.html
   │
   ├─ 🌐 Navegador carga
   ├─ 📄 HTML renderiza
   ├─ 🎨 CSS aplica
   └─ ⚙️ JavaScript ejecuta
   
2. Usuario ve página
   │
   ├─ Tarjetas con valores
   ├─ 3 botones visibles
   ├─ Gráfico vacío
   └─ Monitor esperando
   
3. Usuario clica "Iniciar"
   │
   └─ Monitor comienza
      └─ actualizarUI() cada 2 seg
   
4. Usuario observa
   │
   ├─ Valores cambian
   ├─ Colores cambian
   ├─ Gráfico se dibuja
   └─ Monitor en vivo
   
5. Usuario clica "Pausar"
   │
   └─ Monitor se detiene
      └─ Datos congelados
   
6. Usuario clica "Reiniciar"
   │
   └─ Datos se borran
      └─ Listo de nuevo
```

---

## 🧵 Thread de Ejecución (Secuencia)

```
Tiempo (ms) │ Evento
────────────┼──────────────────────────────
    0       │ Usuario abre index.html
    50      │ HTML descargado
   100      │ CSS descargado
   150      │ JavaScript descargado
   200      │ Página visible
   250      │ window 'load' event
   260      │ iniciarMonitor() ejecuta
   270      │ setInterval registrado
  2270      │ Primer ciclo: obtenerDatos()
  2280      │ actualizarUI() ejecuta
  2290      │ dibujarGrafico() ejecuta
  2295      │ Actualización #1 completa
  4295      │ Segundo ciclo (2 seg después)
  6295      │ Tercero ciclo
  ....      │ (continúa cada 2 seg)
```

---

## 💾 Comparación Alternativas

```
Este Proyecto (Canvas):
├─ Gráfico dibujado manualmente
├─ Sin librerías externas
├─ Ligero (10KB)
└─ Control total

Si usáramos Chart.js:
├─ Gráfico más bonito
├─ Librerías incluidas (+500KB)
├─ Menos código
└─ Menos control

Si usáramos React:
├─ Componentes reutilizables
├─ Lógica más limpia
├─ Más pesado
└─ Curva de aprendizaje
```

---

## 📊 Matriz de Funcionalidad

```
                HTML    CSS     JS
Estructura      ✓       -       -
Estilos         -       ✓       -
Interactividad  -       -       ✓
Datos           -       -       ✓
Animaciones     -       ✓       ✓
Eventos         -       -       ✓
Responsivo      -       ✓       -
```

---

## 🎓 Jerarquía de Aprendizaje

```
Principiante
    │
    ├─ HTML: estructura básica
    ├─ CSS: colores y tamaños
    └─ JS: variables y funciones
    
        ▼
    
Intermedio
    │
    ├─ HTML: semántica
    ├─ CSS: grid y flexbox
    └─ JS: DOM y eventos
    
        ▼
    
Avanzado
    │
    ├─ HTML: accesibilidad
    ├─ CSS: animaciones
    └─ JS: Canvas y APIs
```

---

## 🗺️ Resumen en Mapa Mental

```
                    MONITOR
                       │
            ┌──────────────────────┐
            │                      │
          HTML            CSS             JS
            │              │              │
        Estructura    Visual         Lógica
            │              │              │
        Elements      Colores         Datos
        Atributos     Tamaños        Funciones
        Clases        Espacios       Eventos
        IDs           Animaciones    Gráfico
            │              │              │
            └──────────────────────┘
                     │
                Navegador
                     │
              Página Interactiva
```

---

**Última actualización:** 1 septiembre 2026

*Use este mapa para entender cómo se conectan todas las partes del proyecto.*
