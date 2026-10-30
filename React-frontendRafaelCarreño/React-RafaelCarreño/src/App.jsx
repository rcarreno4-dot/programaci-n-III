import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Datos from './Datos.jsx'

function App() {
  const [count, setCount] = useState(0)
  {/* creacion de variable para el nombre */}
  const nombre = 'Rafael Carreño'
  const edad = 25
  const ingeniero = 'Ingeniero de Software'

  return (
    <>
    <div>
     <h1>Hola, soy {ingeniero}</h1>
     <p>Bienvenido a mi React App</p>
    </div>
    <div>
    <h1>Hola, soy {nombre}</h1>
     <p>Tengo {edad} años</p>
    </div>  
    <Datos />
    </>
    
  )
}

export default App
