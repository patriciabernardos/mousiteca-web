import React from "react";

/**
 * Componente Modal
 * Muestra un modal centrado en pantalla con fondo semitransparente.
 *
 * Props:
 * - open: booleano para mostrar u ocultar el modal.
 * - onClose: función para cerrar el modal.
 * - children: contenido a mostrar dentro del modal.
 * - title: (opcional) título del modal.
 */
const Modal = ({ open, onClose, children, title }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        {/* Título opcional */}
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        {/* Contenido del modal */}
        {children}
      </div>
    </div>
  );
};

export default Modal;