import { useEffect, useState } from 'react';
import CollectionActions from '../components/CollectionActions';
import ZoomImage from '../components/ZoomImage';

/**
 * Página Collections
 * Muestra la colección musical del usuario obtenida desde la API.
 * Permite ver, editar o eliminar cada elemento de la colección.
 */
function Collections() {
  // Estado para almacenar la lista de colecciones
  const [collections, setCollections] = useState([]);

  // Efecto para cargar las colecciones al montar el componente
  useEffect(() => {
    fetch('http://localhost:5000/api/collections')
      .then(res => res.json())
      .then(data => setCollections(data))
      .catch(err => console.error(err));
  }, []);

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
                  onView={() => alert(`Ver ${item.album_title}`)}
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
    </div>
  );
}

export default Collections;