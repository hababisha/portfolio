import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-[4.5em] z-10 bg-slate-900 border-b-black shadow-lg p-4 fixed w-full flex justify-between items-center'>
      <div className='text-white flex items-center px-4'>
        <a href="#home" className='text-2xl'>Haileamlak</a>
      </div>
      <div className='hidden md:flex text-white'>
        <ul className='flex gap-8'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#academy">Academy</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className='md:hidden text-white'>
        <button onClick={toggleMenu} className='focus:outline-none'>
          {/* Hamburger Icon */}
          <svg className='w-8 h-8' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-[4.5em] left-0 w-full bg-slate-900 p-4 md:hidden'>
          <ul className='flex flex-col gap-4'>
            <li><a href="#home" className='text-white'>Home</a></li>
            <li><a href="#about" className='text-white'>About</a></li>
            <li><a href="#academy" className='text-white'>Academy</a></li>
            <li><a href="#projects" className='text-white'>Projects</a></li>
            <li><a href="#contact" className='text-white'>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;