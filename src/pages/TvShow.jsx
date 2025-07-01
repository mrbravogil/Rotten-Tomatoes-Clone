import { useParams } from 'react-router-dom';

function TVShow({ tvShows }) {
  const { id } = useParams(); // Obtiene el ID de la serie desde la URL
  const tvShow = tvShows.find((tvShow) => tvShow.id === id); // Busca la serie por ID

  if (!tvShow) {
    return <p className="text-center text-lg text-gray-500 mt-10">Serie no encontrada</p>;
  }

  return (
    <div className="w-full mx-auto flex flex-col px-4 py-8 gap-10">
      <h1 className="text-3xl font-bold mb-6">{tvShow.title}</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={tvShow.image}
          alt={tvShow.title}
          className="w-full md:w-1/3 h-[50%] object-cover rounded-2xl shadow-md"
        />
        <div className="flex flex-col gap-4 text-black text-lg max-w-2xl">
          <p className="text-2xl">{tvShow.description}</p>
          <p className="">
            <strong>Year:</strong> {tvShow.startYear}
          </p>
          <p className="">
            <strong>Language:</strong> {tvShow.language}
          </p>
          <p className="">
            <strong>Country:</strong> {tvShow.country}
          </p>
          <a
            href={tvShow.trailer}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40%] bg-blue-600 text-white text-center p-2 rounded-xl font-bold hover:scale-105 transition duration-300 shadow-md hover:shadow-lg mt-4"
          >
            WATCH TRAILER
          </a>
        </div>
      </div>
    </div>
  );
}

export default TVShow;