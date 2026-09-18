/*
╔════════════════════════════════════════════════════════════╗
║         LÓGICA JAVASCRIPT - Monitor de Sistema            ║
║  Funciones que controlan el comportamiento de la página   ║
║  Maneja datos, actualizaciones y gráficos dinámicos       ║
╚════════════════════════════════════════════════════════════╝
*/

/* ============================================================
   VARIABLES GLOBALES
   Accesibles desde cualquier función en el archivo
   ============================================================ */

/**
 * Controla si el monitor está activo (en ejecución)
 * true = monitor ejecutándose
 * false = monitor pausado
 * @type {boolean}
 */
let monitorActive = false;

/**
 * Historial de valores de CPU
 * Mantiene máximo 12 registros (últimas 12 mediciones)
 * @type {array}
 */
let cpuHistory = [];

/**
 * Historial de valores de Memoria RAM
 * @type {array}
 */
let memoryHistory = [];

/**
 * Historial de valores de Disco Duro
 * @type {array}
 */
let diskHistory = [];

/**
 * Etiquetas de tiempo para el gráfico
 * Almacena la hora de cada medición
 * @type {array}
 */
let timeLabels = [];

/* ============================================================
   FUNCIÓN: obtenerDatos()
   Genera datos simulados del sistema
   ============================================================ */

/**
 * Obtiene (simula) los datos actuales del sistema
 * En un proyecto real, estos datos vendrían de un servidor
 * 
 * @returns {object} Objeto con 4 propiedades:
 *   - cpu: número 0-100 (porcentaje de CPU)
 *   - memory: número 0-100 (porcentaje de memoria)
 *   - disk: número 0-100 (porcentaje de disco)
 *   - network: número 0-100 (porcentaje de red)
 */
function obtenerDatos() {
    return {
        // CPU: número aleatorio entre 0 y 100
        cpu: Math.floor(Math.random() * 100),
        
        // Memoria: número aleatorio entre 0 y 100
        memory: Math.floor(Math.random() * 100),
        
        // Disco: número aleatorio entre 0 y 100
        disk: Math.floor(Math.random() * 100),
        
        // Red: número aleatorio entre 0 y 100
        network: Math.floor(Math.random() * 100)
    };
}

/* ============================================================
   FUNCIÓN: getStatus()
   Determina el estado según el porcentaje
   ============================================================ */

/**
 * Devuelve el estado (Óptimo/Advertencia/Crítico) 
 * basado en el porcentaje de uso
 * 
 * @param {number} percentage - Valor de 0 a 100
 * @returns {object} Objeto con:
 *   - text: "Óptimo", "Advertencia" o "Crítico"
 *   - class: "good", "warning" o "critical" (para CSS)
 */
function getStatus(percentage) {
    // Si menor que 50%: Estado ÓPTIMO (verde)
    if (percentage < 50) {
        return { text: 'Óptimo', class: 'good' };
    }
    
    // Si menor que 75%: Estado ADVERTENCIA (amarillo)
    if (percentage < 75) {
        return { text: 'Advertencia', class: 'warning' };
    }
    
    // Si 75% o más: Estado CRÍTICO (rojo)
    return { text: 'Crítico', class: 'critical' };
}

/* ============================================================
   FUNCIÓN: actualizarUI()
   Actualiza todos los elementos visuales de la interfaz
   ============================================================ */

/**
 * Actualiza la interfaz con los datos más recientes
 * Modifica:
 * - Barras de progreso (width)
 * - Valores numéricos
 * - Estados (colores)
 * - Historial de datos
 * - Canvas del gráfico
 * 
 * @param {object} datos - Objeto con propiedades cpu, memory, disk, network
 */
