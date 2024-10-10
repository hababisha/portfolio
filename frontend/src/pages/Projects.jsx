import React from 'react';
import rasgeez from '../assets/rasgeez.png';
import senaymovie from '../assets/senaymovie.png';
import senaycreative from '../assets/senaycreatives.png';

function Projects() {
  return (
    <div id='projects' className=' bg-gray-900 h-screen flex items-center justify-center text-white p-4 overflow-auto'>
      <div className="flex flex-col items-center p-6 rounded-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-500 mb-6">My Projects</h1>
        <div className="flex flex-col md:flex-row md:space-x-4 w-full space-y-4 md:space-y-0">

          {/* Project Card 1 */}
          <div className="bg-slate-800 rounded-lg shadow-md p-4 w-full sm:w-48 hover:scale-105 transition duration-300 flex flex-col">
            <img src={rasgeez} alt="Project 1" className="w-full h-32 object-cover rounded-t-lg" />
            <h2 className="text-lg font-semibold mt-2">Ras GeZ</h2>
            <p className="text-gray-400 text-sm">This is a restaurant website. I built it using React and Tailwind CSS.</p>
            <a href="https://rasgeez.vercel.app/" className="mt-2 inline-block text-white hover:text-rose-300">View Project</a>
          </div>

          {/* Project Card 2 */}
          <div className="bg-slate-800 rounded-lg shadow-md p-4 w-full sm:w-48 hover:scale-105 transition duration-300 flex flex-col">
            <img src={senaymovie} alt="Project 2" className="w-full h-32 object-cover rounded-t-lg" />
            <h2 className="text-lg font-semibold mt-2">Senay Movies</h2>
            <p className="text-gray-400 text-sm">A fast and easy movie streaming website. Built with partners at Senay Creatives.</p>
            <a href="https://senaymovie.senaycreatives.com/" className="mt-2 inline-block text-white hover:text-rose-300">View Project</a>
          </div>

          {/* Project Card 3 */}
          <div className="bg-slate-800 rounded-lg shadow-md p-4 w-full sm:w-48 hover:scale-105 transition duration-300 flex flex-col">
            <img src={senaycreative} alt="Project 3" className="w-full h-32 object-cover rounded-t-lg" />
            <h2 className="text-lg font-semibold mt-2">Senay Creatives</h2>
            <p className="text-gray-400 text-sm">This is our company's landing page. We build custom projects using different technologies.</p>
            <a href="https://senaycreatives.com/" className="mt-2 inline-block text-white hover:text-rose-300">View Project</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;