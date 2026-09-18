# ⚡ Guía Rápida - Monitor de Sistema

**Lectura rápida: 5 minutos**

---

## 🎯 ¿Qué es esto?

Una **página web** que monitorea en tiempo real:
- CPU ⚙️
- Memoria 💾  
- Disco Duro 💿
- Red 🌐

Con gráfico dinámico incluido.

---

## 🚀 Cómo Usar

1. **Abre** `index.html` en tu navegador
2. **Botones**:
   - ▶️ **Iniciar**: Comienza monitorización
   - ⏸️ **Pausar**: Detiene actualizaciones
   - 🔄 **Reiniciar**: Borra datos

3. **Observa**:
   - Barras de progreso que se llenan
   - Colores cambian según uso
   - Gráfico histórico

---

## 📁 3 Archivos Clave

```
index.html    ← La página (estructura)
styles.css    ← Los estilos (colores, tamaño)
script.js     ← La lógica (funcionalidad)
```

### Analogía:
```
HTML  = Estructura (esqueleto)
CSS   = Diseño (ropa y maquillaje)
JS    = Comportamiento (cómo se mueve)
```

---

## 🎨 3 Conceptos Fundamentales

### 1. HTML - Estructura
```html
<div class="card cpu">
    <div class="value">85%</div>
</div>
```
**Respuesta**: ¿Qué elementos tiene la página?

### 2. CSS - Estilos
```css
.card {
    background: white;
    color: blue;
}
```
**Respuesta**: ¿Cómo se ve?

### 3. JavaScript - Lógica
```javascript
document.getElementById('value').textContent = '85%';
```
**Respuesta**: ¿Qué hace cuando algo cambia?

---

## 🔄 Flujo Muy Simple

```
1. Abre página
   ↓
2. JavaScript comienza
   ↓
3. Cada 2 segundos:
   - Genera número aleatorio (0-100)
   - Actualiza barras
   - Dibuja gráfico
   ↓
4. Loop infinito
```

---

## 🎨 4 Colores Principales

| Elemento | Color | Significado |
|----------|-------|------------|
| CPU | 🔴 Rojo | Procesar |
| Memoria | 🔵 Cian | RAM |
| Disco | 🟠 Naranja | Almacenamiento |
| Red | 🟣 Púrpura | Internet |

---

## 🚨 3 Estados

| Valor | Estado | Color |
|-------|--------|-------|
| 0-49% | ✅ Óptimo | Verde |
| 50-74% | ⚠️ Advertencia | Amarillo |
| 75-100% | 🔴 Crítico | Rojo |

---

## 🔧 Cambios Rápidos

### Cambiar color de CPU
Archivo: `styles.css`
```css
.cpu .progress-fill {
    background: linear-gradient(90deg, #ff6b6b, #ee5a6f);
    /* Cambiar #ff6b6b a otro color */
}
```

### Cambiar velocidad (cada X segundos)
Archivo: `script.js`
```javascript
setInterval(() => {
    actualizarUI(obtenerDatos());
}, 2000);  // 2000 = 2 segundos (cambiar número)
```

### Cambiar límites de estado
Archivo: `script.js`
```javascript
function getStatus(percentage) {
    if (percentage < 50) return { ... };    // Cambiar 50
    if (percentage < 75) return { ... };    // Cambiar 75
}
```

### Agregar más tarjetas
Archivo: `index.html`

Copiar un `<div class="card">` y cambiar:
- Icono emoji
- Título
- IDs (cpuBar → tuBar, etc)

Archivo: `styles.css`

Añadir color:
```css
.tumetrica .progress-fill {
    background: linear-gradient(90deg, #color1, #color2);
}
```

Archivo: `script.js`

Añadir variable y lógica como las otras.

---

## 🧠 Conceptos Básicos

### Variables
```javascript
let x = 85;     // Número
let x = "texto"; // Texto  
let x = true;   // Booleano
let x = [1,2,3]; // Array
```

### Funciones
```javascript
function hacerAlgo(parámetro) {
    return resultado;
}

hacerAlgo(5);  // Llama función
```

### Arrays
```javascript
let arr = [1, 2, 3];
arr.push(4);    // Añade → [1, 2, 3, 4]
arr.shift();    // Elimina primero → [2, 3, 4]
arr.length;     // Cantidad: 3
```

### Objetos
```javascript
let obj = { cpu: 85, mem: 42 };
obj.cpu;        // 85
obj['mem'];     // 42
```

