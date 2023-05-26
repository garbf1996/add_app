"use client";
import Image from "next/image";

import { supabase } from "../supabase/supabase";

export default function Home() {
  const ProveGoogle = async (e: any) => {
    e.preventDefault();
    try {
      const resultado = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-96 p-8 bg-white rounded shadow'>
          <h1 className='text-2xl text-center font-bold mb-4'>
            <span
              className='
              inline-block  w-12 h-12 mr-2 overflow-hidden align-middle  ring-2 ring-white'
            >
              <Image src='../login.svg' width={50} height={50} alt='login' />
            </span>
            Login
          </h1>
          <div
            className='
            w-full h-2 mb-4 bg-gradient-to-r from-blue-500  via-blue-600 to-blue-500 rounded-full mx-auto'
          ></div>
          <form>
            <div className='mb-4'>
              <label className='block mb-2 text-sm font-bold text-gray-700'>
                Email
              </label>
              <input
                type='email'
                className='w-full px-3 py-2 text-sm border border-gray-400 rounded focus:outline-none'
                placeholder='Email'
                name='email'
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-2 text-sm font-bold text-gray-700'>
                Password
              </label>
              <input
                type='password'
                className='w-full px-3 py-2 text-sm border border-gray-400 rounded focus:outline-none'
                placeholder='Password'
                name='password'
              />
            </div>
            <div className='mb-4'>
              <button className='w-full px-3 py-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none'>
                Login
              </button>
            </div>
            <div className='mb-4'>
              <div className='flex justify-center items-center'>
                <span className='w-full h-px bg-gray-400'></span>
                <span className='mx-2 text-sm text-gray-500'>OR</span>
                <span className='w-full h-px bg-gray-400'></span>
              </div>
            </div>
            <div className='mb-4'>
              <div className='flex justify-center items-center but'>
                <button className=' px-3' onClick={ProveGoogle}>
                  <Image
                    src='../google.svg'
                    width={50}
                    height={50}
                    alt='google'
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
