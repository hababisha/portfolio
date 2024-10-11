import React from 'react';
import logo from '../assets/logo.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css'; 


function Academy() {
  return (
    <div id='academy' className='bg-gray-900 h-screen flex flex-col justify-center items-center text-white p-4'>
      <div className='flex flex-col items-center'>
        <img 
          src={logo} 
          alt="Logo" 
          className='w-32 h-32 rounded mb-4 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48' 
        />
       <div class='flex flex-col sm:flex-row gap-2 justify-center items-center p-4'>
    <i class="fa-sharp fa-solid fa-location-dot text-2xl hidden sm:block"></i>
    <h1 class='text-center text-sm sm:text-base md:text-lg lg:text-xl'>
        DEFENCE UNIVERSITY COLLEGE OF ENGINEERING, BTech (ongoing)
    </h1>
</div>
      </div>
    </div>
  );
}

export default Academy;