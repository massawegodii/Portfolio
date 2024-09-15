import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center space-x-8">
          <a
            href="#home"
            className="px-4 py-2 text-lg font-medium  rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#education"
            className="px-4 py-2 text-lg font-medium  rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Education
          </a>
          <a
            href="#status"
            className="px-4 py-2 text-lg font-medium  rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Status
          </a>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/godfrey-massawe-751253303/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full 
             text-white hover:bg-blue-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/massawegodii/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full 
             text-white hover:bg-gray-600 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/+255753193439"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full  text-white hover:bg-green-400 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
