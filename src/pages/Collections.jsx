import { useEffect, useState } from 'react';

function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/collections')
      .then(res => res.json())
      .then(data => setCollections(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='p-10 flex flex-col items-center'>
      <h2 className='md:font-bold'>Mi Colección Musical</h2>
      <ul className='w-[40em] p-[2em] gap-2'>
        {collections.map(item => (
          <li key={item.collection_id} className='flex flex-row-reverse pt-[1em]'>
            <div className="w-64 flex-1 flex flex-col justify-center">
                <h2>{item.album_title} - {item.artist_name}</h2>
                <p>Año: {item.release_year} | Género: {item.genre}</p>
                <p>Formato: {item.format_name} | Estado: {item.condition}</p>
                <p>Notas: {item.notes}</p>
            </div>
            <img src={item.cover_image_url} alt={item.album_title} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Collections;