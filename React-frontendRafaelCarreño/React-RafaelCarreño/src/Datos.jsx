{/* Datos del usuario */}
function Datos() {  
const nombre = 'Rafael Carreño'
const edad = 25
const ingeniero = 'Ingeniero de Software'   
const direccion = 'Calle 123, Ciudad, País'
const correo = 'rafael.carreno@example.com'
const telefono = '+1 234 567 890'   

return (
  <>
    <div>
      <h1>Hola, soy {nombre}</h1>
      <p>Tengo {edad} años</p>
      <p>Soy {ingeniero}</p>
      <p>Dirección: {direccion}</p>
      <p>Correo: {correo}</p>
      <p>Teléfono: {telefono}</p>
    </div>
    <div>
      <h2>Importancia de React</h2>
      <p>
        React permite crear interfaces interactivas y rápidas mediante componentes
        reutilizables. Esto facilita organizar, mantener y ampliar una aplicación web.
      </p>
      <h3>Lo más utilizado en React</h3>
      <ul>
        <li>Componentes y JSX para construir la interfaz.</li>
        <li>Props para compartir datos entre componentes.</li>
        <li>Estado y hooks, como useState y useEffect.</li>
        <li>Eventos, listas y renderizado condicional.</li>
      </ul>
    </div>
    <div>
      <h2>Agradecimiento</h2>
      <p>
        Agradezco al profesor Jhon Willian por compartir sus conocimientos y
        guiarme en el aprendizaje de React y el desarrollo web.
      </p>
    </div>
    
  </>
)   
}

export default Datos