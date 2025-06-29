import { PrismaClient } from '@prisma/client';
import express from 'express';

const router = express.Router();
const prisma = new PrismaClient();

// Ruta para obtener todas las películas
router.get('/movies', async (req, res) => {
  try {
    const movies = await prisma.movie.findMany({
      include: {
        genres: {
          include: {
            genre: true,
          },
        },
      },
    });
    res.json(movies);
  } catch (error) {
    console.error('Error al obtener las películas:', error);
    res.status(500).json({ error: 'Error al obtener las películas' });
  }
});

export default router;