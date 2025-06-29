import MovieCollection from '../sections/MovieCollection';
import TVCollection from '../sections/TvCollection';

export default function Home() {
  return (
    <div className=' flex flex-col gap-20'>
      <MovieCollection />
      <TVCollection />
    </div>
  );
}
