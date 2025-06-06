import React from "react";
import Logo from "./Logo";

/**
 * Componente Navbar
 * Barra de navegación superior fija para toda la aplicación.
 */
const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-8 py-4 bg-mousiteca-dark shadow-md fixed top-0 left-0 z-50">
    {/* Logo a la izquierda */}
    <div className="flex items-center">
       {/* Título de la página */}
       <Logo type="logoPequeño" alt="Logo de Mousiteca" className="h-10 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#5277ae]"></Logo>
    </div>
    {/* Navegación (puedes agregar más enlaces aquí) */}
    <div className="flex gap-6">
      <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Colección</a>
      {/* <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Otra sección</a> */}
    </div>
  </nav>
);

export default Navbar;