---

## 📊 El Gráfico (Canvas)

**¿Cómo dibuja?**

```javascript
ctx.beginPath();              // Comienza dibujo
for cada punto en historial:
    ctx.moveTo(x1, y1);       // Mueve punto
    ctx.lineTo(x2, y2);       // Dibuja línea
ctx.stroke();                 // Finaliza
```

**Visual:**
```
100% ┌────────────────
     │  /\
50%  │ /  \    /\
     │/      \/  \
0%   └──────────────
```

---

## 🌐 Responsive (Pantallas)

El grid se adapta automáticamente:

```
Escritorio (1200px):  [Card][Card][Card][Card]
Tablet (768px):       [Card][Card]
                      [Card][Card]
Móvil (480px):        [Card]
                      [Card]
                      [Card]
                      [Card]
```

---

## ⏱️ Cronograma de Eventos

```
0ms:      Usuario abre página
1ms:      HTML se carga
2ms:      CSS se carga
3ms:      JavaScript se carga
100ms:    Página lista
200ms:    window.addEventListener('load')
201ms:    iniciarMonitor() activa
2201ms:   Primera actualización (cada 2 segundos)
4201ms:   Segunda actualización
...
∞:        Sigue actualizando
```

---

## 📱 Vocabulario HTML-CSS-JS

| Término | Ejemplo | Uso |
|---------|---------|-----|
| **Elemento** | `<div>` | Estructura |
| **Atributo** | `class="card"` | Propiedades del elemento |
| **Clase CSS** | `.card { }` | Estilos |
| **ID** | `id="cpuBar"` | Identificar elementos únicos |
| **Método DOM** | `getElementById()` | Acceder a elementos |
| **Propiedad** | `style.width` | Cambiar estilos |
| **Evento** | `onclick` | Interacción del usuario |

---

## 🐛 Si Algo No Funciona

1. **Abre consola** (F12)
2. **Busca errores** (líneas rojas)
3. **Verifica paths** de archivos
4. **Recarga página** (Ctrl+R)
5. **Abre en navegador moderno** (Chrome, Firefox)

---

## 🎓 Pasos para Aprender

1. **Entiende**: Lee [README.md](README.md)
2. **Observa**: Abre en navegador
3. **Modifica**: Cambia un color
4. **Prueba**: Recarga página
5. **Aprende**: Consulta documentación específica

---

## 🔗 Enlaces Útiles

- [README.md](README.md) - Descripción completa
- [DOCUMENTACION_HTML.md](DOCUMENTACION_HTML.md) - Estructura
- [DOCUMENTACION_CSS.md](DOCUMENTACION_CSS.md) - Estilos
- [DOCUMENTACION_JAVASCRIPT.md](DOCUMENTACION_JAVASCRIPT.md) - Lógica
- [INDICE.md](INDICE.md) - Índice de todo

---

## 💡 Tips

✅ **Usa Ctrl+F** para buscar en documentación
✅ **Abre consola** para debuggear
✅ **Cambia cosas** y observa resultados
✅ **Lee comentarios** en el código
✅ **Consulta documentación** cuando dudes

---

## ❌ Errores Comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Página en blanco | CSS/JS no carga | Verificar rutas |
| Nada se actualiza | JS error | Ver consola (F12) |
| Gráfico vacío | Canvas problema | Verificar datos |
| Botones no funcionan | onclick mal | Verificar nombres funciones |

---

## 📊 Tamaño de Archivos

| Archivo | Tamaño | Tipo |
|---------|--------|------|
| index.html | ~3 KB | Ligero |
| styles.css | ~4 KB | Ligero |
| script.js | ~3 KB | Ligero |
| **TOTAL** | **~10 KB** | Muy rápido |

---

## 🚀 Próximos Pasos

1. **Abre index.html**
2. **Lee README.md**
3. **Cambia un color**
4. **Agrega un comentario en código**
5. **Consulta documentación específica**

---

## 📚 Recursos Externos

- [MDN Web Docs](https://developer.mozilla.org/) - Referencia
- [W3Schools](https://www.w3schools.com/) - Tutoriales
- [Can I Use](https://caniuse.com/) - Compatibilidad

---

**¿Necesitas más ayuda?**

→ Consulta el documento específico (HTML/CSS/JS)
→ O revisa el [INDICE.md](INDICE.md)

**¡Bienvenido a la programación web!** 🎉

---

*Última actualización: 1 septiembre 2026*
