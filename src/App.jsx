import { useState } from 'react'
import Collections from './pages/Collections'
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
      {/* Título principal de la aplicación */}
      <div className="text-3xl font-bold text-blue-500">
        ¡Hello Mousiteca!
      </div>
      {/* Renderiza el componente Collections */}
      <div className="text-l">
        <Collections />
      </div>
    </>
  )
}

export default App
