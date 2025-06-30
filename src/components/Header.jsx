import { Link } from 'react-router-dom';


function Header() {
    return (
      <header className="w-[80%] mx-auto items-center justify-center bg-gray-100">
        {/* Top nav */}
        <div className="bg-red-600 text-white mt-10 px-6 flex items-center justify-between text-nowrap">
        {/* Logo + Search */}
        <div className="flex items-center gap-2 w-full p-10">
          <img src="/assets/img/tomato.png" alt="Logo" className="w-15 h-auto ml-4" />
    
            <Link to="/">
              <img
                src="/assets/img/rotten-tomatoes.png"
                className="w-60"
                loading="lazy"
                alt="rotten-tomatoes"
              />
            </Link>

            {/* Search bar */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-full bg-gray-600 opacity-80 text-white text-sm border border-white placeholder-white"
              />
            </div>
          </div>
          <div className="ml-auto p-5">
            <ul className="flex justify-end items-end gap-6 font-semibold">
              <li className="hover:underline cursor-pointer"> <Link to="/movies">MOVIES</Link></li>
              <li className="hover:underline cursor-pointer"> <Link to="/tv-shows">TV SHOWS</Link></li>
              <li className="hover:underline cursor-pointer"> <Link to="*">NEWS</Link></li>
            </ul>
          </div>
          
  
          
        </div>
  
        {/* Bottom nav */}
        <div className="flex items-center justify-center bg-gray-600 text-white text-sm">
          <div className="flex gap-6 m-5">
          <p className="font-semibold text-yellow-500">🔥 TRENDING ON RT</p>
          <p className="hover:underline cursor-pointer">Box Office</p>
          <p className="hover:underline cursor-pointer">Top 10 Movies</p>
          <p className="hover:underline cursor-pointer">New Releases</p>
          </div>
          <div className="flex ml-auto p-5">
            <a href="https://www.facebook.com/rottentomatoes" target="blank"><img src="/src/assets/img/facebook-iconwhite.png" className="w-[40%]" alt="" /></a>
            <a href="https://www.instagram.com/rottentomatoes/" target="blank"><img src="/src/assets/img/instagram-iconwhite.png" className="w-[40%]" alt="" /></a>
            <a href="https://www.youtube.com/user/rottentomatoes" target="blank"><img src="/src/assets/img/youtube-iconwhite.png" className="w-[40%]" alt="" /></a>
          </div>
        </div>
      </header>
    );
  }
  export default Header;