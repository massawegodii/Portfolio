import profilePic from "../assets/god1.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 2 }}
              className="pb-16 text-4xl font-thin tracking-tight lg:mt-9 lg:text-3xl"
            >
              Godfrey Matias
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500
              to-purple-500 bg-clip-text text-2xl tracking-light text-transparent"
            >
              Junior Software Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 tracking-tighter"
            >
              I am a passionate Full Stack Developer with over 2+ years of
              hands-on experience designing and building robust, scalable web
              and mobile applications. I have strong expertise in front-end
              technologies including Angular, React, Bootstrap, and modern UI
              libraries, as well as back-end development using Node js, Java Spring Boot
              and Python, working with MySQL, PostgreSQL and MongoDB databases.
              In addition, I have solid experience developing cross-platform
              mobile applications using Flutter. I am driven to leverage my
              technical skills to create innovative, high-performance solutions
              that support business growth and deliver exceptional user
              experiences.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center mt-40">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
              src={profilePic}
              width={190}
              alt="Godfrey"
              className="mb-1 border border-transparent hover:border-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
