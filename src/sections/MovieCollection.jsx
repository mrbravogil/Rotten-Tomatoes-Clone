import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const url = 'https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

function MovieCollection() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies', options)
      .then(res => res.json())
      .then(data => {
        console.log('Respuesta de películas populares:', data);
  
        const edges = data?.data?.movies?.edges || []; // ⚠️ esto es clave
  
        const results = edges.map(edge => {
          const node = edge.node || {};
          return {
            title: node.titleText?.text || 'Sin título',
            image: node.primaryImage?.url || '',
          };
        });

        setMovies(results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al hacer fetch:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-[80%] bg-white mx-auto items-center justify-center text-gray-800">
      {/* Movie List*/}
      <div className="p-7">
        <div className="mt-10 flex justify-between font-semibold">
            <p className="text-xl">Movies in Theaters</p>
            <Link to="/movies" className='text-blue-700 hover:underline'>VIEW ALL</Link>
        </div>

      {loading ? (
        <p className="h-32">Loading...</p>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
            {movies.slice(0, 5).map((movie, index) => (
              <div key={index} className="p-4">
              {movie.image ? (
                <img
                  src={movie.image}
                  loading="lazy"
                  alt={movie.title}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full h-auto flex items-center justify-center">
                  <span className="text-gray-400">Sin imagen</span>
                </div>
              )}
              <h2 className="mt-5 text-md font-normal">{movie.title}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="">No se encontraron resultados.</p>
      )}
    </div>
    </div>
  );
}

export default MovieCollection;



