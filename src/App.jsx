import { Route, Routes } from 'react-router-dom';
import movies from './data/movies'; // Importa los datos de películas
import tvShows from './data/tvShows'; // Importa los datos de series
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Movie from './pages/Movie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';
import TVShowList from './pages/TVShowList';
import TVShow from './pages/TvShow';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/tv-shows" element={<TVShowList />} />
        <Route path="/movies/:id" element={<Movie movies={movies} />} /> {/* Ruta para detalles de películas */}
        <Route path="/tvShows/:id" element={<TVShow tvShows={tvShows} />} /> {/* Ruta para detalles de series */}
        <Route path="/news" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
