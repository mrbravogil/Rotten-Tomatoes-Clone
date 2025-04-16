import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(cors()); // permite que el frontend haga peticiones
const PORT = process.env.PORT || 5000;

app.get('/api/movies', async (req, res) => {
  const url = 'https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      },
    });

    const data = await response.json();
    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching from RapidAPI' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
