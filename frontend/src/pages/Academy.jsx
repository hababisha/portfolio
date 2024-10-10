import React from 'react'
import logo from '../assets/logo.jpg'
function Academy() {
  return (
    <div id='academy'  className='bg-gray-900 h-screen flex flex-col justify-center inset-0  object-cover items-center text-white'>
    <img src={logo} alt="" className='w-32 h-32 rounded-full mb-4 object-contain' />
      <h1 className='text-md'>DEFENCE UNIVERSITY COLLEGE OF ENGINEERING, BTech (ongoing)</h1>
    </div>
  )
}

export default Academy
