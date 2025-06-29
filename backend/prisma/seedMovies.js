import { PrismaClient } from '@prisma/client';
import movies from './data/movies.js';

const prisma = new PrismaClient();

export async function seedMovies() {
  console.log('🌱 Seeding movies...');

  for (const movie of movies) {
    const { genres, ...movieData } = movie;

    // Crea o conecta los géneros
    const genreConnections = genres.map(async (genre) => {
      const existingGenre = await prisma.genre.upsert({
        where: { name: genre },
        update: {},
        create: { name: genre },
      });
      return { id: existingGenre.id };
    });

    await prisma.movie.create({
      data: {
        ...movieData,
        genres: {
          create: await Promise.all(
            genreConnections.map(async (connection) => ({
              genre: connection,
            }))
          ),
        },
      },
    });
  }

  console.log('✅ Movies seeded!');
}

// Permite ejecutar este archivo directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  seedMovies()
    .catch((e) => {
      console.error('❌ Error during seeding movies:', e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}