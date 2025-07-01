import { Link } from 'react-router-dom';
import movies from '../data/movies';
import tvShows from '../data/tvShows';
import SearchBar from './SearchBar';

function Header() {
  const combinedData = [
    ...movies.map((movie) => ({ ...movie, type: 'movie' })),
    ...tvShows.map((tvShow) => ({ ...tvShow, type: 'tvShow' })),
  ];

  return (
    <header className="w-[80%] mx-auto items-center justify-center">
      {/* Top nav */}
      <div className="bg-red-600 text-white mt-10 px-10 pb-5 py-6 items-center justify-between text-nowrap grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 w-full">
          <img src="/assets/img/tomato.png" alt="Logo" className="w-10 h-auto" />
          <Link to="/">
            <img
              src="/assets/img/rotten-tomatoes.png"
              className="w-50"
              loading="lazy"
              alt="rotten-tomatoes"
            />
          </Link>
        </div>
        {/* Search bar */}
        <SearchBar
          placeholder="Search movies or TV shows..."
          data={combinedData}
          onSearch={(value) => console.log(value)} // Maneja la búsqueda aquí
          className="w-full max-w-md mx-auto"
        />
        {/* Lista de links */}
        <div className="">
          <ul className="flex items-center lg:justify-end lg:items-end gap-6 font-semibold">
            <li className="hover:underline cursor-pointer">
              <Link to="/movies">MOVIES</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/tv-shows">TV SHOWS</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="*">NEWS</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-center bg-gray-600 text-white text-sm pl-5">
        <div className="flex gap-6 m-5">
          <p className="font-semibold text-yellow-500">🔥 TRENDING ON RT</p>
          <p className="hover:underline cursor-pointer">Box Office</p>
          <p className="hover:underline cursor-pointer">Top 10 Movies</p>
          <p className="hover:underline cursor-pointer">New Releases</p>
        </div>
        <div className="flex ml-auto p-5">
          <a href="https://www.facebook.com/rottentomatoes" target="blank">
            <img src="/src/assets/img/facebook-iconwhite.png" className="w-[40%]" alt="" />
          </a>
          <a href="https://www.instagram.com/rottentomatoes/" target="blank">
            <img src="/src/assets/img/instagram-iconwhite.png" className="w-[40%]" alt="" />
          </a>
          <a href="https://www.youtube.com/user/rottentomatoes" target="blank">
            <img src="/src/assets/img/youtube-iconwhite.png" className="w-[40%]" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;