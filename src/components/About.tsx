import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a passionate Full Stack Developer with 1+ years of experience in creating
              beautiful and functional web applications. My journey in tech started with
              a curiosity about how things work on the internet, and it has evolved into
              a career filled with continuous learning and innovation.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
               
                <span className="text-gray-700 dark:text-gray-300">
                <FaBriefcase className="w-6 h-6 text-purple-600" />

                   Ex. Full Stack Developer in iNeuron Pvt. Ltd.
                </span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <FaCode className="w-6 h-6 text-purple-600" />

                <span className="text-gray-700 dark:text-gray-300">
                  MERN Stack Development
                </span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <FaGraduationCap className="w-6 h-6 text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Bachelore in Computer Science 
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/Durgeshji.jpg"
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-xl">
              <p className="text-2xl font-bold">1+</p>
              <p>Years of Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;