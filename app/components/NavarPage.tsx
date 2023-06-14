"use client";

export const NavarPage = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-sky-500/100 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <svg
          fill='none'
          height={50}
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
          ></path>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          ></path>
        </svg>
        <span className='font-semibold text-xl tracking-tight'>Grupo Azar</span>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Usuario
          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Mantenimiento
          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
          >
            Consulta
          </a>
        </div>
        <div>
          <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>
            <svg
              fill='none'
              stroke='currentColor'
              height={30}
              stroke-width='1.5'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