function actualizarUI(datos) {
    // Obtiene la fecha y hora actual
    const ahora = new Date();
    
    // Formatea la hora y actualiza el elemento timestamp
    document.getElementById('timestamp').textContent = 
        ahora.toLocaleTimeString('es-ES');
    
    /* ---- ACTUALIZAR CPU ---- */
    
    // Actualizar barra de progreso (ancho%)
    document.getElementById('cpuBar').style.width = datos.cpu + '%';
    
    // Actualizar valor numérico (ej: "85%")
    document.getElementById('cpuValue').textContent = datos.cpu + '%';
    
    // Obtener estado (Óptimo/Advertencia/Crítico)
    let statusCPU = getStatus(datos.cpu);
    
    // Obtener elemento del DOM
    let elementCPU = document.getElementById('cpuStatus');
    
    // Actualizar texto del estado
    elementCPU.textContent = statusCPU.text;
    
    // Actualizar clase CSS para cambiar el color
    elementCPU.className = 'status ' + statusCPU.class;
    
    // Actualizar atributo ARIA para accesibilidad
    document.querySelector('[aria-label="Monitor de CPU"]')
        .querySelector('[role="progressbar"]')
        .setAttribute('aria-valuenow', datos.cpu);

    /* ---- ACTUALIZAR MEMORIA ---- */
    
    document.getElementById('memoryBar').style.width = datos.memory + '%';
    document.getElementById('memoryValue').textContent = datos.memory + '%';
    
    let statusMemory = getStatus(datos.memory);
    let elementMemory = document.getElementById('memoryStatus');
    elementMemory.textContent = statusMemory.text;
    elementMemory.className = 'status ' + statusMemory.class;
    
    document.querySelector('[aria-label="Monitor de Memoria RAM"]')
        .querySelector('[role="progressbar"]')
        .setAttribute('aria-valuenow', datos.memory);

    /* ---- ACTUALIZAR DISCO ---- */
    
    document.getElementById('diskBar').style.width = datos.disk + '%';
    document.getElementById('diskValue').textContent = datos.disk + '%';
    
    let statusDisk = getStatus(datos.disk);
    let elementDisk = document.getElementById('diskStatus');
    elementDisk.textContent = statusDisk.text;
    elementDisk.className = 'status ' + statusDisk.class;
    
    document.querySelector('[aria-label="Monitor de Disco Duro"]')
        .querySelector('[role="progressbar"]')
        .setAttribute('aria-valuenow', datos.disk);

    /* ---- ACTUALIZAR RED ---- */
    
    document.getElementById('networkBar').style.width = datos.network + '%';
    document.getElementById('networkValue').textContent = datos.network + '%';
    
    let statusNetwork = getStatus(datos.network);
    let elementNetwork = document.getElementById('networkStatus');
    elementNetwork.textContent = statusNetwork.text;
    elementNetwork.className = 'status ' + statusNetwork.class;
    
    document.querySelector('[aria-label="Monitor de Conexión de Red"]')
        .querySelector('[role="progressbar"]')
        .setAttribute('aria-valuenow', datos.network);

    /* ---- GUARDAR EN HISTORIAL ---- */
    
    // Añadir nuevos valores al final del historial
    cpuHistory.push(datos.cpu);
    memoryHistory.push(datos.memory);
    diskHistory.push(datos.disk);
    
    // Añadir etiqueta de tiempo
    timeLabels.push(
        ahora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    );

    // Mantener solo los últimos 12 registros (para no usar demasiada memoria)
    if (cpuHistory.length > 12) {
        cpuHistory.shift();       // Elimina el primer elemento
        memoryHistory.shift();
        diskHistory.shift();
        timeLabels.shift();
    }

    // Redibujar el gráfico con nuevos datos
    dibujarGrafico();
}

/* ============================================================
   FUNCIÓN: dibujarGrafico()
   Dibuja el gráfico dinámico usando Canvas API
   ============================================================ */

/**
 * Dibuja un gráfico de línea mostrando el histórico de CPU
 * Utiliza HTML5 Canvas para dibujar manualmente
 * 
 * El gráfico incluye:
 * - Fondo blanco
 * - Ejes (líneas grises)
 * - Línea roja con los valores de CPU
 * - Etiqueta "CPU"
 */
