import { useEffect, useState } from 'react';

function TVShowList() {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/tvshows')
      .then(res => res.json())
      .then(data => {
        console.log('TV Shows obtenidas de la base de datos:', data);
        setTvShows(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener las series:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-gray-500 mt-10">Cargando series...</p>;
  }

  return (
    <div className="w-full mx-auto flex flex-col px-4 py-8 gap-10">
      <h1 className="text-3xl font-bold mb-6">Latest Tv Shows</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {tvShows.map(tvShow => (
          <div
            key={tvShow.id}
            className="bg-white flex flex-col p-5 rounded-2xl shadow-md transition transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={tvShow.image}
              alt={tvShow.title}
              className="w-full h-[90%] rounded-md"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{tvShow.title}</h2>
              <p className="text-gray-600">{tvShow.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TVShowList;
