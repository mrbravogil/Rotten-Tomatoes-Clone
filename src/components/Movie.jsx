export function MovieList() {
    return (
      <div className="w-[80%] bg-white p-7 mx-auto items-center justify-center gap-5 ">
        {/* Movie List*/}
        <div className="pt-10">
        <div className="flex justify-between mb-5 font-semibold">
            <p className="text-xl">Movies in Theaters</p>
            <a href="" className="text-blue-700">VIEW ALL</a>
        </div>
        {/* Tarjetas Peliculas */}
        <div className="flex flex-col gap-2">
            <img src="/src/assets/img/images.jpg" className="w-[20%] rounded-2xl" alt="" />
            <div className="flex gap-4">
            <p>94%</p> 
            <p>92%</p>
            </div>
            <p>Titulo</p>
            <button className="w-[15%] mt-4 border border-black rounded-2xl">WATCHLIST</button>
        </div>
        </div>
        {/* New to Rent*/}
        <div className="pt-10">
        <div className="flex justify-between mb-5 font-semibold">
            <p className="text-xl">New to Rent</p>
            <a href="" className="text-blue-700">VIEW ALL</a>
        </div>
        {/* Tarjetas Peliculas */}
        <div className="flex flex-col gap-2">
            <img src="/src/assets/img/images.jpg" className="w-[20%] rounded-2xl" alt="" />
            <div className="flex gap-4">
            <p>94%</p> 
            <p>92%</p>
            </div>
            <p>Titulo</p>
            <button className="w-[15%] mt-4 border border-black rounded-2xl">WATCHLIST</button>
        </div>
        </div>
      </div> 
      
    );
  }
  