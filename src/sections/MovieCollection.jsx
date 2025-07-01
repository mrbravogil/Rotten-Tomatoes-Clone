import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moviesData from '../data/movies';

function MovieCollection() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const results = moviesData.map((movie) => ({
      title: movie.title || 'Sin título',
      image: movie.image || '',
    }));

    setMovies(results);
    setLoading(false);
  }, []);

  return (
    
    <div className="w-full mx-auto flex flex-col items-center justify-center text-gray-800">
      <div className="">
        <div className="flex justify-between items-center font-semibold">
          <p className="text-xl py-10 px-5">Latest Movies</p>
          <Link to="/movies" className="text-blue-700 hover:underline">VIEW ALL</Link> 
        </div>

        {loading ? (
          <p className=" h-32">Loading...</p>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {movies.slice(0, 5).map((movie, index) => (
              <div key={index} className="p-4 rounded-xl transition transform hover:shadow-lg hover:cursor-pointer">
                {movie.image ? (
                  <img
                    src={movie.image}
                    loading="lazy"
                    alt={movie.title}
                    className="w-full h-[90%] object-cover shadow-md rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-auto flex items-center justify-center">
                    <span className="text-gray-400">Sin imagen</span>
                  </div>
                )}
                <h2 className="mt-5 text-md font-bold">{movie.title}</h2>
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

export default MovieCollection;



