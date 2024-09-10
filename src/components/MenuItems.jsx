import React from 'react';
import Link from 'next/link';

function MenuItems({ title, Icon, address }) {
  return (
    <Link href={address} className='hover:text-pink-400'>
      <Icon className=' text-2xl sm:hidden' />
      <p className='uppercase hidden  sm:inline text-sm'>{title}</p>
    </Link>
  );
}

export default MenuItems;
