import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TVCollection() {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/tvshows') // Llama a la API de tu backend
      .then(res => res.json())
      .then(data => {
        console.log('Series obtenidas de la base de datos:', data);

        // Mapea los datos obtenidos de la base de datos
        const results = data.map(tvShow => ({
          title: tvShow.title || 'Sin título',
          image: tvShow.image || '',
        }));

        setTvShows(results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al obtener las series:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className='w-full mx-auto flex flex-col items-center justify-center text-gray-800 pb-20'>
      <div className="">
        <div className="flex justify-between font-semibold">
          <p className="text-xl py-10 px-5">Latest in Streaming</p>
          <Link to="/tv-shows" className="text-blue-700 hover:underline">VIEW ALL</Link>
        </div>

        {loading ? (
          <p className=" h-32">Loading...</p>
        ) : tvShows.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {tvShows.slice(0, 5).map((tvShow, index) => (
              <div key={index} className="p-4 rounded-lg transition transform hover:scale-105 hover:shadow-lg">
                {tvShow.image ? (
                  <img
                    src={tvShow.image}
                    loading="lazy"
                    alt={tvShow.title}
                    className="w-full h-full object-cover shadow-md rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-auto flex items-center justify-center">
                    <span className="text-gray-400">Sin imagen</span>
                  </div>
                )}
                <h2 className="mt-5 text-md font-bold">{tvShow.title}</h2>
              </div>
            ))}
          </div>
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
}

export default TVCollection;



