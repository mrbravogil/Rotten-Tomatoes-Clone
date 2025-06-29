import { PrismaClient } from '@prisma/client';
import express from 'express';

const router = express.Router();
const prisma = new PrismaClient();

// Ruta para obtener todas las series
router.get('/tvshows', async (req, res) => {
  try {
    const tvShows = await prisma.tvShow.findMany({
      include: {
        genres: {
          include: {
            genre: true,
          },
        },
      },
    });
    res.json(tvShows);
  } catch (error) {
    console.error('Error al obtener las series:', error);
    res.status(500).json({ error: 'Error al obtener las series' });
  }
});

export default router;