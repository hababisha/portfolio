import React from 'react';
import me from '../assets/me.jpg';

function Home() {
  return (
    <div id='home' className='bg-slate-900 h-screen text-white flex flex-col md:flex-row justify-center items-center gap-8 '>
      <div className='flex-shrink-0  md:mb-0 mb-2'>
        <img src={me} className="w-48 h-48 md:w-64 md:h-64 rounded-full" alt="me" />
      </div>
      <div className='text-center md:text-left'>
        <h1 className='text-2xl md:text-3xl'>Hello World!</h1>
        <p className='text-sm md:text-base'>I'm Haileamlak. I am a software engineer.</p>
        <p className='text-sm md:text-base'>I love creating new things, and solving problems.</p>
        <p className='text-sm md:text-base'>Scroll down to see my projects;</p>
      </div>
    </div>
  );
}




export default Home;