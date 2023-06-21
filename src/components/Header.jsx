import React from 'react';
import { useLocation } from 'react-router-dom';
export default function Header() {
  const location = useLocation();
  console.log(location);
  const pathCheckRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img
            src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg'
            alt='logo'
            className='h-5 cursor-pointer'
          />
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
              ${pathCheckRoute('/') && 'text-black border-b-red-500'}`}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
              ${pathCheckRoute('/offers') && 'text-black border-b-red-500'}`}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
              ${pathCheckRoute('/sign-in') && 'text-black border-b-red-500'}`}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}