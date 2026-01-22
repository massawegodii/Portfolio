import { useEffect } from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaGraduationCap } from "react-icons/fa";

const Education = ({ isModalOpen = false, closeModal = () => {} }) => {
  useEffect(() => {
    localStorage.setItem("isModalOpen", isModalOpen);

    const handlePageReload = () => {
      closeModal();
    };

    window.addEventListener("beforeunload", handlePageReload);

    return () => {
      window.removeEventListener("beforeunload", handlePageReload);
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  const handleClose = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-80 px-4 py-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl bg-gradient-to-b from-gray-900 to-black p-10 shadow-2xl overflow-y-scroll"
        style={{
          scrollbarWidth: "none",       // Firefox
          msOverflowStyle: "none",      // IE & Edge
        }}
      >
        {/* HIDE SCROLLBAR — Chrome, Safari, Edge */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* CLOSE BUTTON */}
        <button
          onClick={closeModal}
          className="absolute right-5 top-5 rounded-full bg-red-500/90 px-4 py-1.5 text-sm font-semibold text-white hover:bg-red-600 transition"
        >
          Close
        </button>

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex items-center justify-center gap-3 text-4xl font-extrabold"
        >
          <FaGraduationCap className="text-purple-500 text-5xl" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Education
          </span>
        </motion.h1>

        {/* TIMELINE */}
        <div className="relative space-y-14 border-l border-purple-600/30 pl-8">
          {EDUCATION.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* DOT */}
              <span className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-purple-500 shadow-lg" />

              {/* CARD */}
              <div className="rounded-xl bg-gray-800/70 p-6 backdrop-blur-md shadow-lg">
                <p className="mb-2 text-sm font-medium text-purple-400">
                  {education.year}
                </p>

                <h3 className="text-xl font-semibold text-white">
                  {education.role}
                </h3>

                <p className="mb-4 text-sm text-gray-400">
                  {education.company}
                </p>

                <p className="leading-relaxed text-gray-300">
                  {education.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

Education.propTypes = {
  isModalOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default Education;
