import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div id='contact' className='bg-gray-900 inset-0 h-screen flex flex-col justify-center items-center text-white p-4'>
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md max-w-md w-full mx-auto">
        <h3 className="text-xl font-semibold mb-2 text-center">Based in Addis Ababa, Ethiopia</h3>
        <h3 className="text-lg text-gray-100 mb-2 text-center">haileamlakderbie1@gmail.com</h3>
        <h3 className="text-lg text-gray-100 text-center">+251 926 583 499</h3>
        <div className="mt-4">
          <a
            href="mailto:haileamlakderbie1@gmail.com"
            className="inline-block bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Email Me
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/haileamlak-derbie/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 hover:text-blue-900 transition duration-200" size="2x" />
          </a>
          <a href="https://github.com/hababisha" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-gray-800 hover:text-gray-600 transition duration-200" size="2x" />
          </a>
          <a href="https://x.com/Habidi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 hover:text-blue-600 transition duration-200" size="2x" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;