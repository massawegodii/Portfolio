import { useEffect } from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaGraduationCap } from "react-icons/fa";

const Education = ({ isModalOpen, closeModal }) => {
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

  if (!isModalOpen) {
    return null;
  }

  const handleClose = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
    >
      <div className="relative bg-gray-900 text-white p-8 max-w-screen-lg w-full h-4/5 lg:max-h-4/5 overflow-y-auto rounded-lg shadow-2xl">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-10 flex items-center justify-center text-3xl font-bold"
        >
          <FaGraduationCap className="mr-2 text-purple-400 text-5xl" />
          Education
        </motion.h1>

        <div>
          {EDUCATION.map((education, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-gray-400">{education.year}</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold text-white">
                  {education.role} -{" "}
                  <span className="text-sm text-purple-400">
                    {education.company}
                  </span>
                </h6>
                <p className="mb-4 text-gray-400">{education.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Education.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Education;
