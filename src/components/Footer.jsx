function Footer() {
    return (
      <footer className="w-[80%] mx-auto flex flex-col items-center justify-center bg-gray-800 text-white py-5">
        
        {/* Main Footer */}
        <div className=" text-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:px-20 pb-10">
          
          {/* Help */}
          <div className="flex flex-col gap-5 m-5">
          <p className="">Help</p>
          <p className="">About Rotten Tomatoes</p>
          </div>
           {/* Careers */}
           <div className="flex flex-col gap-5 m-5">
          <p className="">Critic Submission</p>
          <p className="">Licensing</p>
          <p className="">Advertise with Us</p>
          <p className="">Careers</p>
          </div>
           {/* Newsletter */}
           <div className="flex flex-col gap-5 m-5">
          <p className="text-lg text-nowrap font-bold">JOIN THE NEWSLETTER</p>
          <p className="">Get the freshest reviews, news, and more delivered right to your inbox!</p>
          <button className="bg-blue-600 w-[80%] p-3 rounded-lg font-bold text-[85%] text-nowrap ">JOIN THE NEWSLETTER</button>
          </div>
           {/* Social Media */}
          <div className="flex flex-col gap-5 m-5 lg:pl-5">
            <h1 className="text-lg font-bold">FOLLOW US</h1>
          <div className="flex">
            <a href="https://www.facebook.com/rottentomatoes" target="blank"><img src="/assets/img/facebook-iconwhite.png" className="w-[40%]" alt="" /></a>
            <a href="https://www.instagram.com/rottentomatoes/" target="blank"><img src="/assets/img/instagram-iconwhite.png" className="w-[40%]" alt="" /></a>
            <a href="https://www.youtube.com/user/rottentomatoes" target="blank"><img src="/assets/img/youtube-iconwhite.png" className="w-[40%]" alt="" /></a>
          </div>
          </div>
            
      </div>
      {/* Secondary Footer */}
      <div className="w-full mb-5">
        <ul className="text-sm items-center justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 text-center">
          <li className="whitespace-nowrap border-r border-gray-600">Privacy Policy</li>
          <li className="whitespace-nowrap border-r border-gray-600">Terms and Policies</li>
          <li className="whitespace-nowrap border-r border-gray-600">Cookie Preferences</li>
          <li className="whitespace-nowrap border-r border-gray-600">California Notice</li>
          <li className="whitespace-nowrap border-r border-gray-600">Ad Choices</li>
          <li className="whitespace-nowrap">Accessibility</li>
        </ul>
          {/* Project Tag */}
          <p className="flex items-center justify-center text-gray-500 text-sm pt-5">Rotten Tomatoes Clone | Maria Bravo </p>
        </div>
      </footer>
    );
  }
  export default Footer;