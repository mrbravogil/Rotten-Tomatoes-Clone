import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar({ placeholder, data }) {
  const [searchText, setSearchText] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (query) => {
    setSearchText(query);

    if (query.trim() === '') {
      setFilteredResults([]); // Si no hay texto, no mostrar resultados
      return;
    }

    // Filtra los datos en función del texto ingresado
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredResults(results);
  };

  const handleResultClick = () => {
    setSearchText('');
    setFilteredResults([]);
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Barra de búsqueda */}
      <div className="flex justify-center items-center rounded-full bg-gray-600 opacity-80 text-white text-md lg:text-sm border border-white px-5 py-2 gap-5">
        <img src="/assets/img/search.png" alt="search icon" className="w-4" />
        <input
          type="text"
          placeholder={placeholder || "Search..."}
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full placeholder-white bg-transparent border-none outline-none"
        />
      </div>

      {/* Resultados desplegables */}
      {filteredResults.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-gray-600 shadow-lg rounded-lg mt-2 z-10">
          <ul className="divide-y divide-gray-200">
            {filteredResults.map((item) => (
              <li key={item.id} className="p-2 hover:bg-gray-100">
                <Link to={item.type === 'movie' ? `/movies/${item.id}` : `/tv-shows/${item.id}`} onClick={handleResultClick}>
                  <p className="text-white hover:text-black font-semibold">{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;