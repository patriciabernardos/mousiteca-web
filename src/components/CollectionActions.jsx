// Importa el componente Button reutilizable
import Button from './Button';

/**
 * Componente CollectionActions
 * Muestra un grupo de botones para acciones sobre un elemento de la colección:
 * - Ver: Ejecuta la función onView al hacer clic.
 * - Editar: Ejecuta la función onEdit al hacer clic.
 * - Eliminar: Ejecuta la función onDelete al hacer clic.
 * 
 * Props:
 * - onView: función a ejecutar al hacer clic en "Ver"
 * - onEdit: función a ejecutar al hacer clic en "Editar"
 * - onDelete: función a ejecutar al hacer clic en "Eliminar"
 */
function CollectionActions({ onView, onEdit, onDelete }) {
  return (
    // Contenedor de los botones con espacio entre ellos y centrados
    <div className="flex gap-2 justify-center">
      {/* Botón para ver detalles */}
      <Button onClick={onView}>Ver</Button>
      {/* Botón para editar, con estilos personalizados */}
      <Button onClick={onEdit} className="bg-yellow-500 hover:bg-yellow-600">Editar</Button>
      {/* Botón para eliminar, con estilos personalizados */}
      <Button onClick={onDelete} className="bg-red-600 hover:bg-red-700">Eliminar</Button>
    </div>
  );
}

export default CollectionActions;