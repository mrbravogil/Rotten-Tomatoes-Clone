import { useEffect, useState } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then(res => res.json())
      .then(data => {
        console.log('Películas obtenidas de la base de datos:', data);
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener las películas:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-gray-500 mt-10">Cargando películas...</p>;
  }

  return (
    <div className="w-full mx-auto flex flex-col px-4 py-8 gap-10">
      <h1 className="text-3xl font-bold mb-6">Latest Movies</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="bg-white flex flex-col p-5 rounded-2xl shadow-md transition transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-[90%] rounded-md"
            />
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-gray-600">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;

