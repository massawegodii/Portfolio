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
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
            lg:text-4xl"
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
              className="my-2 max-w-xl py-6 font-normal tracking-tighter"
            >
              I am a passionate full stack developer with a knack for crafting
              robust and scalable web applications. With 1+ years of hands-on
              experience, I have honed my skills in front-end technologies like
              Angular js, React, Bootstrap and other material libraries, as well
              as back-end technologies like Java Spring boot and python with
              MySQL, Postgres, and MongoDB database, moreover i have skills in
              Mobile Application using flutter. My goal is to leverage my
              expertise to create innovative solutions that drive business
              growth and deliver exceptional user experiences.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center mt-40">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              width={190}
              alt="Godfrey"
              className="mb-1" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