function dibujarGrafico() {
    // Obtener el elemento canvas del HTML
    const canvas = document.getElementById('myChart');
    
    // Obtener contexto 2D (permite dibujar)
    const ctx = canvas.getContext('2d');

    /* ---- LIMPIAR CANVAS ---- */
    
    // Color de relleno: blanco
    ctx.fillStyle = 'white';
    
    // Dibuja un rectángulo blanco que cubre todo el canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    /* ---- DIBUJAR EJES ---- */
    
    // Color de línea: gris
    ctx.strokeStyle = '#ddd';
    
    // Grosor de línea: 1 píxel
    ctx.lineWidth = 1;
    
    // Comienza una nueva ruta de dibujo
    ctx.beginPath();
    
    // Línea vertical (eje Y): de arriba a abajo
    ctx.moveTo(40, 20);                          // Punto inicial
    ctx.lineTo(40, canvas.height - 40);          // Punto final
    
    // Línea horizontal (eje X): de izquierda a derecha
    ctx.lineTo(canvas.width - 20, canvas.height - 40);
    
    // Dibuja las líneas
    ctx.stroke();

    /* ---- DIBUJAR LÍNEA DE CPU ---- */
    
    // Color de línea: rojo
    ctx.strokeStyle = '#ff6b6b';
    
    // Grosor de línea: 2 píxeles
    ctx.lineWidth = 2;
    
    // Comienza nueva ruta
    ctx.beginPath();
    
    // Itera sobre todos los puntos del historial de CPU
    for (let i = 0; i < cpuHistory.length; i++) {
        // Calcula la posición X (distribuida horizontalmente)
        const x = 40 + (i / (cpuHistory.length - 1 || 1)) * (canvas.width - 60);
        
        // Calcula la posición Y (basada en el valor de CPU)
        // cpuHistory[i] / 100 = proporción (0 a 1)
        // Multiplicado por altura disponible
        const y = canvas.height - 40 - (cpuHistory[i] / 100) * (canvas.height - 60);
        
        // Primer punto: solo se mueve (no dibuja línea)
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            // Puntos siguientes: dibuja línea conectando
            ctx.lineTo(x, y);
        }
    }
    
    // Dibuja la línea conectando todos los puntos
    ctx.stroke();

    /* ---- ETIQUETA ---- */
    
    // Color de relleno: rojo (coincide con línea)
    ctx.fillStyle = '#ff6b6b';
    
    // Fuente: 12px Arial
    ctx.font = '12px Arial';
    
    // Dibuja el texto "CPU" en posición (10, 30)
    ctx.fillText('CPU', 10, 30);
}

/* ============================================================
   FUNCIÓN: iniciarMonitor()
   Inicia la monitorización automática
   ============================================================ */

/**
 * Comienza el monitoreo del sistema
 * Configura un intervalo que actualiza datos cada 2 segundos
 * 
 * Previene duplicados verificando si ya está activo
 */
function iniciarMonitor() {
    // Mensaje cuando se inicia el monitor
    console.log("✅ Monitor iniciado - Monitorización en progreso");
    
    // Si ya está activo, evita crear otro setInterval duplicado
    if (monitorActive) return;
    
    // Marca el monitor como activo
    monitorActive = true;
    
    // setInterval ejecuta una función repetidamente cada X milisegundos
    // 2000ms = 2 segundos
    const intervalo = setInterval(() => {
        // Si el monitor se ha pausado, detén este intervalo
        if (!monitorActive) {
            // Limpia el intervalo (detiene la repetición)
            clearInterval(intervalo);
            return;
        }
        
        // Actualiza la interfaz con nuevos datos
        // obtenerDatos() genera números aleatorios (simula sistema)
        actualizarUI(obtenerDatos());
        
    }, 2000);  // Cada 2000 milisegundos
}

/* ============================================================
   FUNCIÓN: detenerMonitor()
   Pausa la monitorización
   ============================================================ */

/**
 * Detiene la monitorización
 * Cambia monitorActive a false, lo que causa que
 * el setInterval se limpie en el próximo ciclo
 */
