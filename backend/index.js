import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

const rapidApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
  },
};

// Endpoint para películas 
app.get('/api/movies', async (req, res) => {
  const url = 'https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US';

  try {
    const response = await fetch(url, rapidApiOptions);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(' Error fetching movies:', err);
    res.status(500).json({ message: 'Error fetching movies from RapidAPI' });
  }
});

// Endpoint para series de TV
app.get('/api/tv', async (req, res) => {
  const url = 'https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US';

  try {
    const response = await fetch(url, rapidApiOptions);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(' Error fetching TV shows:', err);
    res.status(500).json({ message: 'Error fetching TV shows from RapidAPI' });
  }
});

app.listen(PORT, () => {
  console.log(` Backend running at http://localhost:${PORT}`);
});
