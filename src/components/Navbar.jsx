import { useState } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaLaptop } from 'react-icons/fa';
import Education from './Education'; 
import {  FaGraduationCap } from 'react-icons/fa6';

const Navbar = () => {
  const [isEducationModalOpen, setEducationModalOpen] = useState(false);

  const closeModal = () => {
    setEducationModalOpen(false);
  };

  return (
    <>
      <nav className="w-full text-white py-4 shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
        <a
          onClick={() => {
            window.history.pushState({}, '', '/');
          }}
          className="px-4 py-2 text-sm sm:text-lg font-medium rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center"
        >
          <FaLaptop className="mr-2" /> {/* Home icon */}
          Home
        </a>
        <button
          onClick={() => setEducationModalOpen(true)}
          className="px-4 py-2 text-sm sm:text-lg font-medium rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center"
        >
          <FaGraduationCap className="mr-2 text-blue-500" /> 
          Education
        </button>

      </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xl sm:text-2xl mt-4 sm:mt-0">
            <a
              href="https://www.linkedin.com/in/godfrey-matias-751253303"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/massawegodii/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-white hover:bg-gray-600 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/+255753193439"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-white hover:bg-green-400 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </nav>

      {/* Education Modal */}
      {isEducationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/3">
            {/* Render Education component */}
            <Education isModalOpen={isEducationModalOpen} closeModal={closeModal} />
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </>
  );
};

export default Navbar;
