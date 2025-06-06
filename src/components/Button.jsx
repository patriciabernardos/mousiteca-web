import React from 'react';

/**
 * Componente Button
 * Botón reutilizable con estilos personalizados y soporte para eventos.
 *
 * Props:
 * - children: contenido del botón (texto o elementos).
 * - onClick: función a ejecutar al hacer clic.
 * - className: clases CSS adicionales para personalización (opcional).
 * - type: tipo de botón (por defecto 'button').
 */
function Button({ children, onClick, className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;