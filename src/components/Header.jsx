import React from 'react';
import MenuItems from './MenuItems';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineInfo } from 'react-icons/ai';
import DarkMode from './DarkMode';
import Link from 'next/link';
function Header() {
  return (
    <div className=' flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <MenuItems title='Home' Icon={AiFillHome} address='/' />
        <MenuItems title='About' Icon={AiOutlineInfo} address='/about' />
      </div>

      <div className='flex items-center gap-4'>
        <DarkMode />
        <Link href='/' className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-pink-400 py-1 px-2 rounded-lg'>Imdb</span>
          <span className='sm:inline hidden text-xl'>clone</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
