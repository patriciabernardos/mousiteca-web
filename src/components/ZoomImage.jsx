import React, { useState } from "react";

/**
 * Componente ZoomImage
 * Muestra una imagen que puede ampliarse (zoom) al hacer clic.
 *
 * Props:
 * - src: URL de la imagen a mostrar.
 * - alt: Texto alternativo para la imagen.
 * - className: Clases CSS adicionales para la imagen (opcional).
 */
const ZoomImage = ({ src, alt, className = "" }) => {
  // Estado para controlar si la imagen está ampliada o no
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      {/* Imagen en miniatura, al hacer clic se amplía */}
      <img
        src={src}
        alt={alt}
        className={`transition-transform duration-300 rounded shadow-lg cursor-pointer ${className}`}
        style={{ maxWidth: "16rem" }}
        onClick={() => setZoomed(true)}
      />
      {/* Modal de zoom: se muestra cuando zoomed es true */}
      {zoomed && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: "rgba(0,0,0,0.5)", cursor: "zoom-out" }}
          // Al hacer clic fuera de la imagen, se cierra el modal
          onClick={() => setZoomed(false)}
        >
          {/* Imagen ampliada, el clic en la imagen no cierra el modal */}
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ cursor: "default" }}
          />
        </div>
      )}
    </>
  );
};

export default ZoomImage;