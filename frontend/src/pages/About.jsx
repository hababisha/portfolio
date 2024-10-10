import React from 'react';
import pc from '../assets/pc.png';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function About() {
  return (
    <div id='about' className='bg-slate-900 h-screen flex flex-col justify-center items-center text-white'>
      <div className='w-full max-w-4xl px-4 flex flex-col md:flex-row justify-center items-center gap-8'>
        
        <div className='flex flex-col items-center md:items-start gap-4'>
          <div className='flex flex-col items-center'>
            {/* <img 
              src={pc} 
              alt="Personal Computer" 
              className='w-64 h-36 md:w-80 md:h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105' 
            /> */}
            <div className='text-center md:text-left mt-4'>
              <div className='space-y-2'>
                <p>Started coding when I was 10 years old.</p>
                <p>Mostly self-taught, but currently a student at Defence University College of Engineering.</p>
                <p>Love to solve problems and transform my ideas into reality.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-4'>
          <div className="flex flex-wrap justify-center gap-4 p-4">
            <div className="flex items-center">
              <i className="fab fa-react fa-2x" title="React" style={{ color: '#61DAFB' }}></i>
              <span className="ml-2">React</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-node fa-2x" title="Node.js" style={{ color: '#8CC84B' }}></i>
              <span className="ml-2">Node.js</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-js fa-2x" title="JavaScript" style={{ color: '#F7DF1E' }}></i>
              <span className="ml-2">JavaScript</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-python fa-2x" title="Django" style={{ color: '#0C4B33' }}></i>
              <span className="ml-2">Django</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-html5 fa-2x" title="HTML" style={{ color: '#E44D26' }}></i>
              <span className="ml-2">HTML</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-css3-alt fa-2x" title="CSS" style={{ color: '#1572B6' }}></i>
              <span className="ml-2">CSS</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-node fa-2x" title="MERN" style={{ color: '#8CC84B' }}></i>
              <span className="ml-2">MERN</span>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default About;