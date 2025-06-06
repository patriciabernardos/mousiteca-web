import { useState } from 'react'
import Collections from './pages/Collections'
import Navbar from './components/Navbar'
import './App.css'

/**
 * Componente principal App
 * Renderiza el título de la aplicación y la página de colecciones musicales.
 */
function App() {
  // Estado de ejemplo (no se utiliza actualmente)
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Barra de navegación superior */}
      <Navbar />
      {/* Espacio superior para que el contenido no quede oculto bajo el navbar fijo */}
      <div className="pt-20 text-l">
        <Collections />
      </div>
    </>
  )
}

export default App
