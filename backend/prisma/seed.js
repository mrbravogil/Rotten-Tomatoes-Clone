import { PrismaClient } from '@prisma/client';
import tvShows from './data/tvshows.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed TV Shows
  for (const tvShow of tvShows) {
    const { genres, ...tvShowData } = tvShow;

    // Crea o conecta los géneros
    const genreConnections = genres.map(async (genre) => {
      const existingGenre = await prisma.genre.upsert({
        where: { name: genre },
        update: {},
        create: { name: genre },
      });
      return { id: existingGenre.id };
    });

    await prisma.tvShow.create({
      data: {
        ...tvShowData,
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

  console.log('✅ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });