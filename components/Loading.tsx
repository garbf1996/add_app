export const loading = () => {
  return (
    <div className='absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 min-h-screen w-screen z-50 bg-black/50 flex justify-center items-center'>
      <div className='border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-24 w-24'></div>
    </div>
  );
};
