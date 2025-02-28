
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-purple-600">Durgesh Kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
              MERN Stack Developer 
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I create beautiful and functional web experiences with modern technologies.
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
                Hire Me
              </button>
              <button className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-all">
                Download CV
              </button>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="aspect-square rounded-full overflow-hidden border-4 border-purple-600 shadow-2xl max-w-md">
              <img
                src="/Durgesh.jpg"
                alt="Profile"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-4 -right-4 bg-purple-600 text-white p-4 rounded-lg"
            >
              1+ Year Experience
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;