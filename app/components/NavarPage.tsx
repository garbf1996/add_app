"use client";

export const NavarPage = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow text-centert'>
          <span className='block mt-4 lg:inline-block lg:mt-0    mr-4'>
            <h1
              className='
            text-2xl text-center font-bold 
            inline-block  overflow-hidden align-middle  
            
            '
            >
              Nivel de gasolina:
            </h1>
          </span>

          <div className='block mt-4 lg:inline-block lg:mt-0 bg-red-500 text-teal-200 hover:text-white mr-4 rounded-full py-2 px-4'>
            0%
          </div>
          <div className='block mt-4 lg:inline-block lg:mt-0 bg-yellow-500 text-teal-200 hover:text-white mr-4 rounded-full py-2 px-4'>
            50%
          </div>
          <div className='block mt-4 lg:inline-block lg:mt-0 bg-green-600 text-teal-200 hover:text-white mr-4 rounded-full py-2 px-4'>
            100%
          </div>
          <span className='block mt-4 lg:inline-block lg:mt-0    mr-4'>
            <h1
              className='
              text-2xl
              text-center
              font-bold
              inline-block
              overflow-hidden
              align-middle'
            >
              / Nivel de gasor:
            </h1>
          </span>
          <div className='block mt-4 lg:inline-block lg:mt-0 bg-red-500 text-teal-200 hover:text-white mr-4 rounded-full py-2 px-4'>
            0%
          </div>
          <div className='block mt-4 lg:inline-block lg:mt-0 bg-yellow-500 text-teal-200 hover:text-white mr-4 rounded-full py-2 px-4'>
            50%
          </div>
          <div className='block mt-4 lg:inline-block lg:mt-0 bg-green-600 text-teal-200 hover:text-white mr-4 rounded-full py-2 px-4'>
            100%
          </div>
        </div>
      </div>
    </nav>
  );
};
