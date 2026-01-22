import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGooglePlay, FaGlobe } from "react-icons/fa"; 

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                src={project.image}
                width={180}
                height={100}
                alt={project.title}
                className="mb-6 rounded cursor-pointer"
                onClick={() => openModal(project.image)}
              />
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              {/* TITLE + ACTION BUTTONS */}
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="mb-2 font-semibold flex flex-wrap items-center gap-3"
              >
                {project.title}

                {/* GOOGLE PLAY DOWNLOAD */}
                {project.downloadUrl && (
                  <a
                    href={project.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700 transition"
                    title="Download on Google Play"
                  >
                    <FaGooglePlay size={14} />
                    <span>Download</span>
                  </a>
                )}

                {/* WEBSITE LINK */}
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700 transition"
                    title="Visit Platform"
                  >
                    <FaGlobe size={14} />
                    <span>Visit Platform</span>
                  </a>
                )}
              </motion.h6>

              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-neutral-400"
              >
                {project.description}
              </motion.p>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected project"
              className="rounded-lg max-w-full max-h-full"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
