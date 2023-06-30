"use client";

import { FC, PropsWithChildren } from "react";

interface Props {
  title?: string;
}

export const SideBar: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <div id='view' className='h-full w-screen flex flex-row'>
        <button className='p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden'>
          <svg
            className='w-5 h-5 fill-current'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div
          id='sidebar'
          className='bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out'
        >
          <div className='space-y-6 md:space-y-10 mt-10'>
            <h1 className='hidden md:block font-bold text-sm md:text-xl text-center'>
              Grupo Azar<span className='text-teal-600'>.</span>
            </h1>
            <div id='profile' className='space-y-3'>
              <div>
                <h2 className='font-medium text-xs md:text-sm text-center text-teal-500'>
                  [Garber Batista]
                </h2>
                <p className='text-xs text-gray-500 text-center'>
                  [Administrador]
                </p>
              </div>
            </div>
            <div id='menu' className='flex flex-col space-y-2'>
              <button className='bg-teal-500 flex justify-start items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition duration-150 ease-in-out'>
                <svg
                  className='w-6 h-6 fill-current inline-block'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
                </svg>
                <span className='px-2'>Movimientos</span>
              </button>
              <button className='flex justify-start items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition duration-150 ease-in-out'>
                <svg
                  className='w-6 h-6 fill-current inline-block'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z'></path>
                </svg>
                <span className='px-2'>Inventario</span>
              </button>
              <button className='flex justify-start items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white  rounded-md transition duration-150 ease-in-out'>
                <svg
                  className='w-6 h-6 fill-current inline-block'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
                  <path
                    fillRule='evenodd'
                    d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='px-2'>Reportes</span>
              </button>

              <button className='flex justify-start items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white  rounded-md transition duration-150 ease-in-out'>
                <svg
                  className='w-6 h-6 fill-current inline-block'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <svg
                    className='w-6 h-6 fill-current inline-block'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'></path>
                  </svg>
                </svg>
                <span className='px-2'>Condutor</span>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full h-full bg-gray-100'>{children}</div>
      </div>
    </>
  );
};
