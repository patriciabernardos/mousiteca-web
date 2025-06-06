import React from "react";
import isotipo from "../assets/logos/mousiteca-ico.svg";
import logoPequeño from "../assets/logos/mousiteca-logoPequeño.svg";
import logoGrande from "../assets/logos/mousiteca-logoGrande.svg";

/**
 * Componente Logo
 * Muestra uno de los tres logotipos disponibles: mousiteca, react o vite.
 *
 * Props:
 * - type: 'mousiteca' | 'react' | 'vite' (define qué logo mostrar)
 * - className: clases CSS adicionales (opcional)
 * - alt: texto alternativo (opcional, por defecto el nombre del logo)
 */
const logos = {
  isotipo: { src: isotipo, alt: "Icono" },
  logoPequeño: { src: logoPequeño, alt: "Logo React" },
  logoGrande: { src: logoGrande, alt: "Logo Vite" },
};

const Logo = ({ type = "logoGrande", className = "", alt }) => {
  const logo = logos[type] || logos.logoGrande;
  return (
    <img
      src={logo.src}
      alt={alt || logo.alt}
      className={`logo${type === "react" ? " react" : ""} ${className}`}
    />
  );
};

export default Logo;