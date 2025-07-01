import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tvShowsData from '../data/tvShows';

function TVShowList() {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTvShows(tvShowsData);
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-gray-500 mt-10">Cargando series...</p>;
  }

  return (
    <div className="w-full mx-auto flex flex-col px-4 py-8 gap-10">
      <h1 className="text-3xl font-bold mb-6">Latest TV Shows</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {tvShows.map(tvShow => (
          <Link to={`/tv-shows/${tvShow.id}`} key={tvShow.id}>
            <div className="bg-white flex flex-col p-5 rounded-2xl shadow-md transition transform hover:scale-105 hover:shadow-lg hover:cursor-pointer">
              <img
                src={tvShow.image}
                alt={tvShow.title}
                className="w-full h-[90%] object-cover rounded-md"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{tvShow.title}</h2>
                <p className="text-gray-600">{tvShow.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TVShowList;
