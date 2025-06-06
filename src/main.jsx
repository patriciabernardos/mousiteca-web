import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Punto de entrada principal de la aplicación React
// Renderiza el componente App dentro del elemento con id 'root'
// React.StrictMode ayuda a detectar problemas potenciales en la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)