function detenerMonitor() {
    // Mensaje cuando se pausa el monitor
    console.log("⏸️ Monitor pausado - Monitorización detenida");
    
    // Cambia estado a inactivo
    monitorActive = false;
    
    // En el próximo ciclo del setInterval, se detectará esto
    // y se limpiar el intervalo automáticamente
}

/* ============================================================
   FUNCIÓN: limpiarDatos()
   Borra todos los datos y reinicia la interfaz
   ============================================================ */

/**
 * Reinicia la aplicación:
 * - Vacía los arrays de historial
 * - Resetea todos los valores a 0%
 * - Limpia el gráfico
 */
function limpiarDatos() {
    // Mensaje cuando se limpian los datos
    console.log("🔄 Datos reiniciados - Todos los valores reseteados a 0%");
    
    // Vacía todos los historiales (= [])
    cpuHistory = [];
    memoryHistory = [];
    diskHistory = [];
    timeLabels = [];
    
    // Reinicia valores de CPU a 0%
    document.getElementById('cpuValue').textContent = '0%';
    
    // Reinicia valores de Memoria a 0%
    document.getElementById('memoryValue').textContent = '0%';
    
    // Reinicia valores de Disco a 0%
    document.getElementById('diskValue').textContent = '0%';
    
    // Reinicia valores de Red a 0%
    document.getElementById('networkValue').textContent = '0%';
    
    // Al siguiente ciclo, dibujarGrafico() verá arrays vacíos
    // y dibujará un gráfico limpio
}

/* ============================================================
   FUNCIÓN: ejercicio()
   Ejecuta un ejercicio o tarea específica
   ============================================================ */

/**
 * Función personalizada para ejecutar un ejercicio
 * Obtiene nombre y edad del usuario interactivamente
 */
function ejercicio() {
    // Solicita nombre al usuario
    const nombre = prompt("Ingrese su nombre:");
    
    // Solicita edad al usuario
    const edad = prompt("Ingrese su edad:");
    
    // Construye mensaje personalizado
    const mensaje = "Hola " + nombre + ", tienes " + edad + " anos.";
    
    // Muestra en consola
    console.log(mensaje);
    
    // Muestra alert al usuario
    alert(mensaje);
}

/* ============================================================
   EVENT LISTENER: window 'load'
   Se ejecuta cuando la página ha cargado completamente
   ============================================================ */

/**
 * Espera a que la página se cargue completamente
 * Luego inicia automáticamente el monitor
 * 
 * 'load' = evento que se dispara cuando:
 *   - HTML está procesado
 *   - CSS está cargado
 *   - Imágenes están descargadas
 *   - Todo el contenido está listo
 */
window.addEventListener('load', () => {
    // Llamada a la función para iniciar el monitor
    iniciarMonitor();
    
    /* ============================================================
       AGREGAR EVENT LISTENERS A LOS BOTONES
       ============================================================ */
    
    // Evento para botón Ejercicio
    const botonEjercicio = document.querySelector('button[onclick="ejercicio()"]');
    if (botonEjercicio) {
        botonEjercicio.addEventListener('click', () => {
            console.log("Botón Ejercicio presionado");
        });
    }
    
    // Evento para botón Iniciar Monitor (adicional a console.log)
    const botonIniciar = document.querySelector('button[onclick="iniciarMonitor()"]');
    if (botonIniciar) {
        botonIniciar.addEventListener('click', () => {
            console.log("✅ Monitor iniciado - Monitorización en progreso");
        });
    }
    
    // Evento para botón Pausar (adicional a console.log)
    const botonPausar = document.querySelector('button[onclick="detenerMonitor()"]');
    if (botonPausar) {
        botonPausar.addEventListener('click', () => {
            console.log("⏸️ Monitor pausado - Monitorización detenida");
        });
    }
    
    // Evento para botón Reiniciar (adicional a console.log)
    const botonReiniciar = document.querySelector('button[onclick="limpiarDatos()"]');
    if (botonReiniciar) {
        botonReiniciar.addEventListener('click', () => {
            console.log("🔄 Datos reiniciados - Todos los valores reseteados a 0%");
        });
    }
});
