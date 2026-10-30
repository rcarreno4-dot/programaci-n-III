# Fundamentos de JavaScript y proyecto Express

## Respuestas teóricas

**1. ¿Qué es Express y para qué sirve? (30 palabras)**  
Express es un framework minimalista para Node.js que simplifica la creación de servidores web y API; organiza rutas, procesa solicitudes y respuestas, y admite middleware para ampliar funcionalidades con facilidad.

**2. Node.js y JavaScript del lado del servidor**  
**Falso.** Node.js sí permite ejecutar JavaScript en el servidor mediante el motor V8. También permite interactuar con archivos, procesos y otros recursos del sistema operativo.

**3. ¿Para qué se utiliza Node.js? Cuatro aplicaciones**  
Node.js ejecuta JavaScript fuera del navegador y se utiliza para crear API REST, chats en tiempo real, servidores de streaming y aplicaciones web backend.

**4. JavaScript y Node.js**  
**Verdadero.** JavaScript es el lenguaje y Node.js es un entorno de ejecución que permite usarlo fuera del navegador.

**5. ¿Para qué se utiliza `require`? (30 palabras)**  
require es una función de CommonJS que carga módulos integrados, archivos locales o paquetes instalados, ejecuta su código una vez, almacena el resultado en caché y devuelve sus exportaciones públicas.

**6. Dos servicios/módulos oficiales de Node.js**  
El archivo `servicios_node.js` demuestra `node:fs/promises`, que crea, escribe, lee y elimina un archivo temporal, y `node:os`, que consulta información del sistema operativo. El código incluye comentarios y muestra las entradas y salidas en consola.

**7. ¿Qué es el backend? (30 palabras)**  
El backend es la parte de una aplicación que funciona en servidores: recibe solicitudes, aplica reglas de negocio, accede a datos, autentica usuarios y responde al cliente mediante respuestas HTTP.

**8. ¿Qué es ES6? (30 palabras)**  
ES6, también llamado ECMAScript 2015, es una versión importante de JavaScript que incorporó let, const, funciones flecha, clases, módulos, template strings y mejoras para escribir código moderno, mantenible y actual.

## Ejercicios JavaScript

Todos los ejercicios se ejecutan desde esta carpeta con `node nombre-del-archivo.js`.

- `rafael_Array.js`: array tecnológico y demostraciones de `push`, `shift`, `length`, `pop` y `sort`.
- `rafael_Array_destructor.js`: asignación por destructuring y tres funciones invocadas.
- `rafael_funciones.js`: calculadora con función tradicional y funciones flecha.
- `carreño_template.js`: solicita datos básicos y muestra interpolación con template string.
- `objeto_rafael.js`: objeto de perfil personal con métodos.
- `rafael_objeto_template_funcion.js`: objeto con los datos personales proporcionados, fecha actual y tres funciones flecha.

## Servicios de Node.js: entrada y salida

Ejecuta:

```text
node servicios_node.js
```

`node:fs/promises` recibe el texto de ejemplo `Demostración de fs/promises` y lo escribe y lee desde un archivo temporal; después elimina ese archivo. La salida incluye:

```text
Texto escrito: Demostración de fs/promises
Texto leído: Demostración de fs/promises
Archivo temporal eliminado.
```

`node:os` no recibe datos de entrada: consulta el sistema en ejecución y muestra plataforma, arquitectura y memoria libre. Esos valores dependen del computador.

## Proyecto de carrito con Express

### Instalación paso a paso

1. Instala Node.js desde <https://nodejs.org/> y verifica `node --version` y `npm --version`.
2. Abre una terminal en esta carpeta.
3. Instala Express y Nodemon, declarados en `package.json`:

   ```text
   npm install
   ```

4. Inicia el servidor con reinicio automático durante el desarrollo:

   ```text
   npm run dev
   ```

   Para iniciarlo sin Nodemon, usa `npm start`. La API queda disponible en `http://localhost:3000`.
   La interfaz React está disponible en `http://localhost:3000/app`.
   Nodemon reinicia el servidor cuando guardas cambios; cada solicitud también aparece en esa terminal con su método, ruta y estado HTTP.

### Rutas disponibles

| Método | Ruta | Función |
| --- | --- | --- |
| `GET` | `/` | Mensaje de bienvenida |
| `GET` | `/app` | Interfaz React del carrito |
| `GET` | `/api/products` | Lista productos; admite `?category=alimentos`, `electrodomesticos` o `automoviles` |
| `GET` | `/api/cart` | Consulta artículos y total del carrito |
| `POST` | `/api/cart/items` | Agrega o incrementa un producto |
| `DELETE` | `/api/cart/items/:productId` | Retira un producto del carrito |
| `DELETE` | `/api/cart` | Vacía el carrito |

El carrito se mantiene en memoria y se reinicia al detener el servidor. El `POST` recibe JSON con `productId` y `quantity`, que debe ser un entero positivo.

### Demostración funcional

Con el servidor activo, ejecuta estas solicitudes en otra terminal (PowerShell):

```powershell
Invoke-RestMethod http://localhost:3000/api/products
Invoke-RestMethod -Method Post -Uri http://localhost:3000/api/cart/items -ContentType 'application/json' -Body '{"productId":"alimento-1","quantity":2}'
Invoke-RestMethod http://localhost:3000/api/cart
Invoke-RestMethod -Method Delete http://localhost:3000/api/cart
```

La segunda solicitud responde con el artículo agregado y la tercera muestra dos unidades de `Arroz (1 kg)` y su subtotal. La última vacía el carrito. También puedes ejecutar las pruebas automatizadas con `npm test`.
