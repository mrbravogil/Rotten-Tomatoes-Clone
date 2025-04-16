import React from 'react'

function NotFound() {
  return (
    <div className="w-[80%] bg-white  p-7 mx-auto items-center justify-center gap-5">
      {/* Movie List*/}
      <div className="pt-10">
        <div className="flex flex-col items-center justify-center mb-5 text-gray-900 font-bold p-30 gap-6">
            <h1 className='text-9xl'>404</h1>
            <p className="text-xl">Page not found</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound