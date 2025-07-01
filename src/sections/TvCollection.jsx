import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tvshowData from '../data/tvShows';

function TVCollection() {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const results = tvshowData.map((tvShow) => ({
      id: tvShow.id,
      title: tvShow.title || 'Sin título',
      image: tvShow.image || '',
    }));

    setTvShows(results);
    setLoading(false);
  }, []);

  return (
    <div className='w-full mx-auto flex flex-col items-center justify-center text-gray-800 pb-20'>
      <div className="">
        <div className="flex justify-between items-center font-semibold">
          <p className="text-xl py-10 px-5">Latest in Streaming</p>
          <Link to="/tv-shows" className="text-blue-700 hover:underline">VIEW ALL</Link>
        </div>

        {loading ? (
          <p className=" h-32">Loading...</p>
        ) : tvShows.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {tvShows.slice(0, 5).map((tvShow) => (
              <Link to={`/tvShows/${tvShow.id}`} key={tvShow.id}>
              <div className="p-4 rounded-xl transition transform hover:shadow-lg hover:cursor-pointer">
                {tvShow.image ? (
                  <img
                    src={tvShow.image}
                    loading="lazy"
                    alt={tvShow.title}
                    className="w-full h-[90%] object-cover shadow-md rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-auto flex items-center justify-center">
                    <span className="text-gray-400">Sin imagen</span>
                  </div>
                )}
                <h2 className="mt-5 text-md font-bold">{tvShow.title}</h2>
              </div>
              </Link>
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



