import { useEffect, useState } from 'react';
import CollectionActions from '../components/CollectionActions';
import ZoomImage from '../components/ZoomImage';
import Modal from '../components/Modal'; // Asegúrate de tener este componente

/**
 * Página Collections
 * Muestra la colección musical del usuario obtenida desde la API.
 * Permite ver, editar o eliminar cada elemento de la colección.
 */
function Collections() {
  // Estado para almacenar la lista de colecciones
  const [collections, setCollections] = useState([]);
  // Estado para el álbum seleccionado (para el modal)
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  // Efecto para cargar las colecciones al montar el componente
  useEffect(() => {
    fetch('http://localhost:5000/api/collections')
      .then(res => res.json())
      .then(data => setCollections(data))
      .catch(err => console.error(err));
  }, []);

  // Función para abrir el modal con los detalles del álbum
  const handleView = (item) => {
    setSelectedAlbum(item);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  return (
    // Contenedor principal con padding y centrado
    <div className='p-10 flex flex-col items-center'>
      {/* Título de la página */}
      <h2 className='md:font-bold'>Mi Colección Musical</h2>
      {/* Lista de colecciones */}
      <ul className='w-[40em] p-[2em] gap-2'>
        {collections.map(item => (
          // Cada elemento de la colección
          <li key={item.collection_id} className='flex flex-row-reverse pt-[1em]'>
            {/* Información del álbum */}
            <div className="w-64 flex-1 flex flex-col justify-center">
              <h2>{item.album_title} - {item.artist_name}</h2>
              <p>Año: {item.release_year} | Género: {item.genre}</p>
              <p>Formato: {item.format_name} | Estado: {item.condition}</p>
              <p>Notas: {item.notes}</p>
              {/* Acciones: Ver, Editar, Eliminar */}
              <div className="mt-2">
                <CollectionActions
                  onView={() => handleView(item)}
                  onEdit={() => alert(`Editar ${item.album_title}`)}
                  onDelete={() => alert(`Eliminar ${item.album_title}`)}
                />
              </div>
            </div>
            {/* Imagen del álbum con zoom */}
            <ZoomImage src={item.cover_image_url} alt={item.album_title} />
          </li>
        ))}
      </ul>

      {/* Modal para ver detalles del álbum */}
      <Modal open={!!selectedAlbum} onClose={handleCloseModal} title={selectedAlbum?.album_title}>
        {selectedAlbum && (
          <div>
            <p><strong>Artista:</strong> {selectedAlbum.artist_name}</p>
            <p><strong>Año:</strong> {selectedAlbum.release_year}</p>
            <p><strong>Género:</strong> {selectedAlbum.genre}</p>
            <p><strong>Formato:</strong> {selectedAlbum.format_name}</p>
            <p><strong>Estado:</strong> {selectedAlbum.condition}</p>
            <p><strong>Notas:</strong> {selectedAlbum.notes}</p>
            <img
              src={selectedAlbum.cover_image_url}
              alt={selectedAlbum.album_title}
              className="mt-4 w-full rounded"
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Collections;