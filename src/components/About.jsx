import aboutImg from "../assets/godii.png"; 
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About 
        <span className="text-neutral-500"> Me </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="mb-6 rounded" src={aboutImg} alt="about"/>
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 0.5}}
        
        className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center lg:justify-start">
          <p className="my-2 max-w-xl py-6">🎓 Hi, Im Godfrey Matias, a recent graduate from Dar es salaam Institute of Technology (DIT) with a Bachelor degree in Computer Engineering, specializing in Mobile Application and web Development. My technical expertise includes Java Spring Boot, Python, Angular, React, Dart and proficiency in cloud platforms such as Firebase.
            I excel in dynamic, collaborative environments where creativity, continuous improvement, and innovation are encouraged. With a strong ability to translate client needs into practical, scalable solutions, I ensure seamless user experiences across web and mobile applications. My leadership experience in code development and project management enhances my effectiveness within teams, making me a valuable asset to any organization.
            I stay updated with the latest industry trends and best practices, positioning myself to provide forward-thinking solutions that drive technological advancements. Eager to contribute to pioneering projects and emerging technologies, I leverage my skills to deliver impactful results.
            </p>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
