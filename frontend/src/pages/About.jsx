import React from 'react'
import pc from '../assets/pc.png'
import other from '../assets/other.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function About() {
  return (
    <div id='about' className='bg-slate-900 h-screen flex flex-col justify-center items-center gap-8 md:flex-row   text-white'>
       
       <div>    
          <div className='flex justify-center items-center gap-8 '>
                
                
                <div className='text-center md:text-left'>
                        <ul>
                          <li>Started Coding when I was 10 years old.</li>
                          <li>Mostly self-taught, but a student at Defence University college of Engineering currently.</li>
                          <li>Love to solve problems, and transform my ideas into reality.</li>
                        </ul>
                </div>
                  
                  
                  <div>
                        <img src={pc} alt=""  className='w-80 h-48 md:w-64 md:h-64 flex-shrink-0  md:mb-0 mb-2 bg-transparent'/>
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

  )
}

export default About
