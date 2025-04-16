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

function TVCollection() {
  const [tv, setTv] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies', options)
      .then(res => res.json())
      .then(data => {
        console.log('TV Show List:', data);
  
        const edges = data?.data?.tv?.edges || []; // ⚠️ esto es clave
  
        const results = edges.map(edge => {
          const node = edge.node || {};
          return {
            title: node.titleText?.text || 'Sin título',
            image: node.primaryImage?.url || '',
          };
        });

        setTv(results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al hacer fetch:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" w-[80%] bg-white p-7 mx-auto items-center justify-center gap-5 text-gray-800">
      {/* Movie List*/}
      <div className="">
        <div className="flex justify-between font-semibold">
            <p className="text-xl">Latest in Streaming</p>
            <Link to="/tv-shows" className="text-blue-700 hover:underline">VIEW ALL</Link>
        </div>

      {loading ? (
        <p className=" h-32" >Loading...</p>
      ) : tv.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {tv.slice(0, 5).map((tv, index) => (
            <div key={index} className="p-4">
              {tv.image ? (
                <img
                  src={tv.image}
                  loading="lazy"
                  alt={tv.title}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full h-auto flex items-center justify-center">
                  <span className="text-gray-400">Sin imagen</span>
                </div>
              )}
              <h2 className="mt-5 text-md font-normal">{tv.title}</h2>
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

export default TVCollection;



