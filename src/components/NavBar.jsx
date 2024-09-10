import React from 'react';
import NavBarItem from './NavBarItem';

function NavBar() {
  return (
    <div className='flex gap-6 justify-center p-4 bg-fuchsia-100 dark:bg-slate-600 '>
      <NavBarItem title='Trending' param='fetchTrending' />
      <NavBarItem title='Top Rated' param='fetchTopRated' />
    </div>
  );
}

export default NavBar;
