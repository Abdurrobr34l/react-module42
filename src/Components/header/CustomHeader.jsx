import React from 'react';

const CustomHeader = ({navigationData}) => {
  return (
    <>
      <header className='flex items-center justify-between py-5'>
        {/* Logo */}
        <div>
          <h1 className='px-6 text-xl font-bold transition duration-300 hover:text-accent'><a href="/index.html">Custom</a></h1>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className='flex items-center gap-5'>
            {navigationData.map(route => 
              <li key={route.id}><a href={route.link} className='transition duration-300 hover:text-accent hover:cursor-pointer'>{route.name}</a></li>            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default CustomHeader;