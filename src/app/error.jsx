'use client';
import { useEffect } from 'react';

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='text-center mt-10'>
      <p>There is something wrong :( Please try again</p>
      <button className='hover:text-pink-400' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}

export default Error;
