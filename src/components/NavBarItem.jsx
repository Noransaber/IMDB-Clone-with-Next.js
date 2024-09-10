'use client';
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <Link className={`hover:text-pink-400 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-pink-400 rounded-lg' : ''}`} href={`/?genre=${param}`}>
      {title}
    </Link>
  );
}

export default NavBarItem;
