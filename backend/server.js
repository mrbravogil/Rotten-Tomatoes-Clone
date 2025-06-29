import cors from 'cors';
import express from 'express';
import moviesRoutes from './routes/movies.js';
import tvShowsRoutes from './routes/tvshows.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', moviesRoutes);
app.use('/api', tvShowsRoutes); 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
