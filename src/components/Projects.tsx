import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Online Cake Order Site',
    description:'Online Cake Order Platform is a seamless web application that connects customers with local bakeries for easy cake ordering. Users can browse, customize, and purchase cakes effortlessly, ensuring a delightful experience with secure payments, real-time tracking, and timely delivery.',
    image: 'https://images.unsplash.com/photo-1699548006100-660271f65a93?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Express.js', 'Node.js', 'MongoDB', 'javaScript','html','CSS','Bootstrap'],
    github: 'https://github.com/Durgeshkumarddddd/Online-Cake-Order-WebApp',
    live: '#',
  },
  {
    title: 'Go-WordWander ',
    description: 'Go-WordWander is an innovative web application designed to make book renting effortless and accessible. This platform connects book lovers with nearby bookstores and rental shops, allowing users to explore, rent, and enjoy books without the need for long-term purchases.',
    image: 'https://plus.unsplash.com/premium_photo-1706061120861-6435bc850a31?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Node.js', 'Express.js', 'Ejs','MongoDB', 'JavaScript', 'CSS',"Html","BootStrap"],
    github: 'https://github.com/Durgeshkumarddddd/Go-WordWander-',
    live: '#',
  },
  {
    title: 'Cloned Pinterest app',
    description: 'Pinterest Clone is an image-sharing platform where users can discover, save, and organize images into collections. It allows users to explore visually appealing content, create personalized boards, and interact with posts, making it a seamless and engaging experience for creativity and inspiration.',
    image: 'https://images.unsplash.com/photo-1641350625112-3b1d73c71418?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Express.js', 'Node.js','Ejs',"Tailwind css","javaScript","J.W.T. tockens"],
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website with animations and dark mode.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    live: '#',
  },
  {
    title: 'Weather Application',
    description: 'Real-time weather forecasting with location detection.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Weather API', 'CSS3'],
    github: '#',
    live: '#',
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging platform with end-to-end encryption.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="text-white hover:text-purple-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.live}
                    className="text-white hover:text-purple-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;