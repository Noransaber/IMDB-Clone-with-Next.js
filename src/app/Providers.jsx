'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes';

function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <div className='text-zinc-950 bg-slate-50 dark:bg-black dark:text-gray-400 min-h-screen select-none transition-colors duration-300'>{children}</div>
    </ThemeProvider>
  );
}

export default Providers;
